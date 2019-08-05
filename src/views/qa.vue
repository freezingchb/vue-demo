<template>
  <div class="qa">
    <div class="banner">
      <!-- <p class="tit">专注于问答营销</p>
      <p class="desc">适用于所有大、中、小企业用户，
        用于解决疑问决策环节客户的引导销售或品牌曝光</p> -->
    </div>
    <div class="mode">
      <div class="tit">
        <p class="txt">用户决策模式变革</p>
        <p class="bottom"></p>
      </div>
      <p class="tip">AIDMA到AISAS</p>
      <img src="@/assets/qa/01-min.png">
    </div>
    <div class="more">
      <dl>
        <dt>问答营销</dt>
        <dd class="desc">问答营销属于互动营销类新型营销方式，是互动营销介于
          第三方口碑而创建的网络营销方式之一。</dd>
        <dd class="em">营销方式既能与潜在消费者产生互动，又能植入
          商家广告，是做品牌口碑、互动营销不错的营销
          方式之一。</dd>
      </dl>
    </div>
    <div class="why">
      <div class="tit">
        <p class="txt">为什么要做问答营销</p>
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
    <div class="difficult">
      <div class="tit">
        <p class="txt">问答营销困境</p>
        <p class="bottom"></p>
      </div>
      <ul class="diff-list">
        <li class="diff-item" v-for="(item,idx) in diffList" :key="idx">
          <div class="diff-img">
            <img :src="requireImg(item.img)">
          </div>
          <p class="diff-tit" v-text="item.tit"></p>
          <p class="diff-desc" v-text="item.desc"></p>
        </li>
      </ul>
    </div>
    <div class="sln">
      <div class="tit">
        <p class="txt">问答营销解决方案</p>
        <p class="bottom"></p>
      </div>
      <ul class="sln-list">
        <li class="sln-item" v-for="(item,idx) in slnList" :key="idx" :style="{backgroundImage:'url('+requireImg(item.bg)+')'}">
          <div class="sln-img">
            <img :src="requireImg(item.img)">
          </div>
          <p class="sln-tit" v-text="item.tit"></p>
          <p class="sln-desc" v-text="item.desc"></p>
        </li>
      </ul>
    </div>
    <div class="question">
      <div class="tit">
        <p class="txt">常见问题</p>
        <p class="bottom"></p>
      </div>
      <ul class="ques-list">
        <li v-for="(item,idx) in quesList" :key="idx" :style="{backgroundImage:'url('+requireImg(item.bg)+')'}">
          <p class="q" v-text="item.tit"></p>
          <p class="a" v-text="item.desc"></p>
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
      whyList: [
        {
          img: "03-1-min.png",
          imgActive: "03-5-min.png",
          tit: "秒收录秒排名",
          desc: `问答相对其他平台效果更好，在收录和排名上面，问答（百度知道、360问答、搜狗知乎等）有一定的优势。
          因为这些是相对应搜索引擎自身产品，所以只要问答发布出来，基本是秒收录秒排名。`
        }, {
          img: "03-6-min.png",
          imgActive: "03-2-min.png",
          tit: "实现品牌精准营销",
          desc: `可实现品牌精准营销，在问答平台提问题的用户，他们的每个问题都会阐述出自己想要了解的事情。
我们就可以利用这个回答把用户精准的引导到我们的网站或产品。`
        }, {
          img: "03-4-min.png",
          imgActive: "03-8-min.png",
          tit: "提高客户信任度",
          desc: `提问者和回答者之间都存在互动，而回答者一般是以过来人的身份去回答提问者的问题。
答案更具有可信度，同时回答者代表的是企业品牌，进而增加品牌的可信度。`
        }, {
          img: "03-3-min.png",
          imgActive: "03-7-min.png",
          tit: "建立品牌良好口碑",
          desc: "可快速建立良好的口碑，用户自己根据需求有针对性地提出问题，增加品牌曝光度，建立良好口碑。"
        }
      ],
      diffList: [
        {
          img: "04-1-min.png",
          tit: "删除率高",
          desc: "问答（百度知道、360问答、搜狗知乎等）作为相对应搜索引擎自身产品，所能带来的效果不言而喻，但也因为审核过严，90%的问答容易被删除！"
        }, {
          img: "04-2-min.png",
          tit: "存活率低",
          desc: "由于平台的审核机制限制，凡是涉及到广告的问答内容都会被删除，因此问答内容的存活率通常来说都很低！"
        }, {
          img: "04-3-min.png",
          tit: "批量问答营销难成型",
          desc: "不熟悉问答规则，个人做问答不仅数量上受限也容易形成高重复率的无效性工作状态，批量营销的目的难以达到！"
        }
      ],
      slnList: [
        {
          img: "05-2-min.png",
          bg: "05-5-min.png",
          tit: "删除包补",
          desc: "若问答内容在72小时之内被删除，我们会二次对内容进行编辑上传，补齐客户被删数据，降低删除率。"
        }, {
          img: "05-3-min.png",
          bg: "05-4-min.png",
          tit: "保证存活率",
          desc: "对内容进行二次确认优化，确保问答真实性和有效性。"
        }, {
          img: "05-1-min.png",
          bg: "05-6-min.png",
          tit: "真人真实操作",
          desc: "掌投采用真人真实账户，真实模拟批量发布。"
        }
      ],
      quesList: [
        {
          bg: "06-1-min.png",
          tit: "Q：问答内容需要我们提供吗？",
          desc: "A：是的，问答内容由贵方自行提供，如果需要我方代为编辑，需要按照模板提供键词给我方，另每组问答另外加收编辑费。"
        }, {
          bg: "06-2-min.png",
          tit: "Q：问答代发包多久存活？",
          desc: "A：问答我们承诺包72小时存活，72小时内被删除我方会安排免费补发。"
        }, {
          bg: "06-3-min.png",
          tit: "Q：问答为什么不包长久存活呢？",
          desc: "A：毕竟问答推广是第三方的平台，不可控因素太多，以后的事情目前没有办法预估，几周几个 月几年后的事情都是未知数。我们是实事求是的团队，没有把握我们绝对不会乱承诺， 也不 会忽悠客户。按目前问答平台的规律系统要删都是前面一两天几率更大些，所以我们才承诺 72小时包存活就是为了给广大消费者的保障。"
        }, {
          bg: "06-4-min.png",
          tit: "Q：问答为什么只包72小时存活？是不是72小时后就会被删？",
          desc: "A：不是的，举个例子：您在商店买个手机，商家承诺15天包退，不代表手机15天后就会坏， 这个包72小时只是商家为了给消费者的一个保障的双方约定时间。"
        }
      ]
    }
  },
  methods: {
    showRegist() {
      this.$emit('onRegistClick');
    },
    requireImg(name) {
      return require("../assets/qa/" + name);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/css/qa.scss";
</style>
