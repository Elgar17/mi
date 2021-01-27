<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;" @click="login" v-if="!username">登录</a>
          <a href="javascript:;" v-if="!username">注册</a>
          
          <a  @click="goToCart" class="my-cart"
            ><span class="icon-cart"></span>购物车(0)</a
          >
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="item in phnoeList" :key="item.id">
                  <a :href="'/#/product/'+item.id" target="_blank">
                    <div>
                      <div class="pro-img">
                        <img
                          v-lazy="item.mainImage"
                          alt=""
                        />
                      </div>
                      <div class="pro-name">{{item.name}}</div>
                      <div class="pro-price">{{item.price | pre}}</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div>
                      <div class="pro-img">
                        <img v-lazy="'/imgs/nav-img/nav-3-1.jpg'" alt="" />
                      </div>
                      <div class="pro-name">小米电视</div>
                      <div class="pro-price">6999元</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavHeader',
  data() {
    return {
      username: 'elgar',
      phnoeList: []
    }
  },
  props: {},
  mounted() {
    this.getProductList()
  },
  methods: {
    getProductList(){
      this.axios.get('/api/products',{
        params: {
          categoryId: '100012'
        }
      }).then(res=>{
        if(res.list.length >= 6){
           this.phnoeList = res.list.slice(0,6)
        }else{
          this.phnoeList = res.list
        }
      })
    },
    goToCart(){
      this.$router.push('/cart')
    },
    login(){
      this.$router.push('/login')
    }
  },
  filters:{
    pre(value){
      return `￥${value}元`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';

.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333;
    color: #b0b0b0;
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: $colorA;
        text-align: center;
        color: #fff;
        .icon-cart {
          @include bgImg(16px, 12px, '/imgs/icon-cart-checked.png');
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      @include flex();
      position: relative;
      height: 112px;
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: $colorA;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before {
            content: '';
            @include bgImg(55px, 55px, '/imgs/mi-logo.png');
            transition: margin 0.2s;
          }
          &:after {
            content: '';
            @include bgImg(55px, 55px, '/imgs/mi-home.png');
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          color: #333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              display: block;
              height: 220px;
              transition: height 0.5s;
              box-shadow: 0px 7px 6px rgba(0, 0, 0, 0.11);
            }
          }
          .children {
            position: absolute;
            width: 1226px;
            height: 0px;
            top: 112px;
            left: 0;
            overflow: hidden;
            box-shadow: none;
            z-index: 1000;
            background-color: #fff;
            transition: height 0.5s;
            border-top: 1px solid #e5e5e5;
            .product {
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              a {
                display: inline-block;
              }
              .pro-img {
                height: 162px;
              }
              img {
                height: 111px;
                margin-top: 26px;
              }
              .pro-name {
                height: 20px;
                font-weight: bold;
                color: $colorB;
              }
              .pro-price {
                height: 12px;
                margin-top: 2px;
                color: $colorA;
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            border: none;
            width: 264px;
            height: 50px;
            box-sizing: border-box;
            border-right: 1px solid #e0e0e0;
            padding-left: 10px;
          }
          a {
            @include bgImg(18px, 18px, '/imgs/icon-search.png');
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>
