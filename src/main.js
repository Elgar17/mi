import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'


import axios from './http.js'
import VueAxios from 'vue-axios'


Vue.use(VueLazyLoad,{
  loading: '/imgs/loading-svg/loading-bars.svg'
})
// mockjs 开关
const mock = false
if (mock) {
  require('./mock/api')
}

Vue.use(VueAxios, axios)
Vue.use(VueCookie)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')