<template>
  <div class="prd">
      <ProductParam >
        <template #buy-btn>
          <a href="#" class="btn">用户评价</a>
        </template>
      </ProductParam>
      <div class="container h">123</div>
  </div>
</template>

<script>
import ProductParam from './../components/ProductParam'
export default {
  name: 'product',
  components: {
    ProductParam
  }
}
</script>

<style  lang="scss">

.h{
  height: 600px;
  background-color: #ccc;
}
</style>