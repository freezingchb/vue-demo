<template>
  <div class="article">
    <div class="banner">
      <!-- <p class="tit">软文营销</p>
      <p class="desc">视频推广，当下市场最为火热的品牌推广！</p> -->
    </div>
    <div class="more">
      <dl>
        <dt>一站式投稿 软文稿快速发布</dt>
        <dd class="em" v-text="'软文稿营销是指利用软文传播为企业、品牌等做\n宣传推广的一种营销方式。\n\n软文推广模式非常有利于引导市场消费，在较短\n时间内快速提升产品的知名度，塑造品牌的美誉\n度和公信力。'"></dd>
      </dl>
    </div>
    <div class="media">
      <div class="tit">
        <p class="txt">6000+媒体渠道资源</p>
        <p class="bottom"></p>
      </div>
      <ul class="mediaList">
        <li class="media-item" :style="{backgroundImage:'url('+requireImg(''+(idx+1)+'.png')+')'}" v-for="(item,idx) in 25"
          :key="idx"></li>
      </ul>
    </div>
    <div class="why">
      <div class="tit">
        <p class="txt">企业为什么要做软文营销</p>
        <p class="bottom"></p>
      </div>
      <ul class="why-list">
        <li class="why-item" v-for="(item,idx) in whyList" :key="idx">
          <div class="img">
            <img :src="requireImg(item.img)">
            <img class="active" :src="requireImg(item.imgActive)">
          </div>
          <p class="tit" v-text="item.tit"></p>
          <p class="desc" v-text="item.desc"></p>
        </li>
      </ul>
    </div>
    <div class="feature">
      <div class="tit">
        <p class="txt">软文营销7大特点</p>
        <p class="bottom"></p>
      </div>
      <img src="@/assets/article/4-min.png">
    </div>
    <div class="bring">
      <div class="tit">
        <p class="txt">掌投能给企业带来什么</p>
        <p class="bottom"></p>
      </div>
      <ul class="bring-list">
        <li class="bring-item" v-for="(item,idx) in bringList" :key="idx">
          <img class="img" :src="requireImg(item.img)">
          <p class="tip" v-text="item.tit"></p>
        </li>
      </ul>
    </div>
    <div class="server">
      <div class="tit">
        <p class="txt">掌投的软文营销优化服务内容</p>
        <p class="bottom"></p>
      </div>
      <ul class="server-list">
        <li class="server-item" v-for="(item,idx) in serverList" :key="idx">
          <p class="tip" v-text="item.tit"></p>
          <ul class="items">
            <li class="item" v-for="(txt,tidx) in item.items" :key="tidx" v-text="txt"></li>
          </ul>
          <p class="desc" v-text="item.desc"></p>
        </li>
      </ul>
      <div class="join-btn" @click.stop="showRegist">
        合作申请
        <img src="@/assets/index/02-5-min.png" />
      </div>
    </div>
    <div class="write">
      <div class="tit">
        <p class="txt">稿件撰写</p>
        <p class="bottom"></p>
      </div>
      <div class="write-box">
        <ul class="tips">
          <li class="tip"><img src="@/assets/article/7-3-min.png"><span>量身定制需求</span></li>
          <li class="tip"><img src="@/assets/article/7-2-min.png"><span>沟通零距离</span></li>
          <li class="tip"><img src="@/assets/article/7-1-min.png"><span>质量有保障</span></li>
        </ul>
        <ul class="contact">
          <li class="con">
            <p class="tit">专栏作者撰写</p>
            <p class="tip">精品稿件，思想具有揣摩性</p>
            <p class="price"><i>¥</i><span>500</span><em>/千字</em></p>
            <p class="now" @click.stop="showRegist">立即咨询<img src="@/assets/index/02-5-min.png" /></p>
          </li>
          <li class="con">
            <p class="tit">资深编辑撰写</p>
            <p class="tip">高质量新闻通稿</p>
            <p class="price"><i>¥</i><span>300</span><em>/千字</em></p>
            <p class="now" @click.stop="showRegist">立即咨询<img src="@/assets/index/02-5-min.png" /></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      whyList: [
        {
          img: "3-1-min.png",
          imgActive: "3-5-min.png",
          tit: "权威性高",
          desc: `新闻媒体因自身性质权威性远高于其他网络平台，企业通过新闻媒体传播信息，可以塑造企业产品及品牌的公信力。`
        }, {
          img: "3-3-min.png",
          imgActive: "3-7-min.png",
          tit: "客观性强",
          desc: `新闻是站在第三方角度进行报道与分析的,因此其的客观性是毋庸置疑的。企业通过新闻媒体做推广，在用户心中的真实性大大增加。`
        }, {
          img: "3-4-min.png",
          imgActive: "3-8-min.png",
          tit: "传播快速",
          desc: `新闻媒体的传播性非常强，它受众多、范围广、影响大，企业通过新闻媒体向大众传播信息能够快速覆盖受众群体。`
        }, {
          img: "3-2-min.png",
          imgActive: "3-6-min.png",
          tit: "连锁效应",
          desc: "新闻营销的最大特点就是连锁反应。一个新闻热点就能引发大众关注，再加上新闻的二次传播性与连续性，是极易形成连锁反应的。"
        }
      ],
      bringList: [
        {
          img: "5-3-min.png",
          tit: "海量媒体资源任选"
        }, {
          img: "5-2-min.png",
          tit: "企业文化理念传播"
        }, {
          img: "5-1-min.png",
          tit: "企业品牌强化提升"
        }, {
          img: "5-4-min.png",
          tit: "企业信息传播更广"
        }, {
          img: "5-5-min.png",
          tit: "热点营销新闻造势"
        }
      ],
      serverList: [
        {
          tit: "企业日常宣传",
          items: ['公司宣传', '高管宣传', '企业文化', '企业动态'],
          desc: "大门户媒体+地方媒体+行业媒体"
        },
        {
          tit: "产品宣传",
          items: ['产品宣传', '新品上市'],
          desc: "行业媒体（主）+门户 媒体（辅）"
        },
        {
          tit: "活动宣传",
          items: ['线下展会', '活动会议', '活动促销', '新闻发布会'],
          desc: "行业媒体（主）+门户 媒体（辅）"
        },
        {
          tit: "危机公关",
          items: ['正面公司宣传信息'],
          desc: "权威门户媒体+大量收录 好的地方媒体"
        },
        {
          tit: "事件营销",
          items: ['系列事件营销内容', '高管宣传', '企业文化', '企业动态'],
          desc: "门户媒体（大量）"
        }
      ]
    }
  },
  methods: {
    showRegist() {
      this.$emit('onRegistClick');
    },
    requireImg(name) {
      return require("../assets/article/" + name);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/css/article.scss";
</style>
