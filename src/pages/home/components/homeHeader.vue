<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont icon-back">&#xe624;</span>
    </div>
    <!--<input class="header-input" placeholder="输入城市/景点/游玩主题"/>-->
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.currentCity}}
        <span class="iconfont icon-arrow">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default{
  name: 'homeHeader',
  computed: mapState({
    currentCity: 'city',
  }),
};
</script>
<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header
    height:headerHeight
    line-height:headerHeight
    display:flex
    background-color:$backGroundColor
    color:#fff
    .header-left
      float:left
      width:.84rem
      text-align: center
      .icon-back
        font-size:.35rem
    .header-input
      flex:1
      color:#ccc
      background-color: #fff
      border-radius:.1rem
      margin-top: .12rem
      height:.62rem
      line-height:.62rem
      padding-left:.2rem
    .header-right
      float:right
      min-width:1.04rem
      padding: 0 .1rem
      text-align: center
      color:#fff
      .icon-arrow
        font-size:.3rem
        margin-left:-0.04rem
</style>
