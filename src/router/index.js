import Vue from "vue";
import Router from "vue-router";
import outer from "@/views/outer"; //页面结构框架
import index from "@/views/index"; //首页
import about from "@/views/about"; //关于我们
import help from "@/views/help"; //帮助中心
import wechat from "@/views/wechat"; //微信营销
import qa from "@/views/qa"; //问答营销
import seo from "@/views/seo"; //万词霸屏
import video from "@/views/video"; //视频营销
import article from "@/views/article"; //软文营销
import agent from "@/views/agent"; //代理营销
import redbook from "@/views/redbook"; //小红书推广
import redlive from "@/views/redlive"; //网红直播
import weibo from "@/views/weibo"; //微博营销
import login from "@/views/login"; //登录

Vue.use(Router);
let router = new Router({
  routes: [
    {
      path: "/",
      component: outer,
      redirect: "/index",
      children: [
        {
          path: "/index",
          component: index,
          name: "index",
          meta: {
            title: "首页"
          }
        },
        {
          path: "/about",
          name: "about",
          component: about,
          meta: {
            title: "关于我们"
          }
        },
        {
          path: "/help",
          name: "help",
          component: help,
          meta: {
            title: "帮助中心"
          }
        },
        {
          path: "/wechat",
          name: "wechat",
          component: wechat,
          meta: {
            title: "微信营销"
          }
        },
        {
          path: "/qa",
          name: "qa",
          component: qa,
          meta: {
            title: "问答营销"
          }
        },
        {
          path: "/seo",
          name: "seo",
          component: seo,
          meta: {
            title: "万词霸屏"
          }
        },
        {
          path: "/video",
          name: "video",
          component: video,
          meta: {
            title: "视频营销"
          }
        },
        {
          path: "/article",
          name: "article",
          component: article,
          meta: {
            title: "软文营销"
          }
        },
        {
          path: "/agent",
          name: "agent",
          component: agent,
          meta: {
            title: "代理营销"
          }
        },
        {
          path: "/redbook",
          name: "redbook",
          component: redbook,
          meta: {
            title: "小红书推广"
          }
        },
        {
          path: "/redlive",
          name: "redlive",
          component: redlive,
          meta: {
            title: "网红直播"
          }
        },
        {
          path: "/weibo",
          name: "weibo",
          component: weibo,
          meta: {
            title: "微博营销"
          }
        }
      ]
    },
    {
      path: "/login",
      component: login,
      meta: {
        title: "登录"
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
