<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
   return {
     d: '123'
   }
  },
  mounted() {
    this.getUser()
    this.getCartList()
  },
  methods: {
    getUser(){
      this.axios.get('/api/user').then(res=>{
        this.$store.dispatch('saveUser', res.username);
        // to-do add vuex
      })
    },
    getCartList(){
      this.axios.get('/api/carts/products/sum').then(res=>{
        this.$store.dispatch('saveCartCount', res);
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/button.scss';


</style>
