<template>
  <transition name="slider">
    <div class="modal" v-show="visable">
    <div class="mask"></div>
    <div class="modal-dialog">
      <div class="modal-header">
        <span> {{ title }}</span>
        <a href="javascript:;" class="icon-close" @click="$emit('cansle')"></a>
      </div>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
      <div class="modal-footer">
        <a href="javascript:;" v-if="type == 2 ? false : true" class="btn"
          @click="$emit('submit')"
          >{{sureType}}</a
        >
        <a href="javascript:;" v-if="type == 1 ? false : true" class="btn btn-defult">{{cansleText}}</a>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  props: {
    // 大小: s m l
    modeType: {
      type: String,
      default: 'form'
    },
    title: String,
    // 类型： 1 只有确定 2 只有取消 3 都有
    type: Number,
    sureType: {
      type: String,
      default: '确定'
    },
    cansleText: {
      type: String,
      default: '取消'
    },
    visable: Boolean
  }
}
</script>

<style lang="scss">
@import './../assets/scss/mixin.scss';
@import './../assets/scss/modal.scss';



</style>