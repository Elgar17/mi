<template>
  <div class="nave-bar" :class="{fixed: isFixed }">
    <div class="container">
      <div class="pro-title">小米10</div>
      <div class="pro-param">
        <a href="#">概述</a> | <a href="#">参数</a> |
        <a href="#">用户评价</a>
        <slot name="buy-btn"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'productParam',
  data() {
    return {
      isFixed: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.emitHight)
  },
  methods: {
    emitHight() {
      let scroll =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      if (scroll > 150) {
        this.isFixed = true
      } else {
          this.isFixed = false;
      }
    }
  },
  distoryed(){
      window.removeEventListener('scroll', this.emitHight, false)
  }
}
</script>

<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
.nave-bar {
  height: 70px;
  line-height: 70px;
  background-color: #fff;
  z-index: 10;
  .container {
    @include flex();
  }
  .pro-param {
    a {
      color: $colorC;
      &:last-child {
        color: $colorG;
      }
    }
  }
  .pro-title {
    font-size: $fontH;
  }
}

.fixed{
    position: fixed;
    top: 0;
    width: 100%;
}
</style>