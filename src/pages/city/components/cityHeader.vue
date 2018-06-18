<template>
  <div class="header">
    <router-link to="/">
      <div class="header-left">
        <span class="iconfont icon-back">&#xe624;</span>
      </div>
    </router-link>
    城市选择
  </div>
</template>
<script>
export default{
  name: 'cityHeader',
};
</script>
<style lang="stylus" scoped>
@import '~styles/variables.styl'
  .header
    position:relative
    heigtht:headerHeight
    line-height:headerHeight
    text-align:center
    color:#fff
    background-color:#00bcd4
    font-size:0.32rem
    .header-left
      position:absolute
      top:0
      left:0
      width:.84rem
      text-align: center
      color:#fff
      .icon-back
        font-size:.35rem
</style>
