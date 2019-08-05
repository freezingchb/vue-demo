import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isShowRegist: false
  },
  mutations: {
    showRegist(state) {
      state.isShowRegist = true
    },
    hideRegist(state) {
      state.isShowRegist = false
    }
  }
})

export default store
