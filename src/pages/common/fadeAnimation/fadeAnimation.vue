<template>
  <transition name="fade">
    <slot></slot>
  </transition>
</template>
<script>
export default {
  name: 'fadeAnimation'
};
</script>
<style lang="stylus" scoped>
  .fade-enter, .fade-leave-to
    opacity: 0
  .fade-enter-active, .fade-leave-active
    transition: opacity 1s
</style>
