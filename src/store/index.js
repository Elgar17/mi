import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action.js'
import mutations from './mutation.js'

Vue.use(Vuex)

let state =  {
  username: '', // 用户名
  cartCount: -1 // 购物车数量
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
  }
})
