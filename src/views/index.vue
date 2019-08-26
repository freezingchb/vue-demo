<template>
  <div class="index">
    <swiper v-if="list.length>0" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide v-for="(item,idx) in list" :key="idx">
        <div class="item" :style="{ background: 'url(' + item.pic + ') no-repeat center center' }"
          @click="redirectUrl(item.url)"></div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="regist-box">
      <input type="text" class="nick" placeholder="您的称呼" v-model="name" />
      <input type="text" class="phone" placeholder="联系方式" v-model="tel" />
      <p class="regist-btn" @click="registart()">免费注册</p>
    </div>
    <div class="products">
      <div class="tit">
        <p class="txt">旗下产品</p>
        <p class="bottom"></p>
      </div>
      <p class="tip">选择我们，让品牌营销变得更简单</p>
      <ul class="pro-list">
        <li class="pro-item" v-for="(item,idx) in products" :key="idx" @click="jump(item.path)">
          <img class="icon" :src="requireImg(item.icon)" />
          <img class="icon-hover" :src="requireImg(item.iconHover)" />
          <p class="tit" v-text="item.tit"></p>
          <p class="detail">查看详情>></p>
        </li>
      </ul>
    </div>
    <div class="excellent">
      <div class="tit">
        <p class="txt">核心优势</p>
        <p class="bottom"></p>
      </div>
      <ul class="tip-list">
        <li class="tip" v-for="(item,idx) in excellentTipList" :key="idx" v-text="item"></li>
      </ul>
      <ul class="e-detail-list">
        <li class="e-detail-item" v-for="(item,idx) in excellentDetailList" :key="idx">
          <p class="tit">
            <img :src="requireImg(item.icon)" />
            {{item.tit}}
          </p>
          <p class="desc" v-text="item.desc"></p>
        </li>
      </ul>
      <div class="join-btn" @click.stop="showRegist">
        合作申请
        <img src="@/assets/index/02-5-min.png" />
      </div>
    </div>
    <div class="outlook">
      <div class="tit">
        <p class="txt">发展前景</p>
        <p class="bottom"></p>
      </div>
      <ul class="outlook-list">
        <li class="outlook-item" v-for="(item,idx) in outlookList" :key="idx">
          <p class="tit">
            <img :src="requireImg(item.icon)" />
            {{item.tit}}
          </p>
          <p class="desc" v-text="item.desc"></p>
        </li>
      </ul>
    </div>
    <div class="about">
      <div class="tit">
        <p class="txt">关于掌投</p>
        <p class="bottom"></p>
      </div>
    </div>
    <div class="more">
      <dl>
        <dt>掌投平台是目前国内效果突出的一站式品牌营销供应商，凭借敏锐的市场洞察和多年深耕行业的经验，掌投平台拥有短视频营销、小红书推广、霸屏营销、网红直播、软文营销等近万家优质营销资源。</dt>
        <dd class="desc">
          掌投平台一直秉承“去中间化赋能新营销”为核心，帮助广告代理商深度挖掘客户价值，实现整合资源的最佳收益，打造属于自己的商业闭环。</dd>
        <dd class="more-btn" @click="jump('about')">
          <p>
            了解更多
            <img src="@/assets/index/02-5-min.png" />
          </p>
        </dd>
      </dl>
    </div>
    <div class="join">
      <p class="line-first">未来，属于睿智而果敢的你</p>
      <p class="line-first">每一个选择都可能决定了一个轨迹</p>
      <p class="line-second">千亿级广告营销市场， 5000万中小企业的刚性推广渠道需求</p>
      <p class="line-last">掌投，等你一起来！</p>
      <div class="regist-box">
        <input type="text" class="nick" placeholder="您的称呼" v-model="name" />
        <input type="text" class="phone" placeholder="联系方式" v-model="tel" />
        <p class="regist-btn" @click="registart()">免费注册</p>
      </div>
    </div>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { fetchPost, fetchGet } from "@/http.js";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      name: "",
      tel: "",
      list: [],
      products: [
        {
          icon: "01-6-min.png",
          iconHover: "01-14-min.png",
          tit: "短视频营销",
          path: "video"
        },
        {
          icon: "01-9-min.png",
          iconHover: "01-1-min.png",
          tit: "小红书推广",
          path: "redbook"
        },
        {
          icon: "01-4-min.png",
          iconHover: "01-12-min.png",
          tit: "问答营销",
          path: "qa"
        },
        {
          icon: "01-5-min.png",
          iconHover: "01-13-min.png",
          tit: "霸屏营销",
          path: "seo"
        },
        {
          icon: "01-8-min.png",
          iconHover: "01-16-min.png",
          tit: "网红直播",
          path: "redlive"
        },
        {
          icon: "01-3-min.png",
          iconHover: "01-11-min.png",
          tit: "微信营销",
          path: "wechat"
        },
        {
          icon: "01-2-min.png",
          iconHover: "01-10-min.png",
          tit: "微博营销",
          path: "weibo"
        },
        {
          icon: "01-7-min.png",
          iconHover: "01-15-min.png",
          tit: "软文营销",
          path: "article"
        }
      ],
      excellentTipList: ["免费培训", "全程扶持", "庞大红利", "持续收益"],
      excellentDetailList: [
        {
          icon: "02-1-min.png",
          tit: "0元代理  无需经验",
          desc: "0元代理，低风险高收益 ；\n一手资源，所有资源都是上游底价"
        },
        {
          icon: "02-2-min.png",
          tit: "收益快  承接灵活",
          desc: "自由定价、自主投放，效果显著，\n方便快捷，收益迅速"
        },
        {
          icon: "02-4-min.png",
          tit: "成熟代理商年均收益278万",
          desc: "帮助广告代理商深度挖掘客户价值，\n实现整合资源的最佳收益"
        },
        {
          icon: "02-3-min.png",
          tit: "共享平台10000+资源",
          desc: "共享优质的海量媒体资源库，充分满足\n企业营销推广需求"
        }
      ],
      outlookList: [
        {
          icon: "03-1-min.png",
          tit: "千亿级广告营销市场",
          desc:
            "企业要想长期发展，品牌营销推广是必不可少而且要长期坚持的功课，掌投拥有的优势资源可满足企业客户的所有需求。"
        },
        {
          icon: "03-2-min.png",
          tit: "5000万中小企业的刚性需求",
          desc:
            "作为企业网络营销中必不可少的一环，品牌营销在企业网络营销过程中所占有比例越来越高，越来越多的企业客户会通过互联网进行品牌造势和背书。"
        },
        {
          icon: "03-3-min.png",
          tit: "利润空间",
          desc:
            "掌投代理平台拥有独立的报价体系，代理商可通过平台灵活设定价格体系，让您可通过系统简单三步设置，自由定价，利润空间最大化。"
        }
      ],
      swiperOption: {
        autoplay: {
          delay: 5000
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  methods: {
    registart: function() {
      fetchPost("/home/home/addContact", {
        name: this.name,
        tel: this.tel
      })
        .then(data => {
          this.$alert('已提交成功，我们专属顾问将会第一时间联系您', "");
          this.name = "";
          this.tel = "";
        })
        .catch(err => {
          this.$alert(err, "");
        });
    },
    redirectUrl(e) {
      window.location.href = e;
    },
    showRegist() {
      this.$emit("onRegistClick");
    },
    jump(path) {
      this.$router.replace(`/${path}`);
    },
    requireImg(name) {
      return require("../assets/index/" + name);
    },
    callback() {}
  },
  mounted: function() {
    // banner
    fetchPost("/home/home/banners", {})
      .then(data => {
        this.list = data.info;
      })
      .catch(err => {
        this.$alert(err, "");
      });
  }
};
</script>
<style scoped lang="scss">
@import "@/css/index.scss";
</style>
