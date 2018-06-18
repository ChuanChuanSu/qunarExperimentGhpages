<template>
  <div class="swiper">
    <swiper :options="swiperOption" v-if="swiperList.length">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'homeSwiper',
  props: ['swiperList'],
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
      },
    };
  },
};
</script>
<style lang="stylus" scoped>
  .swiper >>> .swiper-pagination-bullet-active
    background: #fff
  .swiper
    overflow hidden
    width:100%
    height: 0
    padding-bottom: 30%
    .swiper-img
      width:100%
</style>
