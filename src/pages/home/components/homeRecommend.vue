<template>
  <div>
    <div class="recommend-title">热门推荐</div>
    <ul>
      <router-link
        class="recommend-item border-bottom"
        v-for="item in recommendList"
        :key="item.id"
        tag="li"
        :to="'/detail/' + item.id"
      >
        <img :src="item.imgUrl" class="item-img" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>

      </router-link>
    </ul>
  </div>
</template>
<script>
export default{
  name: 'homeRecommend',
  props: ['recommendList'],
};
</script>
<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/variables.styl'
  .recommend-title
    title()
    margin-top: .2rem
  .recommend-item
    /*background-color: #25a4bb*/
    overflow:hidden
    display:flex
    height:1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex:1
      padding: .1rem
      min-width:0
      .item-title
        line-height: .54rem
        font-size:.32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: describeTextColor
        ellipsis()
      .item-button
        line-height:.44rem
        margin-top:.16rem
        color:#fff
        background-color:#ff9300
        padding:0 .1rem
        border-radius: .06rem
</style>
