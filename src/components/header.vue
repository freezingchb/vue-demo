<template>
  <div class="header">
    <div class="header-content-box">
      <div class="left-logo">
        <img src="@/assets/outer/00-logo-min.png" />
      </div>
      <ul class="nav-list">
        <li class="nav-item" :class="{active:nowPath=='index'}" @click="jump('index')">首页</li>
        <li class="nav-item" :class="{active:getIfResult(nowPath)}">
          <span @click="jump('video')">产品中心</span>
          <img src="@/assets/outer/00-4-min.png" alt />
          <ul class="drop-down-list">
            <li class="drop-down-item" :class="{active:idx==nowDropActive}" v-for="(item,idx) in dropDownList"
              :key="idx" v-text="item.tit" @click.stop="jumpSub(item.path,idx)"></li>
          </ul>
        </li>
        <li class="nav-item" :class="{active:nowPath=='agent'}" @click="jump('agent')">代理加盟</li>
        <li class="nav-item" :class="{active:nowPath=='about'}" @click="jump('about')">关于我们</li>
        <li class="nav-item" :class="{active:nowPath=='help'}" @click="jump('help')">帮助中心</li>
      </ul>
      <ul class="operation">
        <li class="login"><a href="http://www.quanmeipai.com/" target="_blank">代理登录</a></li>
        <li class="regist" @click.stop="showRegist()">注册有礼</li>
      </ul>
      <regist class="regist-panel" v-show="this.$store.state.isShowRegist" />
    </div>
  </div>
</template>
<script>
import regist from "@/components/regist";
export default {
  components: {
    regist
  },
  props: ["nowPath"],
  data() {
    return {
      isShowRegist: false,
      nowDropActive: -1,
      dropDownList: [
        {
          tit: "短视频营销",
          path: "video"
        },
        {
          tit: "小红书推广",
          path: "redbook"
        },
        {
          tit: "问答营销",
          path: "qa"
        },
        {
          tit: "万词霸屏",
          path: "seo"
        },
        {
          tit: "网红直播",
          path: "redlive"
        },
        {
          tit: "微信营销",
          path: "wechat"
        },
        {
          tit: "微博营销",
          path: "weibo"
        },
        {
          tit: "软文营销",
          path: "article"
        }
      ]
    };
  },
  watch: {
    nowPath(val) {
      this.nowDropActive = -1;
      for (let i = 0; i < this.dropDownList.length; i++) {
        if (this.dropDownList[i].path == val) {
          this.nowDropActive = i;
          break;
        }
      }
      // chrome
      document.body.scrollTop = 0;
      // firefox
      document.documentElement.scrollTop = 0;
      // safari
      window.pageYOffset = 0;
    }
  },
  created() {
    for (let i = 0; i < this.dropDownList.length; i++) {
      if (this.dropDownList[i].path == this.nowPath) {
        this.nowDropActive = i;
        break;
      }
    }
  },
  methods: {
    hideRegistSub() {
      this.isShowRegist = false;
    },
    getIfResult(txt) {
      if (txt == "product") {
        return true;
      } else {
        let bool = false;
        for (let i = 0; i < this.dropDownList.length; i++) {
          if (this.dropDownList[i].path == txt) {
            bool = true;
            break;
          }
        }
        return bool;
      }
    },
    jumpSub(path, idx) {
      this.$router.replace(`/${path}`);
      if (path == "index") {
        this.nowDropActive = -1;
      } else {
        this.nowDropActive = idx;
      }
    },
    jump(path) {
      this.$router.replace(`/${path}`);
      this.nowDropActive = -1;
    },
    showRegist() {
      this.$store.commit('showRegist')
    }
  }
};
</script>
<style scoped lang="scss">
.header {
  height: 1rem;
  background: #fff;
  font-size: 0;
  text-align: center;
  .header-content-box {
    margin: 0 auto;
    display: inline-block;
    height: 100%;
    position: relative;
    .left-logo {
      display: inline-block;
      height: 100%;
      vertical-align: top;
      img {
        height: 0.54rem;
        width: auto;
        margin-top: 0.24rem;
      }
    }
    .nav-list {
      display: inline-block;
      height: 100%;
      vertical-align: top;
      padding-left: 0.82rem;
      .nav-item {
        display: inline-block;
        font-size: 0.22rem;
        height: 1rem;
        line-height: 1.03rem;
        vertical-align: top;
        color: #262b40;
        margin-left: 0.55rem;
        position: relative;
        cursor: pointer;
        img {
          height: 0.08rem;
          width: auto;
          margin-left: 0.01rem;
          vertical-align: 0.01rem;
        }
        .drop-down-list {
          display: none;
          padding: 0.18rem 0.13rem;
          width: 0.94rem;
          text-align: left;
          background: #fff;
          position: absolute;
          z-index: 10;
          top: 1rem;
          left: -0.05rem;
          box-shadow: 0 0.07rem 0.1rem 0 rgba(0, 0, 0, 0.1);
          .drop-down-item {
            font-size: 0.18rem;
            color: #515566;
            height: 0.36rem;
            line-height: 0.36rem;
            text-align: center;
            font-weight: normal;
          }
          .drop-down-item:hover,
          .drop-down-item.active {
            color: #ffa218;
          }
        }
      }
      .nav-item.active {
        position: relative;
        font-weight: bold;
      }
      .nav-item.active::after {
        content: "";
        display: block;
        height: 0.02rem;
        width: 60%;
        background: #262b40;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        position: absolute;
        bottom: 0;
        left: 50%;
        z-index: 1;
      }
      .nav-item:nth-child(2):hover {
        .drop-down-list {
          display: block;
        }
      }
    }
    .operation {
      display: inline-block;
      vertical-align: top;
      padding-left: 1.84rem;
      .login,
      .regist {
        display: inline-block;
        vertical-align: top;
        margin-top: 0.33rem;
        width: 1.18rem;
        height: 0.38rem;
        line-height: 0.35rem;
        font-size: 0.18rem;
        border-radius: 0.02rem;
        box-sizing: border-box;
        cursor: pointer;
      }
      .login {
        color: #31384e;
        border: 1px solid #7E828F;
      }
      .regist {
        color: #fff;
        background: #ffa218;
        border: 1px solid #ffa218;
        margin-left: 0.19rem;
      }
      .login:hover,
      .regist:hover {
        opacity: 0.7;
      }
    }
    .regist-panel {
      -webkit-transform: translate(-50%,-50%);
      transform: translate(-50%,-50%);
      position: fixed;
      top: 50%;
      left: 50%;
      z-index: 2;
    }
  }
}
</style>
