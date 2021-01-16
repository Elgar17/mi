import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import axios from './http.js'
import VueAxios from 'vue-axios'

// mockjs 开关
const mock = true
if (mock) {
  require('./mock/api')
}

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')