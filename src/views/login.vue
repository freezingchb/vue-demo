<template>
  <div class="login">
    <div class="login-box">
      <div class="lg-left">
        <img class="logo" src="@/assets/login/6.png">
        <img class="qr" src="@/assets/login/5.png">
        <ul class="jump-list">
          <li class="jump-li" @click="jump('index')">返回首页</li>
          <li class="jump-li" @click="jump('about')">关于我们</li>
          <li class="jump-li" @click="jump('agent')">代理加盟</li>
        </ul>
      </div>
      <div class="lg-right">
        <input class="username" type="text" placeholder="请输入用户名">
        <input class="password" type="text" placeholder="请输入密码">
        <div class="rule-box">
          <img v-show="!isAgree" src="@/assets/login/3.png" @click="isAgree=true">
          <img v-show="isAgree" src="@/assets/login/4.png" @click="isAgree=false">
          <span>我已阅读并同意</span>
          <i>《掌投服务条款》</i>
        </div>
        <p class="enter">登录<img src="@/assets/index/02-5-min.png" /></p>
        <p class="regist">没有账号？去<span>注册</span></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isAgree: false
    };
  },
  methods: {
    jump(path) {
      this.$router.replace(`/${path}`);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/css/login.scss";
</style>