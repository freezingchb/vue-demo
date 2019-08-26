<template>
  <div class="seo">
    <div class="banner">
      <!-- <p class="tit">霸屏营销</p>
      <p class="desc">0风险效果保证！承诺7个工作日，数量不达标，全额退款
        快速启动网络营销项目，时间最快，成本最低，见效快
        24小时在线， 点击不扣费
      </p> -->
    </div>
    <div class="worry">
      <div class="tit">
        <p class="txt">95%的用户搜索你的公司，都会遇到这些困扰</p>
        <p class="bottom"></p>
      </div>
      <ul class="worry-list">
        <li class="worry-item" v-for="(item,idx) in worryList" :key="idx">
          <div class="worry-img">
            <img :src="requireImg(item.img)" />
          </div>
          <p class="worry-tit" v-text="item.tit"></p>
        </li>
      </ul>
      <div class="tit">
        <p class="txt">对企业产生的不利影响</p>
        <p class="bottom"></p>
      </div>
      <ul class="affect-list">
        <li class="affect-item" v-for="(item,idx) in affectList" :key="idx" :style="{backgroundImage:'url('+requireImg(item.bg)+')'}">
          <div class="affect-img">
            <img :src="requireImg(item.img)" />
          </div>
          <p class="affect-tit" v-text="item.tit"></p>
          <p class="affect-desc" v-html="item.desc"></p>
        </li>
      </ul>
    </div>
    <div class="more">
      <dl>
        <dt>霸屏营销</dt>
        <dd class="em" v-text="'霸屏营销主要为企业提供便捷、高效、智能、安\n全、可监测的全搜索引擎关键词首页抢排名位的\n推广服务。\n\n帮助客户霸屏全网搜索引擎，为客户解决网络营\n销困局。'">
        </dd>
      </dl>
    </div>
    <div class="why-do">
      <div class="tit">
        <p class="txt">为什么要做霸屏营销</p>
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
    <div class="contrast">
      <div class="tit">
        <p class="txt">行业对比</p>
        <p class="bottom"></p>
      </div>
      <img src="@/assets/seo/4-min.png" />
    </div>
    <div class="after">
      <div class="tit">
        <p class="txt">成交后服务流程</p>
        <p class="bottom"></p>
      </div>
      <p class="tip">保姆级服务，简单的流程，成交后由“专属总管”对接</p>
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
      worryList: [
        {
          img: "1-2-min.png",
          tit: "找不到公司在哪里"
        },
        {
          img: "1-3-min.png",
          tit: "搜不到公司相关信息"
        },
        {
          img: "1-1-min.png",
          tit: "没有任何公司动态"
        }
      ],
      affectList: [
        {
          img: "2-5-min.png",
          bg: "2-1-min.png",
          tit: "获客难",
          desc: `新客户不信任
          老客户流失`
        },
        {
          img: "2-6-min.png",
          bg: "2-2-min.png",
          tit: "合作难",
          desc: `供应方/采购方/投资方产生怀疑<br>失去合作机会`
        },
        {
          img: "2-4-min.png",
          bg: "2-3-min.png",
          tit: "招聘难",
          desc: `高端人才不关注
          感兴趣的找不到地址`
        }
      ],
      whydoList: [
        {
          img: "3-6-min.png",
          imgActive: "3-1-min.png",
          tit: "排名速度快",
          desc: "3-7天即可把行业关键词大批量覆盖到搜索引擎首页，排名稳定。"
        },
        {
          img: "3-3-min.png",
          imgActive: "3-8-min.png",
          tit: "不限关键词",
          desc: "关键词数量多，能匹配更多精准关键词。"
        },
        {
          img: "3-4-min.png",
          imgActive: "3-9-min.png",
          tit: "搜索引擎全覆盖",
          desc: "覆盖百度PC&移动端、360搜索、搜狗等搜索引擎，覆盖面广。"
        },
        {
          img: "3-5-min.png",
          imgActive: "3-10-min.png",
          tit: "转换率较高",
          desc: "关键词排名打开以官网形式展现，提升用户的体验度。"
        },
        {
          img: "3-2-min.png",
          imgActive: "3-7-min.png",
          tit: "系统报表监控",
          desc: "可以查看每个词的排名位置，流量查看"
        }
      ],
      afterList: [
        {
          img: "5-1-min.png",
          tit: `客户完善资料
          并开户`
        },
        {
          img: "5-2-min.png",
          tit: "根据客户对搜索关键词需求进行大数据挖掘 "
        },
        {
          img: "5-3-min.png",
          tit: "协助客户挑选海量关键词投放"
        },
        {
          img: "5-4-min.png",
          tit: "搜集所投放关键词内容并录入AI人工智能"
        },
        {
          img: "5-5-min.png",
          tit: "云系统全网投放（最快1天有排名）"
        }
      ]
    };
  },
  methods: {
    showRegist() {
      this.$emit('onRegistClick');
    },
    requireImg(name, path) {
      return require("../assets/" + (path ? path : "seo") + "/" + name);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/css/seo.scss";
</style>
