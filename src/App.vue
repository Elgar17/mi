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
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/button.scss';


</style>
