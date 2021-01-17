import axios from 'axios'
// import env from './env'

// axios.defaults.baseURL = env.baseURL
// 超时时间
axios.defaults.timeout = 8000
// 接口错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data
  if (res.status == 0) { // 成功 
    return res.data
  } else if (res.status == 10) { // 未登录
    window.location.href = '/#/login'
  } else {
    console.log(res.msg);
  }
})

export default axios