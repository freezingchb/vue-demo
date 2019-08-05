<template>
  <div class="redbook">
    <div class="banner">
      <!-- <p class="tit">小红书推广</p>
      <p class="desc">适用于所有大、中、小企业用户，
        用于解决疑问决策环节客户的引导销售或品牌曝光</p> -->
    </div>
    <div class="outlook">
      <div class="tit">
        <p class="txt">前景广阔</p>
        <p class="bottom"></p>
      </div>
      <p class="outlook-tit-tip">截至2019年5月，小红书官方数据统计，平台用户接近1.5亿;
        月度活跃用户接近5000万(与2018相比有300%的增长);小红书每日笔记曝光数达到了20亿次</p>
      <ul class="outlook-list">
        <li class="outlook-item" v-for="(item,idx) in outlookList" :key="idx">
          <div class="outlook-img">
            <img :src="requireImg(item.img)" />
          </div>
          <p class="outlook-tit" v-text="item.tit"></p>
          <p class="outlook-tip" v-text="item.tip"></p>
        </li>
      </ul>
    </div>
    <div class="tactics">
      <div class="tit">
        <p class="txt">小红书推广策略</p>
        <p class="bottom"></p>
      </div>
      <div class="tactics-tit-tip">UGC式的购物分享方式提升用户的信任度，借助明星效应和达人跟随，
        让产品在短时间内集中爆发，形成“创意制作、明星推荐、KOL种草、引导购买”的营销闭环。
      </div>
      <img src="@/assets/redbook/2-min.png" alt="">
    </div>
    <div class="intro">
      <div class="tit">
        <p class="txt">小红书推广优势</p>
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
    <div class="example">
      <div class="tit">
        <p class="txt">小红书推广案例</p>
        <p class="bottom"></p>
      </div>
      <div class="example-list">
        <div class="ex-img">
          <img src="@/assets/redbook/03-1-min.png">
        </div>
        <ul class="ex-items">
          <li class="ex">
            <p class="ex-tit"><img src="@/assets/redbook/5-2-min.png"><span>leaneed声波电动洁面仪</span></p>
            <img class="ex-content-img-t" src="@/assets/redbook/4-1-min.png">
          </li>
          <li class="ex">
            <p class="ex-tit"><img src="@/assets/redbook/5-4-min.png"><span>案例展示</span></p>
            <p class="ex-txt">cleaneed声波电动洁面仪，是一款由本土工业设计师设计并研发的潮流国货。在外观上借鉴了号称少女酥胸的马卡龙的颜色与外形，共有五款绚丽颜色可以挑选，符合现代时尚理念，包含先锋科技技术，融合了高端构思设计的产品，这样可爱的设计跟年轻的少男少女搭配起来简直是相得益彰。
            </p>
          </li>
          <li class="ex">
            <p class="ex-tit"><img src="@/assets/redbook/5-1-min.png"><span>小红书推广策略</span></p>
            <p class="ex-txt">专题策划+内容种草+热门tag
              投放30位小红书达人，成功覆盖50万+粉丝
              短期内集中曝光大众对于产品的认知
              扩大品牌知名度，强势种草转化销售</p>
          </li>
          <li class="ex">
            <p class="ex-tit"><img src="@/assets/redbook/5-3-min.png"><span>小红书推广效果</span></p>
            <img class="ex-content-img-result" src="@/assets/redbook/4-2-min.png">
          </li>
        </ul>
      </div>
      <div class="join-btn" @click.stop="showRegist" :style="{marginTop: 0}">
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
      outlookList: [
        {
          img: "1-2-min.png",
          tit: "1.5亿+",
          tip: "注册用户"
        },
        {
          img: "1-1-min.png",
          tit: "5000万+",
          tip: "月活用户"
        },
        {
          img: "1-3-min.png",
          tit: "20亿次",
          tip: "每日笔记曝光数"
        }
      ],
      introList: [
        {
          img: "3-4-min.png",
          imgActive: "3-5-min.png",
          tit: "高质量的带货达人",
          desc: "明星效应&达人限随\n带货能力强\n高信任度的口碑\n高颜值，高匹配度"
        }, {
          img: "3-1-min.png",
          imgActive: "3-6-min.png",
          tit: "瞬间刷爆的优质内容",
          desc: "原创笔记，经验干货\n吸睛有人的封面\n精准关键词覆盖\n命中种草单品的独特卖点"
        }, {
          img: "3-2-min.png",
          imgActive: "3-7-min.png",
          tit: "技术钻研推广策略",
          desc: "技术钻研，精通机制\n内容把控，关键字设置\n账号筛选，高质量权重"
        }, {
          img: "3-3-min.png",
          imgActive: "3-8-min.png",
          tit: "精准用户千万曝光量",
          desc: "多账号通发，瞬间爆款\n精准关键词，贴近搜索\n全面标签，千万曝光量"
        }
      ],
    }
  },
  methods: {
    showRegist() {
      this.$emit('onRegistClick');
    },
    requireImg(name) {
      return require("../assets/redbook/" + name);
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/css/redbook.scss";
</style>