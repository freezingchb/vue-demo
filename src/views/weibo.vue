<template>
  <div class="weibo">
    <div class="banner">
      <!-- <p class="tit">微博营销</p>
      <p class="desc">适用于所有大、中、小企业用户，
        用于解决疑问决策环节客户的引导销售或品牌曝光
      </p> -->
    </div>
    <div class="extent">
      <div class="tit">
        <p class="txt">用户规模</p>
        <p class="bottom"></p>
      </div>
      <p class="ex-tip">2018年第四季度财报显示，微博月活跃用户4.62亿，连续三年增长7000万+；
        微博垂直领域数量扩大至60个，月阅读量过百亿领域达32个</p>
      <img src="@/assets/weibo/1-min.png">
    </div>
    <div class="more">
      <dl>
        <dt>微博营销</dt>
        <dd class="em" v-text="'微博营销是指通过微博平台为企业客户创造价值而执行的一种营销方式，包括话题、名博、开放平台、整体运营等，注重价值的传递、内容的互动、系统的布局、准确的定位，微博的火热发展使得其营销效果尤为显著。'">
        </dd>
      </dl>
    </div>
    <div class="all">
      <div class="tit">
        <p class="txt">微博营销的优势</p>
        <p class="bottom"></p>
      </div>
      <p class="all-tit-tip">帮助合作伙伴获得更多客户和利润，我们不遗余力！</p>
      <ul class="all-list">
        <li class="all-item" v-for="(item,idx) in allList" :key="idx">
          <div class="img">
            <img :src="requireImg(item.img)" />
            <img class="active" :src="requireImg(item.imgActive)" />
          </div>
          <p class="tit" v-text="item.tit"></p>
          <p class="desc" v-text="item.desc"></p>
        </li>
      </ul>
    </div>
    <div class="excellence">
      <div class="tit">
        <p class="txt">掌投的优势</p>
        <p class="bottom"></p>
      </div>
      <ul class="intro-list">
        <li class="intro-item" v-for="(item,idx) in introList" :key="idx">
          <div class="img">
            <img :src="requireImg(item.img)">
            <img class="active" :src="requireImg(item.imgActive)">
          </div>
          <p class="tit" v-text="item.tit"></p>
          <p class="desc" v-text="item.desc"></p>
        </li>
      </ul>
    </div>
    <div class="together">
      <div class="tit">
        <p class="txt">微博营销广告形式</p>
        <p class="bottom"></p>
      </div>
      <ul class="tab">
        <li class="item" :class="{active:nowToIdx==0}" @click="toTabClick(0)">微博KOL推广</li>
        <li class="item" :class="{active:nowToIdx==1}" @click="toTabClick(1)">微博话题榜推广</li>
      </ul>
      <div class="panel">
        <p class="panel-txt" v-show="nowToIdx==0">
          <img src="@/assets/weibo/08-kol.png"></p>
        <div class="panel-txt" v-show="nowToIdx==1">
          <p>以微博话题形式发布品牌广告，轻松上头条，能快速提升品牌的曝光量，形成舆论场。</p>
          <img src="@/assets/weibo/08-htb.png">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nowToIdx: 0,
      allList: [
        {
          img: "3-3-min.png",
          imgActive: "3-8-min.png",
          tit: "立体化",
          desc:
            "微博可以借助多种多媒体技术手段，从文字，图片，视频等展现形式对产品进行描述，从而使潜在消费者更形象直接的接受信息。"
        },
        {
          img: "3-5-min.png",
          imgActive: "3-10-min.png",
          tit: "高速度",
          desc:
            "微博最显著特征就是传播迅速，一条热度高的微博在各种互联网平台上发出后短时间内转发就可以抵达微博世界的每一个角落。"
        },
        {
          img: "3-4-min.png",
          imgActive: "3-9-min.png",
          tit: "便携性",
          desc:
            "微博营销优于传统推广，无需严格审批，从而节约了大量的时间和成本。"
        },
        {
          img: "3-2-min.png",
          imgActive: "3-7-min.png",
          tit: "互动性强",
          desc:
            "微博的互动性非常强，可以与粉丝即时沟通，及时获得用户的反馈与建议，第一时间针对用户的问题给予回应。"
        },
        {
          img: "3-1-min.png",
          imgActive: "3-6-min.png",
          tit: "营销效果好",
          desc:
            "微博的互动性非常强，可以与粉丝即时沟通，及时获得用户的反馈与建议，第一时间针对用户的问题给予回应。"
        }
      ],
      introList: [
        {
          img: "4-5-min.png",
          imgActive: "4-4-min.png",
          tit: "优质服务",
          desc:
            "每月1.98亿用户活跃于微博，可触达的注册用户超过6亿，专业的数据分析，为客户提供高质量的投放资源及营销策略。"
        },
        {
          img: "4-3-min.png",
          imgActive: "4-8-min.png",
          tit: "资源丰富",
          desc:
            "平台拥有国内丰富的微博红人资源，同时配备互联网推广运营团队，可满足不同行业品牌的传播需求。"
        },
        {
          img: "4-1-min.png",
          imgActive: "4-6-min.png",
          tit: "精准传播",
          desc:
            "平台能根据品牌受众地域、年龄、性别等找到目标用户，实现精准投放，大幅提高广告的转化率。"
        },
        {
          img: "4-2-min.png",
          imgActive: "4-7-min.png",
          tit: "效果反馈",
          desc:
            "基于多维度的数据效果监测和数据分析实时反馈，使每一次投放有据可依。"
        }
      ]
    };
  },
  methods: {
    toTabClick(idx) {
      this.nowToIdx = idx;
    },
    requireImg(name) {
      return require("../assets/weibo/" + name);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/css/weibo.scss";
</style>