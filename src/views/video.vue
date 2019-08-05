<template>
  <div class="video">
    <div class="banner">
      <!-- <p class="tit">短视频营销</p>
      <p class="desc">视频推广，当下市场最为火热的品牌推广！</p> -->
    </div>
    <div class="more">
      <dl>
        <dt>短视频营销</dt>
        <dd class="em" v-text="'短视频营销是目前最新兴，最直观的网络营销方式，短片感染力强、形式内容多样，又具有互联网营销的优势，能带来极强的传播影响力。'"></dd>
        <dd class="desc">据统计选择文字形式读取信息占4%；选择图片形式读取信息占12%；选择视频形式读取信息占84%；由此可见视频对于企业品牌、产品推广效果极佳。</dd>
      </dl>
    </div>
    <div class="forecast">
      <p class="fore-tit">2016—2020年中国短视频营销市场及预测</p>
      <img src="@/assets/video/02@2x-min.png">
    </div>
    <div class="video-advantage">
      <div class="tit">
        <p class="txt">短视频营销的优势</p>
        <p class="bottom"></p>
      </div>
      <ul class="adv-list">
        <li class="adv-item" v-for="(item,idx) in vadvList" :key="idx">
          <div class="img">
            <img :src="requireImg(item.img)">
            <img class="active" :src="requireImg(item.imgActive)">
          </div>
          <p class="tit" v-text="item.tit"></p>
          <p class="desc" v-text="item.desc"></p>
        </li>
      </ul>
    </div>
    <div class="platform-advantage">
      <div class="tit">
        <p class="txt">我们平台的优势</p>
        <p class="bottom"></p>
      </div>
      <ul class="padv-list">
        <li class="padv-item" v-for="(item,idx) in padvList" :key="idx">
          <div class="img">
            <img :src="requireImg(item.img)">
          </div>
          <p class="tit" v-text="item.tit"></p>
          <p class="desc" v-text="item.desc"></p>
        </li>
      </ul>
    </div>
    <div class="form">
      <div class="tit">
        <p class="txt">短视频营销广告形式</p>
        <p class="bottom"></p>
      </div>
      <img src="@/assets/video/5-min.png">
    </div>
    <div class="server">
      <div class="tit">
        <p class="txt">一站式投放流程服务</p>
        <p class="bottom"></p>
      </div>
      <ul class="server-list">
        <li class="server-item" v-for="(item,idx) in serverList" :key="idx">
          <img :src="requireImg(item.img,'common')">
          <p class="server-tit" v-text="item.tit"></p>
          <p class="server-tip" v-if="item.tip" v-text="item.tip"></p>
        </li>
      </ul>
      <div class="join-btn" @click.stop="showRegist">
        合作申请
        <img src="@/assets/index/02-5-min.png" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      vadvList: [
        {
          img: "3-7-min.png",
          imgActive: "3-3-min.png",
          tit: "刺激感官的利器",
          desc: "声色俱全的展示商品，缩短了消费者信任的过程，加快了消费者买单的速度！"
        }, {
          img: "3-8-min.png",
          imgActive: "3-4-min.png",
          tit: "病毒营销",
          desc: "当网民看到有趣、搞笑、优质的视频内容，总是乐于传播，视频能像病毒一样在互联网迅速扩散，达到极为显著的效果。"
        }, {
          img: "3-5-min.png",
          imgActive: "3-1-min.png",
          tit: "互动+主动性",
          desc: "短视频内容分发的去中心化可以传播至更多的用户，他们会主动传播有趣、有料、优质的视频内容，短视频的病毒式传播可以达到显著的营销效果。"
        }, {
          img: "3-6-min.png",
          imgActive: "3-2-min.png",
          tit: "效果可预测",
          desc: "视频播放的次数、网民点赞评论数能明显地反映传播效果，让企业看到宣传效果。"
        }
      ],
      padvList: [
        {
          img: "4-1-min.png",
          tit: "投放价格低",
          desc: "大平台整合优势，一手资源，广告投放价格低，让客户花更少的钱，实现品牌的大曝光。"
        }, {
          img: "4-2-min.png",
          tit: "承载量大 覆盖范围广",
          desc: "视频内容承载量丰富，客户可选择合适的视频平台，根据受众匹配度进行资源匹配、策略规划和内容创作，为品牌赋能。"
        }, {
          img: "4-3-min.png",
          tit: "推广数据一目了然",
          desc: "可根据客户需求选择合适的优质网红，推广效果可查看视频播放量、点赞评论量，清晰明了。"
        }, {
          img: "4-4-min.png",
          tit: "一体化服务",
          desc: "客户可选择合适的视频平台，根据受众匹配度进行资源匹配、策略规划和内容创作，为品牌赋能。"
        }
      ],
      serverList: [
        {
          img: "5-1-min.png",
          tit: "选择短视频媒体",
          tip: "大数据精准分类，更快地找到合适的媒体平台；专业广告投放顾问一对一服务，更易找到合适的目标人群。"
        },
        {
          img: "5-2-min.png",
          tit: "创建投放策略",
          tip: "原创、贴片、视频直发、转发，多种创意广告形式，受众更易接受；规范的需求清单，减少沟通误差。"
        },
        {
          img: "5-3-min.png",
          tit: "专属人员投放",
          tip: "专属人员跟进，确认投放细节，安排广告投放上线；一站式服务，确保客户的投放计划顺利进行。"
        },
        {
          img: "5-4-min.png",
          tit: "投放效果跟踪",
          tip: "有具体的投放数据，让客户了解投放活动的详细结果；实时的视频播放量、点赞评论数，能清晰直观地反映投放效果。"
        }
      ]
    }
  },
  methods: {
    showRegist() {
      this.$emit('onRegistClick');
    },
    requireImg(name, path) {
      return require("../assets/" + (path ? path : 'video') + "/" + name);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/css/video.scss";
</style>
