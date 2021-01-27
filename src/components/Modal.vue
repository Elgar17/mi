<template>
  <div class="modal" v-show="visable">
    <div class="mask"></div>
    <div class="modal-dialog">
      <div class="modal-header">
        <span> {{ title }}</span>
        <a href="javascript;" class="icon-close"></a>
      </div>
      <div class="modal-body">
        <slot class="body"></slot>
      </div>
      <div class="modal-footer">
        <a href="javascript;" v-if="type == 2 ? false : true" class="btn"
          >确定</a
        >
        <a href="javascript;" v-if="type == 1 ? false : true" class="btn">取消</a>
      </div>
    </div>
  </div>
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

<style>
</style>