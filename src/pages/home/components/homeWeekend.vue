<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="recommend-item border-bottom" v-for="item in weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" class="item-img" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>

      </li>
    </ul>
  </div>
</template>
<script>
export default{
  name: 'homeWeekend',
  props: ['weekendList'],
};
</script>
<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/variables.styl'
  .recommend-title
    title()
  .recommend-item
    margin-bottom: .05rem
    .item-img-wrapper
      overflow:hidden
      height:0
      padding-bottom: 37.1%
      .item-img
        width: 100%
    .item-info
      padding: .1rem
      min-width:0   //控制文字溢出的省略号显示
      .item-title
        line-height: .54rem
        font-size:.32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color:describeTextColor
        ellipsis()
</style>
