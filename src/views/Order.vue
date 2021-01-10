<template>
  <div class="order">
      <OrderHeader/>
      <router-view></router-view>
      <NavFooter/>
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader'
import NavFooter from '../components/NavFooter'

export default {
    name: 'Order',
    components:{
        OrderHeader,
        NavFooter
    }
}
</script>

<style>

</style>