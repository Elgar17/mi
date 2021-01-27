<template>
  <div class="index">
    <div class="container">
      <!-- 轮播 -->
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a class="listHref" href="">手机 电话卡</a>
              <div class="chiledren">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(sub, index) in item" :key="index">
                    <a :href="'/#/product/' + sub.id || sub">
                      <img
                        v-lazy="sub == 1 ? '/imgs/item-box-1.png' : sub.img"
                        alt=""
                      />
                      <span>{{ sub == 1 ? '小米9' : sub.name }}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a class="listHref" href="">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a class="listHref" href="">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a class="listHref" href="">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a class="listHref" href="">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a class="listHref" href="">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a class="listHref" href="">电源 配件</a>
            </li>
            <li class="menu-item">
              <a class="listHref" href="">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="item in slidList" :key="item.id">
            <a :href="'/#/product' + item.id">
              <img v-lazy="item.img" />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <!-- 广告位 -->
      <div class="ads-box">
        <a
          :href="'/#/product/' + item.id"
          v-for="item in adsList"
          :key="item.id"
        >
          <img v-lazy="item.img" alt="" />
        </a>
      </div>
      <div class="banner">
        <img v-lazy="'/imgs/banner-1.png'" alt="" />
      </div>
      <div class="product-box">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <img v-lazy="'/imgs/mix-alpha.jpg'" alt="" />
          </div>
          <div class="list-box">
            <div class="list" v-for="(item, i) in phoneList" :key="i">
              <div class="item" v-for="(li, j) in item" :key="j">
                <span class="new">新型</span>
                <img v-lazy="li.mainImage" alt="" />
                <div class="item-info">
                  <h5>{{li.name}}</h5>
                  <p>{{li.subtitle}}</p>
                  <p class="price">{{li.price}}元</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ServiceBar />
    <Modal 
      modeType="m"
      title="提示"
      :type="3"
      :visable="showModal"
    >
      <!-- <template v-slot:body> -->
        <p>商品添加成功！</p>
      <!-- </template> -->
    </Modal>
  </div>
</template>

<script>
import ServiceBar from '@/components/ServiceBar.vue'
import Modal from '@/components/Modal.vue'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
// import Modal from '../components/Modal.vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar,
    Modal
  },
  directives: {
    swiper: directive,
    draggable: true
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      slidList: [
        {
          id: '42',
          img: '/imgs/slider/slide-1.jpg'
        },
        {
          id: '45',
          img: '/imgs/slider/slide-2.jpg'
        },
        {
          id: '46',
          img: '/imgs/slider/slide-3.jpg'
        }
      ],
      menuList: [
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米9CC'
          },
          {
            id: 31,
            img: '/imgs/item-box-2.png',
            name: '小米8青春版'
          },
          {
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name: 'Readmi K20 Pro'
          },
          {
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name: '移动4G+专区'
          }
        ],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1]
      ],
      adsList: [
        {
          id: 33,
          img: '/imgs/ads/ads-1.png'
        },
        {
          id: 48,
          img: '/imgs/ads/ads-2.jpg'
        },
        {
          id: 45,
          img: '/imgs/ads/ads-3.png'
        },
        {
          id: 47,
          img: '/imgs/ads/ads-4.jpg'
        }
      ],
      phoneList: [
        [1, 1, 1, 1],
        [1, 1, 1, 1]
      ],
      showModal: true
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    this.swiper.slideTo(3, 500, false);
    this.init();
  },
  methods:{
    init(){
      this.axios.get('/api/products',{
        params:{
          categoryId: 100012,
          pageSize: 8
        }
      }).then(res=>{
        this.phoneList = [res.list.slice(0,4),res.list.slice(4,8)]
      })
    }
  }
}
</script>

<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
.swiper-box {
  position: relative;
  img {
    width: 100%;
    height: 450px;
  }
  .swiper-button-prev {
    left: 280px;
  }
  .nav-menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 264px;
    height: 451px;
    z-index: 100;
    padding: 26px 0;
    box-sizing: border-box;
    background-color: #55585a7a;
    .menu-wrap {
      .menu-item {
        height: 50px;
        line-height: 50px;
        &:hover {
          background-color: $colorA;
          .chiledren {
            display: block;
          }
        }
        .listHref {
          position: relative;
          display: block;
          font-size: 16px;
          color: #fff;
          padding-left: 30px;
          &::after {
            content: '';
            position: absolute;
            right: 30px;
            top: 17.5px;
            @include bgImg(10px, 15px, '/imgs/icon-arrow.png');
          }
        }
        .chiledren {
          display: none;
          position: absolute;
          top: 0;
          left: 264px;
          width: 962px;
          height: 451px;
          background-color: $colorG;
          ul {
            display: flex;
            justify-content: space-between;
            height: 75px;
            li {
              width: 25%;
              margin-left: 15px;
              a {
                display: flex;
                align-items: center;
                font-size: 14px;
                color: $colorB;
              }
              img {
                width: 42px;
                height: 35px;
                margin-right: 5px;
                
              }
            }
          }
        }
      }
    }
  }
}
.banner {
  img {
    width: 100%;
  }
}
.ads-box {
  @include flex();
  margin-top: 14px;
  margin-bottom: 31px;
  a {
    width: 296px;
    height: 167px;
  }
}

.product-box {
  background-color: $colorJ;
  padding-top: 30px;
  padding-bottom: 50px;
  h2 {
    font-size: $fontF;
    height: 21px;
    line-height: 21px;
    color: $colorB;
    padding-bottom: 10px;
  }
  .wrapper {
    display: flex;
    .banner-left img {
      width: 224px;
      height: 619px;
      margin-right: 16px;
    }
    .list {
      @include flex();
      width: 986px;
      margin-bottom: 14px;
      &:last-child{
        margin-bottom: 0;
      }
      .item{
        width: 236px;
        height: 302px;
        background-color: $colorG;
        text-align: center;
        .new{
          background-color: #5bd16f;
          color: #fff;
          padding: 3px 15px;
        }
        
          img{
            width: 221px;
            height: 152px;
            margin-top: 15px;
          }
        
        .item-info{
          h3{
            font-size: $fontJ;
            color: $colorB;
            line-height: $fontJ;
            font-weight: bold;
          }
          p{
            color: $colorD;
            line-height: 13px;
            margin: 6px auto;
          }
          .price{
            color: red;
            cursor: pointer;
            &::after{
              content: '';
              @include bgImg(22px,22px,'/imgs/icon-cart-hover.png');
              margin-left: 5px;
              vertical-align: middle ;
            }
          }
          
        }
      }
    }
  }
}
</style>