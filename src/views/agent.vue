<template>
  <div class="agent">
    <div class="banner">
      <!-- <p class="tit">新机遇 赢未来 共发展</p> -->
    </div>
    <div class="sub-tit"></div>
    <div class="six">
      <div class="tit">
        <p class="txt">六大加盟优势</p>
        <p class="bottom"></p>
      </div>
      <p class="six-tit-tip">用我们的专业 成就你的事业</p>
      <ul class="six-list">
        <li class="six-item" v-for="(item,idx) in sixList" :key="idx">
          <div class="six-img">
            <img :src="requireImg(item.img)" />
          </div>
          <p class="six-tit" v-text="item.tit"></p>
          <p class="six-tip" v-text="item.tip"></p>
        </li>
      </ul>
    </div>
    <div class="all">
      <div class="tit">
        <p class="txt">全方位赋能体系，提升伙伴盈利能力</p>
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
    <div class="intro">
      <div class="tit">
        <p class="txt">代理系统介绍</p>
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
    <div class="teamwork">
      <div class="tit">
        <p class="txt">合作流程</p>
        <p class="bottom"></p>
      </div>
      <p class="teamwork-tit-tip">合作不同，发展轨迹不同</p>
      <ul class="teamwork-list">
        <li class="teamwork-item" v-for="(item,idx) in teamworkList" :key="idx">
          <img :src="requireImg(item.img,'common')">
          <p class="teamwork-tit" v-text="item.tit"></p>
          <p class="teamwork-tip" v-if="item.tip" v-text="item.tip"></p>
        </li>
      </ul>
    </div>
    <div class="compare">
      <dl class="compare-box">
        <dt>VIP代理</dt>
        <dd class="tip">拥有普通代理权益  独立网站及后台  OEM系统等</dd>
        <dd class="btn" @click.stop="showRegist">
          <p>合作申请</p>
        </dd>
      </dl>
      <dl class="compare-box">
        <dt>普通代理</dt>
        <dd class="tip">资源代理价 代理后台 专属客服等</dd>
        <dd class="btn" @click.stop="showRegist">
          <p>合作申请</p>
        </dd>
      </dl>
    </div>
    <div class="welcome">
      <div class="tit">
        <p class="txt">欢迎这样的你</p>
        <p class="bottom"></p>
      </div>
      <p class="welcome-tit-tip">一朝携手 未来更优</p>
      <ul class="welcome-list">
        <li class="welcome-item" :style="{backgroundImage:'url('+requireImg(item.img)+')'}" v-for="(item,idx) in welcomeList"
          :key="idx">
          <div class="bg" :style="{backgroundImage:'url('+requireImg(item.imgActive)+')'}"></div>
          <p class="welcome-tit" v-text="item.tit"></p>
          <img src="@/assets/agent/6-0-min.png">
        </li>
      </ul>
    </div>
    <div class="join">
      <p class="line-first">立即咨询</p>
      <p class="line-second">请留下您的联系方式
        我们专属顾问将会第一时间与您联系</p>
      <div class="regist-box">
        <input type="text" class="nick" placeholder="您的称呼" v-model="name" />
        <input type="text" class="phone" placeholder="联系方式" v-model="tel" />
        <p class="regist-btn" @click="registart()">免费注册</p>
      </div>
    </div>
  </div>
