<template>
  <div class="help">
    <div class="banner">
      <div class="search">
        <input type="text" placeholder="输入关键词获取相关解答" v-model="keyword">
        <p class="btn" @click="search()"><img :src="requireImg('1@2x-min.png')"></p>
      </div>
    </div>
    <div class="content-box">
      <p class="nav"><span class="nav-txt">帮助中心</span><span class="nav-i">>></span><span class="nav-txt">{{title}}</span></p>
      <div class="menu">
        <ul class="menu-list">
          <li class="menu-item" v-for="(item,idx) in navList" :key="idx" v-if="item.articles.length > 0">
            <p class="tit" @click="checkTit(idx)"><img :src="requireImg('4@2x-min.png')"><span>{{item.name}}</span></p>
            <p class="item" :class="{active:child.id==nowId}" @click="checkItem(child.id)" v-text="child.title" v-for="(child,cidx) in item.articles" :key="cidx"></p>
          </li>
          <li class="menu-item">
            <p class="tit" @click="hideContent()"><img :src="requireImg('3@2x-min.png')"><span>意见反馈</span></p>
          </li>
        </ul>
        
        <div class="detail">
          <p class="txt" v-if="showContent" v-html="content"></p>
          <div class="form" v-if="!showContent">
            <p class="tit-tip">为了更好地为您服务，感谢您的反馈建议。每一条建议都对我们很重要！</p>
            <textarea class="feedback-txt" placeholder="请输入您的投诉和建议" v-model="ideaContent"></textarea>
            <div class="feedback-info">
              <input type="text" placeholder="您的称呼" v-model="name">
              <input type="tel" placeholder="联系方式" v-model="tel">
            </div>
            <p class="tip">非必填，如需反馈请填写您的联系方式</p>
            <p class="submit" @click="addIdea()">提交<img src="@/assets/index/02-5-min.png"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {fetchPost, fetchGet} from '@/http.js'
export default {
  data() {
    return {
      nowId: 0,
      title: '',
      content: '',
      navList: [],
      showContent: true,
      name: '',
      tel: '',
      ideaContent: '',
      keyword: ''
    }
  },
  methods: {
    getCateList: function() {
      fetchPost('/home/home/cate', {}).then((data) => {
        this.navList = data.info
        if (this.nowId === 0) {
          this.nowId = this.navList[0].articles[0].id
        }
        this.getContent();
      }).catch(err => {
        this.$alert(err, '');
      })
    },
    getContent: function() {
      fetchPost('/home/home/article', {id: this.nowId}).then((data) => {
        this.title = data.info.title;
        this.content = data.info.content;
      }).catch(err => {
        this.$alert(err, '');
      })
    },
    addIdea: function() {
      fetchPost('/home/home/addIdea', {
        name: this.name,
        tel: this.tel,
        content: this.ideaContent
      }).then((data) => {
        this.$alert(data.info, '');
        this.name = '';
        this.tel = '';
        this.ideaContent = '';
      }).catch(err => {
        this.$alert(err, '');
      })
    },
    checkTit(idx) {
    },
    checkItem(id) {
      this.nowId = id
      this.showContent = true
      this.getContent()
    },
    hideContent() {
      this.showContent = false
    },
    requireImg(name) {
      return require("../assets/help/" + name);
    },
    search() {
      let searchId = 0
      this.navList.map((item, key) => {
        item.articles.map((subItem) => {
          if (subItem.title.indexOf(this.keyword) >= 0) {
            searchId = subItem.id
          }
        });
      });
      
      if (searchId === 0) {
        this.content = ''
        this.showContent = true
      } else {
        this.nowId = searchId
        this.getContent()
      }
    }
  },
  mounted: function() {
    if (this.$route.query.id) {
      this.nowId = this.$route.query.id
    }
    this.getCateList();
  }
}
</script>

<style lang="scss" scoped>
@import "@/css/help.scss";
</style>
