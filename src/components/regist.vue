<template>
  <transition name="inout">
    <div class="regist" @click.stop>
      <div class="close" @click="close"><img src="@/assets/outer/close.png"></div>
      <p class="reg-tit">免费注册<span>告诉我们您感兴趣的领域，我们将会第一时间联系您</span></p>
      <div class="input-box">
        <input type="text" placeholder="姓名" v-model="name">
        <input type="text" placeholder="公司" v-model="company">
        <input type="text" placeholder="电话" v-model="tel">
        <input type="text" placeholder="职务" v-model="job">
      </div>
      <p class="interest-tit">您感兴趣的领域</p>
      <ul class="interest-list">
        <li class="interest" :class="{active:selectItems[idx]}" @click="checkInterest(idx)"
          v-for="(item,idx) in interestList" :key="idx" v-text="item"></li>
      </ul>
      <p class="submit" @click="addContact()">提交<img src="@/assets/index/02-5-min.png"></p>
    </div>
  </transition>
</template>
<script>
import { fetchPost, fetchGet } from "@/http.js";
export default {
  data() {
    return {
      name: "",
      company: "",
      tel: "",
      job: "",
      area: [],
      selectItems: {},
      interestList: [
        "新闻媒体",
        "自媒体",
        "微博大号",
        "信息流广告",
        "视频营销",
        "开屏广告",
        "口碑营销",
        "其它"
      ]
    };
  },
  methods: {
    addContact: function() {
      for (var item in this.selectItems) {
        this.area.push(this.interestList[item]);
      }
      fetchPost("/home/home/addContact", {
        name: this.name,
        company: this.company,
        tel: this.tel,
        job: this.job,
        area: this.area.join(",")
      })
        .then(data => {
          this.$alert('已提交成功，我们专属顾问将会第一时间联系您', "");
          this.$store.commit('hideRegist');
        })
        .catch(err => {
          this.$alert(err, "");
        });
    },
    checkInterest(idx) {
      this.selectItems[idx]
        ? this.$set(this.selectItems, idx, false)
        : this.$set(this.selectItems, idx, true);
    },
    close() {
      this.$store.commit('hideRegist');
    }
  },
  mounted: function() {}
};
</script>

<style lang="scss" scoped>
.inout-enter-active,
.inout-leave-active {
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}
.inout-enter,
.inout-leave-to {
  -webkit-transform: scale(0.7);
  transform: scale(0.7);
  opacity: 0;
}
.regist {
  -webkit-transform-origin: right top;
  transform-origin: right top;
  width: 5.54rem;
  padding-bottom: 0.44rem;
  background: #fff;
  box-shadow: 0 0.26rem 0.46rem 0 rgba(0, 0, 0, 0.17);
  text-align: left;
  position: relative;
  .close {
    padding: 0.08rem;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    img {
      width: 0.28rem;
      height: auto;
    }
  }
  .reg-tit {
    font-size: 0.24rem;
    line-height: 0.24rem;
    font-weight: bold;
    color: #262b40;
    padding-left: 0.38rem;
    padding-top: 0.3rem;
    span {
      margin-left: 0.1rem;
      font-size: 0.16rem;
      color: #7e828f;
    }
  }
  .input-box {
    padding: 0.14rem 0 0 0.39rem;
    input {
      width: 2.31rem;
      height: 0.6rem;
      margin-top: 0.3rem;
      margin-right: 0.23rem;
      padding: 0 0.2rem;
      font-size: 0.18rem;
      color: #262b40;
      line-height: auto;
      box-sizing: border-box;
      border: 1px solid #7e828f;
      border-radius: 0.04rem;
    }
  }
  .interest-tit {
    padding: 0.36rem 0 0 0.39rem;
    font-weight: bold;
    font-size: 0.18rem;
    line-height: 0.18rem;
    color: #262b40;
  }
  .interest-list {
    padding: 0.08rem 0 0 0.4rem;
    .interest {
      display: inline-block;
      margin: 0.19rem 0.17rem 0 0;
      width: 1.06rem;
      height: 0.34rem;
      font-size: 0.18rem;
      color: #7e828f;
      box-sizing: border-box;
      border: 1px solid #7e828f;
      text-align: center;
      line-height: 0.32rem;
      border-radius: 0.04rem;
      cursor: pointer;
    }
    .interest.active {
      background: #7e828f;
      color: #fff;
    }
  }
  .submit {
    margin-top: 0.29rem;
    margin-left: 1.33rem;
    width: 2.66rem;
    height: 0.6rem;
    line-height: 0.58rem;
    text-align: center;
    font-size: 0.24rem;
    color: #fff;
    font-weight: bold;
    background: #ffa218;
    border-radius: 0.04rem;
    box-shadow: 0 0.13rem 0.2rem 0 rgba(255, 162, 24, 0.23);
    cursor: pointer;
    img {
      width: 0.15rem;
      margin-left: 0.22rem;
      height: auto;
    }
  }
}
</style>

