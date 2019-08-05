(function (win, doc) {
  var ua = navigator.userAgent.toLowerCase(),
    fnId = 0,
    fncache = {};
  var nuKey = "bridgeFnNewurl2Callback",
    closeKey = "_tc_web_bartag_isStop";
  var nuCache, closeCache;
  //_tc_bridge_public.ntvCB  app回调js写死的
  function processFn(fn, param) {
    fnId++;

    var fnname = param.cbcache ? param.cbcache + "1" : "bridgeFnCache" + fnId,
      fntype = typeof fn;
    if (fntype === "function") {
      fncache[fnname] = fn;
    } else if (fntype === "string") {
      var fnarr = fn.split("."),
        fnnames;
      for (var i = 0; i < fnarr.length; i++) {
        if (i === 0) {
          fnnames = window[fnarr[i]];
        } else if (
          Object.prototype.toString.call(fnnames) === "[object Object]"
        ) {
          fnnames = fnnames[fnarr[i]];
        } else {
          fnnames == false;
          break;
        }
        if (!fnnames) {
          break;
        }
      }
      fncache[fnname] = typeof fnnames === "function" ? fnnames : function () {};
    } //arguments

    if (param.cbcache) {
      return [param.cbcache, "1"];
    } else {
      return ["bridgeFnCache", fnId];
    }
  }

  var isArray =
    Array.isArray ||
    function (object) {
      return object instanceof Array;
    },
    slice = [].slice;

  function isWindow(obj) {
    return obj != null && obj == obj.window;
  }

  function isObject(obj) {
    return Object.prototype.toString.call(obj) == "[object Object]";
  }

  function isPlainObject(obj) {
    return (
      isObject(obj) &&
      !isWindow(obj) &&
      Object.getPrototypeOf(obj) == Object.prototype
    );
  }

  function extend(target, source, deep) {
    for (var key in source)
      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
        if (isPlainObject(source[key]) && !isPlainObject(target[key]))
          target[key] = {};
        if (isArray(source[key]) && !isArray(target[key])) target[key] = [];
        extend(target[key], source[key], deep);
      } else if (source[key] !== undefined) target[key] = source[key];
  }

  var pub = {
    /**
     * @description 当前平台类型
     * @type {Number} {0: iPhone, 1: Andriod}
     */
    platform: null,
    /**
     * @description 当前是否在客户端中
     * @type {boolean} {true: 在客户端中, false: 不在客户端中}
     */
    isTc: false,
    extend: function (target) {
      var deep,
        args = slice.call(arguments, 1);
      if (typeof target == "boolean") {
        deep = target;
        target = args.shift();
      }
      args.forEach(function (arg) {
        extend(target, arg, deep);
      });
      return target;
    },
    /**
     * @description 判断一个对象是不是空对象 || 空数组
     * @param {Object} obj 待判断的对象
     * @return {boolean}
     */
    NaEptObj: function (obj) {
      var types = Object.prototype.toString.call(obj);
      if (types === "[object Array]" && obj.length > 0) {
        return true;
      } else if (types === "[object Object]") {
        for (var key in obj) {
          if (hasOwnProperty.call(obj, key)) return true;
        }
        return false;
      }
      return false;
    },
    /**
     * @description 对传入的JSON对象做JSON.stringify和encode操作,并返回结果
     * @param  {JSON} jsonObj 传入的JSON对象
     * @return {String} 返回转义过的JSON字符串
     */
    stringifyAndEncode: function (jsonObj, notcode) {
      try {
        var val = JSON.stringify(jsonObj);
        if (!notcode) {
          val = encodeURIComponent(val);
        }
        return val;
      } catch (e) {
        return "";
      }
    },
    /**
     * @description 对传入的JSON字符串做decode和JSON.parse操作,并返回结果
     * @param  {JSON} jsonStr 传入的JSON字符串
     * @return {Object} 返回处理过的对象
     */
    decodeAndParse: function (jsonStr) {
      try {
        return JSON.parse(decodeURIComponent(jsonStr));
      } catch (e) {
        return {};
      }
    },
    /**
     * @description 拼接native端方法的JSON字符串参数
     * @param params 调用的方法的参数对象
     * @param CBPluginName 回调h5的模块名
     * @param CBTagName 回调h5某个模块下的方法名
     * @returns {String} 调用native方法的参数
     */
    ntvCB: function (json, pass) {
      if (json) {
        var cbObj =
          Object.prototype.toString.call(json) === "[object Object]" ?
          json :
          pub.decodeAndParse(json),
          fnmame = cbObj.pluginname + cbObj.tagname,
          callback = fncache[fnmame];
        if (cbObj.pluginname === nuKey) {
          if (cbObj.tagname) {
            var n = cbObj.tagname.toString().split(".");
            if (n.length == 2 && win[n[0]] && win[n[0]][n[1]]) {
              cbObj.pluginname = n[0];
              cbObj.tagname = n[1];
            } else if (nuCache && nuCache.length == 2) {
              fnmame = nuCache[0] + nuCache[1];
              callback = fncache[fnmame];
              cbObj.pluginname = nuCache[0];
              cbObj.tagname = nuCache[1];
            }
          }
        }
        if (closeCache && closeKey === fnmame) {
          closeCache(cbObj.param);
        }
        json = cbObj;
        if (!!cbObj.cacheKey) {
          var cacheValue = Android.getCacheByKey(cbObj.cacheKey);
          if (!!cacheValue) {
            cachecbObj = JSON.parse(cacheValue);
            cbObj.param = cachecbObj.param;
          }
        }

        if (!callback) {
          callback = window[cbObj.pluginname];
          callback = callback ? callback[cbObj.tagname] : false;
          if (!callback) {
            if (pass === "catch") {
              return;
            }
            setTimeout(function () {
              pub.ntvCB(json, "catch");
            }, 10);
          } else {
            callback && callback(cbObj.param);
          }
        } else {
          callback(cbObj.param);
          if (fnmame.indexOf("_cbcachemark_") === -1) {
            delete fncache[fnmame];
          }
        }
      }
    },
    /**
     * @brief 内部URL跳转
     * @description 内部隐藏iframe，做URL跳转
     * @method loadURL
     * @param {String} url 需要跳转的链接
     * @since v1.1.0
     */
    loadURL: function (url) {
      var iframe = doc.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = url;
      var cont = doc.body || doc.documentElement;
      cont.appendChild(iframe);

      setTimeout(function () {
        iframe.parentNode.removeChild(iframe);
        iframe = null;
      }, 200);
    },
    /**
     * app版本判断
     * 当前版本高于支持的版本 返回true，反之 返回false
     * @param minVer
     * @returns {boolean}
     */
    appver: null,
    isAppVersionGreatThan: function (minVer) {
      return pub.appver >= minVer && minVer > 0;
    },
    /**
     * api不支持时回调
     * @param jsonObj
     * @param supportVer
     */
    appVersionNotSupportCallback: function (jsonObj, supportVer) {
      setTimeout(function () {
        try {
          var cbJson = {
            pluginname: jsonObj.CBPluginName,
            tagname: jsonObj.CBTagName,
            param: {
              tagname: jsonObj.param && jsonObj.param.tagname,
              startVer: supportVer
            }
          };
          pub.ntvCB(pub.stringifyAndEncode(cbJson));
        } catch (e) {}
      }, 10);
    },
    init: function () {
      if (ua.indexOf("iphone") > -1 || ua.indexOf("ipad") > -1) {
        pub.platform = 0; // iPhone
      } else if (ua.indexOf("android") > -1) {
        pub.platform = 1; // Android
      }

      if (ua.indexOf("tctravel") != -1) {
        pub.isTc = true;
      }

      pub.appver = (function () {
        var verInt = 0,
          verMatch = ua.match(/tctravel\/([\d\.]+)/i);
        if (!!verMatch && verMatch.length >= 2) {
          var verStr = verMatch[1].split(".");
          if (verStr.length == 2) {
            verStr.push(0);
          }
          if (verStr.length == 3) {
            //
            verInt = parseInt(verStr.join(""));
          }
        }
        return verInt;
      })();
    }
  };
  pub.processFn = processFn;
  pub.init();

  function getEasyJsUrl(obj, functionName, args) {
    var argStr = ":s" + encodeURIComponent(":" + encodeURIComponent(args));
    pub.loadURL(
      "easy-js:" + obj + ":" + encodeURIComponent(functionName + ":") + argStr
    );
  }

  win._tc_bridge_public = pub;

  var methodConfig = [{
      pfn: "_tc_bridge_bar",
      dfn: "_tc_ntv_bar",
      config: [{
        name: "set_navbar",
        v: 700,
        cbcache: true
      }]
    },
    {
      pfn: "_tc_bridge_map",
      dfn: "_tc_ntv_map",
      config: [{
        name: "app_location",
        v: 710,
        cbcache: true,
        callfn: "app_locate"
      }]
    },
    {
      pfn: "_tc_bridge_util",
      dfn: "_tc_ntv_util",
      config: [{
          name: "set_webview_back",
          v: 710,
          dfn: "_tc_ntv_bar",
          emptyPass: 1
        },
        {
          name: "pick_image",
          v: 920
        }
      ]
    }
  ];
  var selfBridge = {
    key: "7bf49c807db5a0afc194a4f3e8694ed7"
  };
  for (var i = 0; i < methodConfig.length; i++) {
    var tconfig = methodConfig[i],
      configs = tconfig.config;
    win[tconfig.pfn] = win[tconfig.pfn] || {};

    for (var j = 0; j < configs.length; j++) {
      (function (item, nconfig, bfn, pname) {
        //names
        var pass;
        if (pub.platform == 1) {
          //安卓版本
          pass = pub.isAppVersionGreatThan(item.av || item.v);
        } else {
          pass = pub.isAppVersionGreatThan(item.v);
        }

        var dfn = item.dfn || nconfig.dfn,
          cfn = item.name;

        bfn[cfn] = function (param) {
          if (item.processData) {
            param = item.processData(param);
          }
          if (param) {
            if (item.cbcache && param.cbcache !== false) {
              param.cbcache = pname + "_cbcachemark_" + cfn;
            }
            if (param.callback) {
              var fnArrs = pub.processFn(param.callback, param);
              param.CBPluginName = fnArrs[0];
              param.CBTagName = fnArrs[1];
            }
          }

          if (!item.emptyPass && !pub.NaEptObj(param)) {
            //不能为空
            return;
          }
          var callfns = item.callfn || cfn;
          if (pass) {
            if (item.rnparam) {
              param = item.rnparam(param);
            }
            if (pub.platform == 0) {
              //iPhone
              getEasyJsUrl(dfn, callfns, pub.stringifyAndEncode(param));
            } else if (pub.platform == 1) {
              var sendStr = pub.stringifyAndEncode(
                param,
                item.notcode && pub.isAppVersionGreatThan(item.notcode)
              );
              win[dfn] && win[dfn][callfns] && win[dfn][callfns](sendStr);
            }
          } else {
            item.notSupprot && item.notSupprot(param);
            if (item.notSupprotNormal !== false) {
              pub.appVersionNotSupportCallback(
                param,
                item.v
                .toString()
                .split("")
                .join(".")
              );
            }
          }
        };
        selfBridge[tconfig.pfn] = {};
        selfBridge[tconfig.pfn][cfn] = bfn[cfn];
      })(configs[j], tconfig, win[tconfig.pfn], tconfig.pfn);
    }
  }
  win.xwbridge = {
    setTitle: function (tit) {
      selfBridge._tc_bridge_bar.set_navbar({
        key: selfBridge.key,
        param: {
          center: [{
            tagname: "tag_title",
            value: tit
          }]
        }
      });
    },
    getLocation: function (cb) {
      selfBridge._tc_bridge_map.app_location({
        key: selfBridge.key,
        param: {
          showType: "1",
          cacheType: "1"
        },
        callback: function (data) {
          if (cb && cb.onFinish) {
            if (data && data.CBData) {
              var dbody = JSON.parse(data.CBData);
              if (dbody.locationSwitch == "0") {
                cb.onFinish({
                  code: 5,
                  data: {}
                });
              } else {
                if (dbody.locationInfo && dbody.locationInfo.lon) {
                  cb.onFinish({
                    code: 0,
                    data: {
                      longitude: dbody.locationInfo.lon,
                      latitude: dbody.locationInfo.lat
                    }
                  });
                } else {
                  cb.onFinish({
                    code: 6,
                    data: {}
                  });
                }
              }
            } else {
              cb.onFinish({
                code: 6,
                data: {}
              });
            }
          }
        }
      });
    },
    getImageByCamera: function (cb) {
      selfBridge._tc_bridge_util.pick_image({
        key: selfBridge.key,
        param: {
          type: "0",
          alert: "1",
          maxSize: cb.maxSize,
          maxLength: cb.maxLength
        },
        callback: function (data) {
          if (cb && cb.onFinish) {
            if (data && data.CBData) {
              var dbody = JSON.parse(data.CBData);
              if (dbody.status == "1") {
                cb.onFinish({
                  code: 0,
                  data: {
                    image: dbody.imageBase64
                  }
                });
              } else if (dbody.status == "0") {
                cb.onFinish({
                  code: 4,
                  data: {}
                });
              } else if (dbody.status == "2") {
                cb.onFinish({
                  code: 3,
                  data: {}
                });
              } else if (dbody.status == "3") {
                cb.onFinish({
                  code: 1,
                  data: {}
                });
              } else if (dbody.status == "4") {
                cb.onFinish({
                  code: 2,
                  data: {}
                });
              } else {
                cb.onFinish({
                  code: 4,
                  data: {}
                });
              }
            } else {
              cb.onFinish({
                code: 4,
                data: {}
              });
            }
          }
        }
      });
    },
    close: function () {
      location.href = "tctclient://web/close";
    }
  };
  for (var i = 0; i < methodConfig.length; i++) {
    delete win[methodConfig[i].pfn];
  }
  var getAPI, setAPI;
  if (pub.isAppVersionGreatThan(837)) {
    getAPI = "get_timing_webapp_cache";
    setAPI = "set_timing_webapp_cache";
  } else {
    getAPI = "get_webapp_cache";
    setAPI = "set_webapp_cache";
  }

  var DATA_CACHE = {
    get: function (params, fn) {
      //changeItems ： "a.b.ca"

      var param = params.param,
        str = JSON.stringify(param);

      _tc_bridge_util[getAPI]({
        param: {
          projectTag: "fed_common",
          keys: [str]
        },
        callback: function (data) {
          data = JSON.parse(data.CBData);
          fn(data.caches[str]);
        }
      });
    },
    set: function (params, result, last, fn) {
      if (!last) {
        DATA_CACHE.get(params, function (res) {
          res = res || false;
          differ(res, result);
        });
      } else {
        differ(last, result);
      }

      function differ(oldres, newres) {
        var new1 = newres;
        if (oldres) {
          oldres = pub.extend({}, oldres);
          newres = pub.extend({}, newres);
          try {
            if (params && params.ignore) {
              var list = params.ignore.split(",");

              list.forEach(function (item) {
                var ignore = item.split("."),
                  cachecbObj1,
                  cachecbObj2;
                for (var i = 0; i < ignore.length - 1; i++) {
                  cachecbObj1 = cachecbObj1 ?
                    cachecbObj1[ignore[i]] :
                    oldres[ignore[i]];
                  cachecbObj2 = cachecbObj2 ?
                    cachecbObj2[ignore[i]] :
                    newres[ignore[i]];
                }
                cachecbObj1 && (cachecbObj1[ignore[ignore.length - 1]] = "");
                cachecbObj2 && (cachecbObj2[ignore[ignore.length - 1]] = "");
              });
            }
          } catch (e) {}
        } else {
          oldres = {};
        }

        if (JSON.stringify(oldres) == JSON.stringify(newres)) {
          fn(false);
        } else {
          var items = {};
          items[JSON.stringify(params.param)] = JSON.stringify(new1);
          fn(true);
          _tc_bridge_util[setAPI]({
            param: {
              projectTag: "fed_common",
              setMap: items
            },
            callback: function (data) {}
          });
        }
      }
    }
  };
})(window, document);

