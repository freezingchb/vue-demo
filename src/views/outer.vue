<template>
  <div @click="hideRegist">
    <iheader ref="header" class="header" :nowPath="nowPath" />
    <div style="height:1rem"></div>
    <router-view @onRegistClick="showRegist"></router-view>
    <ifooter />
  </div>
</template>
<script>
import iheader from "@/components/header"
import ifooter from "@/components/footer"
// import "@/utils/xwbridge.js"
// import "@/utils/xwbridge.1.0.0.js"
export default {
  created() {
    let that = this;
    // xwbridge.setTitle('222')
    // xwbridge.getImageByCamera({
    //   maxLength:100,
    //   maxSize:300,
    //   onFinish:function(){}
    // })
  },
  mounted() {
  },
  components: {
    iheader,
    ifooter
  },
  data() {
    return {
      isShowRegist: false,
      nowPath: this.$route.name
    }
  },
  methods: {
    showRegist() {
      this.$store.state.isShowRegist = true;
    },
    hideRegist() {
      this.$store.state.isShowRegist = false;
    }
  },
  watch: {
    $route(val) {
      this.nowPath = val.name || 'index';
    }
  }
}
</script>
<style scoped>
.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 20;
}
</style>
