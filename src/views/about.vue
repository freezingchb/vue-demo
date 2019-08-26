<template>
  <div class="about">
    <div class="banner">
      <!-- <p class="tit">新机遇 赢未来 共发展</p>
      <p class="desc">0风险效果保证！承诺7个工作日，数量不达标，全额退款
        快速启动网络营销项目，时间最快，成本最低，见效快
        24小时在线，点击不扣费
      </p> -->
    </div>
    <div class="intro">
      <div class="tit">
        <p class="txt">公司介绍</p>
        <p class="bottom"></p>
      </div>
      <p class="intro-txt">掌投平台是目前国内效果突出的一站式品牌营销供应商，凭借敏锐的市场洞察和多年深耕行业的经验，掌投平台拥有短视频营销、小红书推广、霸屏营销、网红直播、软文营销等近万家优质营销资源。

        掌投平台一直秉承“去中间化赋能新营销”为核心，帮助广告代理商深度挖掘客户价值，实现整合资源的最佳收益，打造属于自己的商业闭环。</p>
      <div class="intro-img"></div>
      <ul class="area-list">
        <li class="area-item" v-for="(item,idx) in areaList" :key="idx">
          <div class="area-img">
            <img :src="requireImg(item.img)" />
          </div>
          <p class="area-tit" v-text="item.tit"></p>
          <p class="area-tip" v-text="item.tip"></p>
        </li>
      </ul>
    </div>
    <div class="culture">
      <div class="header">
        <p>企业文化</p>
      </div>
      <ul class="mission-list">
        <li class="mission">
          <p class="miss-tit">
            <img src="@/assets/about/4-2-min.png">
            <span>愿景</span>
          </p>
          <p class="desc">成为全国最大的品牌营销供应商平台。<br>
赋能代理商形式多样、低成本营销资源，完成营销效果最大化，实现整合资源的最佳收益，打造属于自己的商业闭环。</p>
        </li>
        <li class="mission">
          <p class="miss-tit">
            <img src="@/assets/about/4-1-min.png">
            <span>使命</span>
          </p>
          <p class="desc">坚守“以客户为中心，以奋斗者为本”为使命，服务至上，效率争先，为企业添动力，为员工谋福利，纳百川成就海业，思进取赢得未来。</p>
        </li>
      </ul>
    </div>
    <div class="team">
      <div class="tit">
        <p class="txt">我们的团队</p>
        <p class="bottom"></p>
      </div>
      <ul class="team-list">
        <li class="team-item"><img src="@/assets/about/11-1.png"></li>
        <li class="team-item"><img src="@/assets/about/11-2.png"></li>
        <li class="team-item"><img src="@/assets/about/11-3.png"></li>
      </ul>
    </div>
    <div class="server">
      <div class="tit">
        <p class="txt">我们的服务</p>
        <p class="bottom"></p>
      </div>
      <ul class="server-list">
        <li class="server-item" v-for="(item,idx) in serverList" :key="idx">
          <div class="server-img">
            <img :src="requireImg(item.img)">
          </div>
          <p class="server-tit" v-text="item.tit"></p>
          <p class="server-desc" v-text="item.desc"></p>
        </li>
      </ul>
    </div>
    <div class="join">
      <p class="j-tit">执着的信念让我们奋力前行</p>
      <p class="j-desc">PERSISTENT BELIEFS KEEP US GOING</p>
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
      areaList: [
        {
          img: "2-1-min.png",
          tit: "厦门",
          tip: "厦门市湖里区江浦南里"
        },
        {
          img: "2-2-min.png",
          tit: "泉州",
          tip: "福建省泉州市晋江万达写字楼"
        },
        {
          img: "2-3-min.png",
          tit: "苏州",
          tip: "苏州市工业园区创意产业园"
        }
      ],
      serverList: [
        {
          img: "6-1-min.png",
          tit: "热情",
          desc:
            "出色的客户服务，以热情务实态度为企业、产品打造品牌势能。"
        },
        {
          img: "6-2-min.png",
          tit: "专业",
          desc: `根据客户需求，专业匹配营销资源，为产品定制差异化营销策略。`
        },
        {
          img: "6-3-min.png",
          tit: "高效",
          desc:
            "智能化的系统操作管理，高效、迅速地处理客户反馈并及时回应。"
        }
      ]
    };
  },
  methods: {
    showRegist() {
      this.$emit('onRegistClick');
    },
    requireImg(name) {
      return require("../assets/about/" + name);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/css/about.scss";
</style>