<template>
  <div class="prd">
    <ProductParam :name="res.name">
      <template #buy-btn>
        <a href="#" class="btn" @click="buy">立即购买</a>
      </template>
    </ProductParam>
    <!-- 视频播放 -->
    <div class="container video-bg">
      <img src="/imgs/product/product-bg-1.png" alt="" />
      <img src="/imgs/product/product-bg-2.png" alt="" />
      <img src="/imgs/product/gallery-1.png" @click="play" alt="" />
    </div>
    <div class="video-box" v-show="isShow">
      <div class="overlay"></div>
      <div class="video">
        <span class="icon-close" @click="close"></span>
        <video src="/imgs/product/video.mp4" ref="video" controls></video>
      </div>
    </div>
  </div>
</template>

<script>
import ProductParam from './../components/ProductParam'
export default {
  name: 'product',
  components: {
    ProductParam
  },
  data() {
    return {
      isShow: false,
      res: {}
    }
  },
  created() {
    this.getList();
  },
  methods: {
    play() {
      this.isShow = true
    },
    close() {
      this.isShow = false
      setTimeout(() => {
        let video = this.$refs.video
        video.pause()
      }, 0)
    },
    buy(){
      let id = this.$route.params.id
      this.$router.push(`/detail/${id}`)
    },
    getList() {
      let id = this.$route.params.id
      this.axios(`/api/products/${id}`).then((res) => {
        this.res = res;
        console.log( this.res)
      })
    }
  }
}
</script>

<style  lang="scss">
@import '../assets/scss/mixin.scss';
.video-bg {
  height: 100%;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
.video-box {
  .overlay {
    @include position(fixed);
    background-color: #333;
    opacity: 0.5;
    z-index: 1111;
  }

  .video {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1112;
    .icon-close {
      position: absolute;
      top: 20px;
      right: 20px;
      z-index: 1113;
      @include bgImg(20px, 20px, '/imgs/icon-close.png');
    }
    video {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>