</template>
<script>
import {fetchPost, fetchGet} from '@/http.js'
export default {
  data() {
    return {
      name: '',
      tel: '',
      sixList: [
        {
          img: "2-1-min.png",
          tit: "0元代理费",
          tip: "0元代理，一手资源，\n所有资源都是上游底价"
        },
        {
          img: "2-2-min.png",
          tit: "利润丰厚",
          tip: "自由定价无上限；平台活动优惠，\n合作伙伴利益最大化"
        },
        {
          img: "2-3-min.png",
          tit: "持续收益",
          tip: "一次客户开发，后期稳定持续收益，\n无本创收"
        },
        {
          img: "2-6-min.png",
          tit: "前景广阔",
          tip: "千亿级营销广告市场，5000万\n中小企业的刚性推广渠道需求"
        },
        {
          img: "2-5-min.png",
          tit: "技术攻坚",
          tip: "自主开发资源投放系统，高效稳定，\n且免费持续迭代升级"
        },
        {
          img: "2-4-min.png",
          tit: "智能后台",
          tip: "系统操作管理平台化，界面\n清晰，管理简单、提升效率"
        }
      ],
      allList: [
        {
          img: "3-1-min.png",
          imgActive: "3-7-min.png",
          tit: "产品支持",
          desc: "产品迭代快速\n且享受同步升级"
        },
        {
          img: "3-6-min.png",
          imgActive: "3-4-min.png",
          tit: "培训支持",
          desc: "产品操作使用\n优势亮点培训"
        },
        {
          img: "3-3-min.png",
          imgActive: "3-9-min.png",
          tit: "资源支持",
          desc: "行业解决方案\n运营实施经验共享"
        },
        {
          img: "3-2-min.png",
          imgActive: "3-8-min.png",
          tit: "技术保障",
          desc: "实施落地\n运维服务支持"
        },
        {
          img: "3-5-min.png",
          imgActive: "3-10-min.png",
          tit: "售后保障",
          desc: "解决重大紧急问题和\n客户运营支持"
        }
      ],
      introList: [
        {
          img: "4-4-min.png",
          imgActive: "4-2-min.png",
          tit: "独立OEM系统",
          desc: "代理商后台可灵活搭建自主品牌，设定专属自己的公司名称\nLOGO，联系方式等信息"
        }, {
          img: "4-5-min.png",
          imgActive: "4-6-min.png",
          tit: "独立后台",
          desc: "独立域名解析，自定义平台\n功能及各项信息参数，多项选择更灵活"
        }, {
          img: "4-1-min.png",
          imgActive: "4-7-min.png",
          tit: "独立报价系统",
          desc: "后台独立设定单独报价系统，可根据运营需要灵活调整设置"
        }, {
          img: "4-3-min.png",
          imgActive: "4-8-min.png",
          tit: "独立API接口",
          desc: "所有数据均通过独立API接口同步至主服务器，数据无缝对接"
        }
      ],
      teamworkList: [
        {
          img: "5-1-min.png",
          tit: "咨询考察",
          tip: "了解产品 考察沟通\n资质审核"
        },
        {
          img: "5-2-min.png",
          tit: "商务流程",
          tip: "选定合作模式\n签约充值开户"
        },
        {
          img: "5-3-min.png",
          tit: "实施运营",
          tip: "技术对接 产品培训\n正式运营"
        }
      ],
      welcomeList: [
        {
          img: "6-5-1-min.png",
          imgActive: "6-5-2-min.png",
          tit: "网络公司",
        },
        {
          img: "6-1-1-min.png",
          imgActive: "6-1-2-min.png",
          tit: "广告公司",
        },
        {
          img: "6-2-1-min.png",
          imgActive: "6-2-2-min.png",
          tit: "媒介公司",
        },
        {
          img: "6-6-1-min.png",
          imgActive: "6-6-2-min.png",
          tit: "营销公司",
        },
        {
          img: "6-4-1-min.png",
          imgActive: "6-4-2-min.png",
          tit: "公关公司",
        },
        {
          img: "6-3-1-min.png",
          imgActive: "6-3-2-min.png",
          tit: "传媒公司",
        }
      ]

    }
  },
  methods: {
    registart: function() {
      fetchPost('/home/home/addContact', {
        name: this.name,
        tel: this.tel
      }).then((data) => {
        this.$alert('已提交成功，我们专属顾问将会第一时间联系您', '');
        this.name = '';
        this.tel = '';
      }).catch(err => {
        this.$alert(err, '');
      })
    },
    showRegist() {
      this.$emit('onRegistClick');
    },
    requireImg(name, path) {
      return require("../assets/" + (path ? path : 'agent') + "/" + name);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/css/agent.scss";
</style>
