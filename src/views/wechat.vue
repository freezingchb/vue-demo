<template>
  <div class="wechat">
    <div class="banner">
    </div>
    <ul class="desc-list">
      <li class="desc">微信月活跃用户
        增长7%,突破11亿</li>
      <li class="desc">掌投平台有30万+
        微信大号、自媒体、百亿流量</li>
      <li class="desc">每天创造10.1亿
        用户阅读的商业内容</li>
    </ul>
    <div class="permeability">
      <p class="tit">城市渗透率</p>
      <ul class="city-box">
        <li class="city" v-for="(item,idx) in cityPercentList" :key="idx">
          <span class="city-left" v-text="item.txt+'线城市'"></span>
          <div class="city-center">
            <p class="progress" :style="{width:item.num+'%'}"></p>
          </div>
          <span class="city-right" v-text="item.num+'%'"></span>
        </li>
      </ul>
      <img class="mau" src="@/assets/wechat/02-1-min.png">
      <img class="dau" src="@/assets/wechat/02-2-min.png">
    </div>
    <div class="cover">
      <div class="tit">
        <p class="txt">微信资源全网覆盖</p>
        <p class="bottom"></p>
      </div>
      <img class="cover-img" src="@/assets/wechat/03-min.png">
    </div>
    <div class="resource">
      <div class="tit">
        <p class="txt">精选优质资源</p>
        <p class="bottom"></p>
      </div>
      <ul class="re-list">
        <li class="re-item" v-for="(item,idx) in reList" :key="idx">
          <img class="re-img" :src="requireImg(item.img)">
          <p class="re-tit" v-text="item.tit"></p>
          <p class="re-desc" v-text="item.desc"></p>
          <div class="re-star">
            <p class="fans">粉丝数<span v-text="item.fans"></span></p>
            <p class="up">阅读数<span v-text="item.up"></span></p>
          </div>
        </li>
      </ul>
    </div>
    <div class="advantage">
      <div class="tit">
        <p class="txt">我们的优势</p>
        <p class="bottom"></p>
      </div>
      <ul class="adv-list">
        <li class="adv-item" v-for="(item,idx) in advList" :key="idx">
          <div class="img">
            <img :src="requireImg(item.img)">
            <img class="active" :src="requireImg(item.imgActive)">
          </div>
          <p class="tit" v-text="item.tit"></p>
          <p class="desc" v-text="item.desc"></p>
        </li>
      </ul>
    </div>
    <div class="flow">
      <div class="tit">
        <p class="txt">微信营销，掌投专业流程化操作</p>
        <p class="bottom"></p>
      </div>
      <div class="flow-box">
        <ul class="flow-left">
          <li class="flow-item" v-for="(item,idx) in flowLeft" :key="idx">
            <span v-text="item"></span>
            <i></i>
          </li>
        </ul>
        <div class="flow-center">
          <img src="@/assets/wechat/06-min.png">
        </div>
        <ul class="flow-right">
          <li class="flow-item" v-for="(item,idx) in flowRight" :key="idx">
            <i></i>
            <span v-text="item"></span>
          </li>
        </ul>
      </div>
    </div>
    <div class="together">
      <div class="tit">
        <p class="txt">合作形式</p>
        <p class="bottom"></p>
      </div>
      <ul class="tab">
        <li class="item" :class="{active:nowToIdx==0}" @click="toTabClick(0)">内容投放</li>
        <li class="item" :class="{active:nowToIdx==1}" @click="toTabClick(1)">广点通</li>
      </ul>
      <div class="panel-left" v-show="nowToIdx==0">
        <ul class="pic-list">
          <li class="pic-item">
            <img src="@/assets/wechat/02-nrtf-1.png">
            <p> </p>
          </li>
          <li class="pic-item">
            <img src="@/assets/wechat/02-nrtf-2.png">
            <p> </p>
          </li>
        </ul>
      </div>
      <div class="panel-right" v-show="nowToIdx==1">
        <ul class="pic-list">
          <li class="pic-item">
            <img src="@/assets/wechat/02-gdt-1-min.png">
            <p> </p>
          </li>
          <li class="pic-item">
            <img src="@/assets/wechat/02-gdt-2-min.png">
            <p> </p>
          </li>
        </ul>
      </div>
      <p class="btn" @click.stop="showRegist" :style="{marginTop: 0}">合作申请<img src="@/assets/index/02-5-min.png"></p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nowToIdx: 0,
      cityPercentList: [
        {
          txt: '一',
          num: 93
        }, {
          txt: '二',
          num: 69
        }, {
          txt: '三',
          num: 43
        }, {
          txt: '四',
          num: 27
        }, {
          txt: '五',
          num: 28
        }
      ],
      reList: [
        {
          img: "02-1.png",
          tit: "领致",
          desc: "引领品致新风尚",
          fans: "88.5W",
          up: "2000"
        }, {
          img: "02-2.png",
          tit: "金融行业网",
          desc: "财经资讯深度报道",
          fans: "95W",
          up: "2000"
        }, {
          img: "02-3.png",
          tit: "科技前沿",
          desc: "分享最新互联网资讯",
          fans: "34W",
          up: "100000"
        }, {
          img: "02-4.png",
          tit: "汽车壹周刊",
          desc: "汽车行业新闻动态",
          fans: "68.5W",
          up: "10000"
        }, {
          img: "02-5.png",
          tit: "中国体育报",
          desc: "权威新闻报道",
          fans: "115.7W",
          up: "5000"
        }, {
          img: "02-6.png",
          tit: "中国青年报",
          desc: "服务青年成长",
          fans: "78.9W",
          up: "5000"
        }
      ],
      advList: [
        {
          img: "05-5-min.png",
          imgActive: "05-4-min.png",
          tit: "海量资源",
          desc: "与5000+ 自媒体大号合作，颠覆传统营销，转型移动社交营销。"
        }, {
          img: "05-3-min.png",
          imgActive: "05-8-min.png",
          tit: "专业团队",
          desc: "媒体筛选、软文撰写、渠道发布、数据反馈等环节均有专业人员跟踪服务。"
        }, {
          img: "05-2-min.png",
          imgActive: "05-7-min.png",
          tit: "推广经验",
          desc: "服务了100000+大中小型企业，为他们提供差异化营销策略。"
        }, {
          img: "05-1-min.png",
          imgActive: "05-6-min.png",
          tit: "价格优势",
          desc: "自定义价格模板配置设定，用最低的价格助力企业品牌推广。"
        }
      ],
      flowLeft: ['产品定位', '人群定位', '推广时间', '推广目的'],
      flowRight: ['产品定位', '人群定位', '推广时间', '推广目的']
    }
  },
  methods: {
    showRegist() {
      this.$emit('onRegistClick');
    },
    toTabClick(idx) {
      this.nowToIdx = idx
    },
    requireImg(name) {
      return require("../assets/wechat/" + name);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/css/wechat.scss";
</style>
