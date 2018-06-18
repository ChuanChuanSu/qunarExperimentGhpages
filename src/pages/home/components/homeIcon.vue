<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page , index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl"/>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

  </div>
</template>
<script>
export default{
  name: 'homeIcon',
  props: ['iconList'],
  data() {
    return {
      swiperOption: {
        // pagination: '.swiper-pagination',
        loop: false,
      },
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    },
  },
};
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'

  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    overflow: hidden
    width:100%
    height: 0
    padding-bottom: 50%
    /*background-color: #25a4bb*/
  .icon
    position:relative
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    text-align:center
    .icon-img
      position:absolute
      left: 0
      right: 0
      top: 0
      bottom: .44rem
      boxing-sizing: border-box
      padding:.1rem
      .icon-img-content
        height:100%
    .icon-desc
      position:absolute
      left: 0
      right: 0
      bottom: 0
      height: .44rem
      line-height:.44rem
      color: darkTextColor
      ellipsis()
</style>
