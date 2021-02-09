<template>
  <div class="dtail">
    <ProductParam :name="detail.name" />
    <div class="container clear-fix">
      <div class="swiper fl">
        <img :src="detail.mainImage" alt="" />
      </div>
      <div class="content fr">
        <h1>{{ detail.name }}</h1>
        <p>{{ detail.subtitle }}</p>
        <div class="price">
          <div class="zi-ying">小米自营</div>
          {{ detail.price }}元
          <span class="price-">{{ detail.price + 100 }}元</span>
          <!-- <hr /> -->
        </div>
        <div class="choise">选择版本</div>
        <div class="choise-btn">6GB+64GB 全网通</div>
        <div class="choise">颜色</div>
        <div class="choise-btn">
          <span class="box"></span>
          深空灰
        </div>
        <div @click="addCart" class=" addCart btn btn-h">加入购物车</div>
      </div>
    </div>
    <img src="/imgs/detail/item-price.jpeg" alt="" />
    <ServiceBar />
  </div>
</template>

<script>
import ProductParam from './../components/ProductParam'
import ServiceBar from './../components/ServiceBar'
export default {
  name: 'detail',
  components: {
    ProductParam,
    ServiceBar
  },
  data() {
    return {
      detail: {},
      id: this.$route.params.id
    }
  },
  created() {
    this.getDetailDate()
  },
  methods: {
    getDetailDate() {
      this.axios(`/api/products/${this.id}`).then((res) => {
        console.log(res)
        this.detail = res;
      })
    },
    addCart(){
      this.axios.post('/api/carts',{
        productId: this.id,
        selected: true
      }).then(res=>{
        this.$store.dispatch('saveCartCount',res.cartProductVoList.length)
        this.$router.push('/cart')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/config.scss';
@import '../assets/scss/button.scss';
.price {
  width: 500px;
  color: $colorA;
  font-size: $fontH;
  .zi-ying {
    padding: 5px 0;
    color: $colorA;
    font-size: $fontJ;
  }
  .price- {
    color: $colorD;
    font-size: $fontK;
    text-decoration: line-through;
  }
}
.choise {
  padding: 15px 0;
  font-size: $fontH;
  font-weight: bold;
}
.choise-btn {
  width: 200px;
  height: 40px;
  line-height: 40px;
  margin-left: 20px;
  font-size: $fontI;
  text-align: center;
  border: 1px solid $colorA;
  color: $colorA;
  margin-bottom: 10px;
  .box {
    display: inline-block;
    height: 14px;
    width: 14px;
    font-size: $fontI;
    color: darkblue;
    background-color: $colorB;
  }
}

.addCart:hover{
  cursor: pointer;
}
</style>