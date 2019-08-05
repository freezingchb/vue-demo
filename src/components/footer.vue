<template>
  <div class="footer">
    <div class="footer-content-box">
      <ul class="footer-content">
        <li class="footer-left">
          <div class="logo">
            <img src="@/assets/outer/07-logo-min.png" />
          </div>
          <div class="mail-order">
            <img src="@/assets/outer/07-1-min.png" />
            <input type="text" placeholder="您的邮箱" v-model="email" />
            <p class="order" @click="addEmail()">订阅期刊</p>
          </div>
          <p class="tip">增值电信业务经营许可证 沪B2-20180435</p>
        </li>
        <li class="footer-center">
          <ul class="footer-nav">
            <li class="column" v-for="(item,idx) in footerNav" :key="idx">
              <p class="tit" v-text="item.tit" @click="jump(item.path)"></p>
              <p class="txt" v-for="(nav,nidx) in item.navs" :key="nidx" v-text="nav.tit" @click="jump(nav.path)"></p>
            </li>
          </ul>
        </li>
        <li class="footer-right">
          <ul class="qr-list">
            <li class="qr-box">
              <img src="@/assets/outer/01-gzh.png" />
              <p class="qr-txt">微信公众号</p>
            </li>
            <li class="qr-box">
              <img src="@/assets/outer/01-kf.png" />
              <p class="qr-txt">在线客服</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="copyright"></div>
  </div>
</template>
<script>
import {fetchPost, fetchGet} from '@/http.js'
export default {
  data() {
    return {
      email: '',
      footerNav: [
        {
          tit: "关于我们",
          path: "about",
          navs: [
            {
              tit: "平台介绍",
              path: "about"
            },
            {
              tit: "服务理念",
              path: "about"
            },
            {
              tit: "联系我们",
              path: "about"
            }
          ]
        },
        {
          tit: "合作共赢",
          path: "agent",
          navs: [
            {
              tit: "招募代理",
              path: "agent"
            },
            {
              tit: "商务合作",
              path: "agent"
            }
          ]
        },
        {
          tit: "帮助中心",
          path: "help",
          navs: [
            {
              tit: "新手入门",
              path: "help"
            },
            {
              tit: "常见问题",
              path: "help"
            },
            {
              tit: "服务保障",
              path: "help"
            }
          ]
        }
      ]
    };
  },
  methods: {
    addEmail: function() {
      fetchPost('/home/home/addEmail', {
        email: this.email
      }).then((data) => {
        this.$alert(data.info, '');
        this.email = '';
      }).catch(err => {
        this.$alert(err, '');
      })
    },
    jump(path) {
      this.$router.replace(`/${path}`);
    }
  }
};
</script>

<style scoped lang="scss">
.footer {
  font-size: 0;
  text-align: center;
  .footer-content-box {
    height: 4.26rem;
    background: #1e1e1e;
    .footer-content > li {
      display: inline-block;
      vertical-align: top;
    }
    .footer-content {
      display: inline-block;
      height: 100%;
      vertical-align: top;
      position: relative;
      .footer-left {
        padding-top: 1.09rem;
        text-align: left;
        .logo > img {
          height: 0.79rem;
          width: auto;
        }
        .mail-order {
          margin-top: 0.32rem;
          background: #ffa218;
          height: 0.46rem;
          width: 2.8rem;
          border-radius: 0.02rem;
          img {
            height: auto;
            width: 0.24rem;
            margin-left: 0.12rem;
            margin-top: 0.13rem;
            vertical-align: top;
            display: inline-block;
          }
          input {
            display: inline-block;
            vertical-align: top;
            width: 1.58rem;
            height: 100%;
            padding-left: 0.05rem;
            font-size: 0.14rem;
            border: 0;
            line-height: auto;
            background: transparent;
            box-sizing: border-box;
          }
          input::placeholder {
            color: #000;
            font-weight: bold;
          }
          .order {
            display: inline-block;
            vertical-align: top;
            width: 0.82rem;
            height: 0.38rem;
            line-height: 0.38rem;
            font-size: 0.14rem;
            color: #fff;
            background: #000;
            border-radius: 0.04rem;
            text-align: center;
            margin-top: 0.04rem;
            font-weight: bold;
            cursor: pointer;
          }
        }
        .tip {
          position: absolute;
          bottom: 0.25rem;
          left: 0;
          font-size: 0.12rem;
          color: #606971;
          white-space: nowrap;
        }
      }
      .footer-center {
        padding-top: 1.14rem;
        padding-left: 1.44rem;
        .footer-nav {
          .column {
            width: 1.2rem;
            margin-right: 0.44rem;
            border-top: 0.01rem solid #fff;
            display: inline-block;
            vertical-align: top;
            text-align: left;
            .tit {
              color: #fff;
              padding-top: 0.26rem;
              font-weight: bold;
              font-size: 0.18rem;
              line-height: 0.18rem;
              cursor: pointer;
            }
            .txt {
              padding-top: 0.12rem;
              font-size: 0.16rem;
              color: #606971;
              line-height: 0.16rem;
              cursor: pointer;
            }
            .txt:hover {
              color: #ffa218;
            }
          }
        }
      }
      .footer-right {
        padding-top: 0.94rem;
        padding-left: 0.73rem;
        .qr-list {
          .qr-box {
            display: inline-block;
            vertical-align: top;
            margin-left: 0.2rem;
            img {
              width: 0.88rem;
              height: auto;
              border-radius: 0.04rem;
              padding: 0.12rem;
              border: 1px solid #fff;
            }
            .qr-txt {
              font-size: 0.16rem;
              padding-top: 0.12rem;
              font-weight: bold;
              color: #fff;
            }
          }
          .qr-box:first-child {
            margin-left: 0;
          }
        }
      }
    }
  }
}
</style>
