<template>
  <div class="redlive">
    <div class="banner">
      <!-- <p class="tit">网红直播</p>
      <p class="desc">0风险效果保证！承诺7个工作日，数量不达标，全额退款
        快速启动网络营销项目，时间最快，成本最低，见效快
        24小时在线， 点击不扣费</p> -->
    </div>
    <div class="more">
      <dl>
        <dt>网红直播</dt>
        <dd class="em" v-text="'网红直播即固有平台使用自备手机进行直播互动，通过网红的自媒体资源，以分享、发福利等方式进行的有创意的广告传播。'"></dd>
      </dl>
    </div>
    <div class="data">
      <p class="data-tit">网红人数及粉丝规模均大幅增长</p>
      <p class="data-tip">国内网红经济基础继续扩大</p>
      <p class="data-desc" v-text="'·2018年，粉丝规模在10万人以上的网络红人数量持续增长，较去年增长51%，其中粉丝规模超过100万人的头部网络增长达到23%，而网红数量增长的一大原因是粉丝数量的增长，截止2018年4月，中国网红粉丝总人数保持了之前不断增长的势头，达到5.88亿人，同比增长25%。\n\n在网红人数与粉丝规模持续双增长的加持下，网络经济市场规模以及变现能力也随之增强；网红人数和粉丝规模的双增长亦为其产业链的发展及完善提供了强大的动力。'">
      </p>
      <ul class="city-box">
        <li class="city" v-for="(item,idx) in cityPercentList" :key="idx">
          <span class="city-left" v-text="item.txt+'城市'"></span>
          <div class="city-center">
            <p class="progress" :style="{width:item.num+'%'}"></p>
          </div>
          <span class="city-right" v-text="item.num+'%'"></span>
        </li>
      </ul>
      <img class="mau" src="@/assets/redlive/2-min.png">
    </div>
    <div class="why-do">
      <div class="tit">
        <p class="txt">网红直播的优势</p>
        <p class="bottom"></p>
      </div>
      <ul class="whydo-list">
        <li class="whydo-item" v-for="(item,idx) in whydoList" :key="idx">
          <div class="img">
            <img :src="requireImg(item.img)" />
            <img class="active" :src="requireImg(item.imgActive)" />
          </div>
          <p class="tit" v-text="item.tit"></p>
          <p class="desc" v-text="item.desc"></p>
        </li>
      </ul>
    </div>
    <div class="red-box">
      <div class="tit">
        <p class="txt">合作网红</p>
        <p class="bottom"></p>
      </div>
      <ul class='red-list'>
        <li class="red" v-for="(item,idx) in redList" :key="idx">
          <img :src="requireImg(item.img)">
          <p class="red-tit" v-text="item.tit"></p>
          <p class="red-desc" v-text="item.desc"></p>
        </li>
      </ul>
    </div>
    <div class="after">
      <div class="tit">
        <p class="txt">服务流程</p>
        <p class="bottom"></p>
      </div>
      <ul class="after-list">
        <li class="after-item" v-for="(item,idx) in afterList" :key="idx">
          <img :src="requireImg(item.img,'common')">
          <p class="after-tit" v-text="item.tit"></p>
          <p class="after-tip" v-if="item.tip" v-text="item.tip"></p>
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
      cityPercentList: [
        {
          txt: "一线",
          num: 35.3
        },
        {
          txt: "二线",
          num: 27.6
        },
        {
          txt: "三线",
          num: 17.3
        },
        {
          txt: "四线及以\n下",
          num: 14.3
        },
        {
          txt: "港澳台及\n海外",
          num: 5.4
        }
      ],
      whydoList: [
        {
          img: "3-6-min.png",
          imgActive: "3-1-min.png",
          tit: "海量触达",
          desc:
            "覆盖2千万直播类“高学历、高收入、高消费”的活跃用户，受众广泛，瞬间触达。"
        },
        {
          img: "3-8-min.png",
          imgActive: "3-3-min.png",
          tit: "社交分享",
          desc:
            "整合直播网红的朋友圈、微博、QQ空间等最优质的社交资源，主播网红+社媒双核模式，强社交关系的分享式传播，用户信任度高。"
        },
        {
          img: "3-9-min.png",
          imgActive: "3-4-min.png",
          tit: "多样灵活",
          desc: "覆盖百度PC&移动端、360搜索、搜狗等搜索引擎，覆盖面广。"
        },
        {
          img: "3-7-min.png",
          imgActive: "3-2-min.png",
          tit: "红人效应",
          desc:
            "海量红人同时替你发声、众多微型意见领袖为品牌背书，网红发声引导+图文落地页+粉丝互动打通品牌、网红与粉丝之间的连接，传递信息更丰富"
        },
        {
          img: "3-10-min.png",
          imgActive: "3-5-min.png",
          tit: "品效合一",
          desc:
            "打破KOL传统付费模式，基于强社交关系的分享式熟人传播，用户信任度高，真正品效合一"
        }
      ],
      redList: [
        {
          img: "06-1.jpg",
          tit: "认真少女_颜九",
          desc:
            "2019年天猫金妆奖达人，2018年十大美妆红人。主流平台美妆领域的千万级超级IP，榜单头部账号，全网粉丝超2000万。逢推必火的“口红一姐”，单日创造10W支口红销量，多次创造单品两个小时断货。分析当下热门产品，为粉丝提供优质的消费意见。"
        },
        {
          img: "06-2.jpg",
          tit: "道上都叫我赤木刚宪",
          desc:
            "身高186的美妆界泥石流，欧美妆大佬。性格突出，以率真的性格赢得无数铁粉。 2个月吸粉300万，半年吸粉过千万，一年吸粉近2000万，一步跨越式成为美妆头部网红，曾多次参加过湖南卫视大型时尚节目《我是大美人》的录制、爱奇艺 《奇葩说》第五季辩手。"
        },
        {
          img: "06-3.jpg",
          tit: "一禅小和尚",
          desc:
            "大禹原创动漫《一禅小和尚》以暖萌走心的故事直抵人心，逐渐成为国民动漫IP。其通过一禅和师父的日常生活对话引出人生道理，通过小和尚的童言童语去引发观众思考。截止2019年3月，《一禅小和尚》全网粉丝突破7000万，动画视频累计播放超160亿次，一禅已成为社交媒体第一虚拟偶像，深受广大粉丝喜爱。"
        },
        {
          img: "06-4.jpg",
          tit: "软软其实不太硬",
          desc:
            "原创搞笑短视频博主，人气网红IP。全网粉丝超1000万，通过精分搞笑吐槽的节目形式展现社会现象、讨论热点话题。后转型开箱测评博主，“好奇心爆棚，骚操作满点”，致力于发掘国内外生活好物，每次开箱都有新体验。"
        }
      ],
      afterList: [
        {
          img: "5-1-min.png",
          tit: `查找合适的网
          红，添加其到
          推广意向`
        },
        {
          img: "5-2-min.png",
          tit: `导出意向单联
          系平台沟通需
          求`
        },
        {
          img: "5-3-min.png",
          tit: `平台充值确
          定意向`
        },
        {
          img: "5-4-min.png",
          tit: `平台联系网红
          主播确定需求`
        },
        {
          img: "5-5-min.png",
          tit: `平台扣款锁定
          执行`
        },
        {
          img: "5-6-min.png",
          tit: `平台跟踪执行
          反馈效果`
        }
      ]
    };
  },
  methods: {
    showRegist() {
      this.$emit('onRegistClick');
    },
    requireImg(name, path) {
      return require("../assets/" + (path ? path : "redlive") + "/" + name);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/css/redlive.scss";
</style>