(function (win, plugin) {
  var timeDelta = "";
  var datetime = win._tc_bridge_datetime;

  function setResult(cbStr) {
    var cbObj = JSON.parse(cbStr);
    if (cbObj) {
      timeDelta = parseInt(cbObj.delta) || 0;
    }
  }

  function initTimeDelta() {
    if (win.Android && Android.getCorrectLocalTime) {
      setResult(Android.getCorrectLocalTime());
    } else if (
      timeDelta === "" &&
      win._tc_bridge_public.platform == 0 &&
      win._tc_bridge_public.isAppVersionGreatThan(814)
    ) {
      datetime &&
        datetime.correct_local_time &&
        datetime.correct_local_time({
          callback: function (data) {
            if (data && data.CBData) {
              setResult(data.CBData);
            }
          }
        });
    } else if (timeDelta === "") {
      timeDelta = 0;
    }
  }
  /**
   * 获取同程app矫正后的时间
   * @param chinaTime
   * @returns {number}
   * @constructor
   */
  function dateNow() {
    initTimeDelta();
    var timeMillis = Date.now();
    timeMillis += timeDelta || 0;
    return timeMillis;
  }
  initTimeDelta();
  plugin.dateNow = dateNow;
})(window, (window._tc_bridge_datetime = window._tc_bridge_datetime || {}));
