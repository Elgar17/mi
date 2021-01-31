<template>
  <div class="login">
    <div class="container">
      <img src="/imgs/login-Logo.png" alt="" />
    </div>
    <div class="login-wrapper">
      <div class="container">
        <div class="form-box">
          <div class="form-header">
            <span>账号登录</span>
            <span>|</span>
            <span>扫码登录</span>
          </div>
          <div class="base-input input-user">
            <input type="text" v-model="username" placeholder="请输入账号" />
          </div>
          <div class="base-input input-passworde">
            <input
              type="password"
              v-model="password"
              placeholder="请输入密码"
            />
          </div>
          <a @click="login" class="btn btn-h login-button">登录</a>
          <span class="login-footer">手机短信登录/注册</span>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="login-footer">
        Copyright ©2020 mi.futurefe.com All Rights Reserved.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      userId: ''
    }
  },
  methods: {
    login() {
      let { username, password } = this;
      this.axios.post('/api/user/login', {
        username,
        password
      }).then(res =>{
        if(!res){
            alert('密码错误')
            return
        }
        this.$cookie.set('userId', res.id, {expires: '1M'});
        this.$store.dispatch('saveUser', res.username);
        this.$router.push('/index');
        
      })
    }
  }
}
</script>

<style lang="scss">
.login-wrapper {
  height: 590px;
  background: url(/imgs/login-bg.jpg) no-repeat 50%;
  .form-box {
    position: absolute;
    right: 0;
    width: 410px;
    height: 510px;
    margin-top: 20px;
    background-color: #fff;
    .form-header {
      height: 70px;
      line-height: 70px;
      text-align: center;
      span {
        font-size: 18px;
        font-weight: bold;
        margin: 5px;
        &:nth-child(1) {
          color: #f60;
        }
      }
    }
    .base-input {
      height: 40px;
      margin: 15px 30px;
      line-height: 43px;
      padding-left: 15px;
      font-size: 16px;
      border: 1px solid #ccc;
      input {
        line-height: 16px;
        font-size: 16px;
        outline: none;
        border: none;
      }
    }
    .login-button {
      height: 40px;
      width: 350px;
      line-height: 40px;
      display: block;
      margin: 15px auto;
      cursor: pointer;
    }
    .login-footer {
      margin-left: 30px;
      color: #f60;
    }
  }
}
.login-footer {
  height: 80px;
  line-height: 80px;
  text-align: center;
}
</style>