<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in img" :key="index">
          <img class="swiper-img" :src="item"/>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default{
  name: 'gallery',
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    };
  },
  props: {
    img: Array
  },
  methods: {
    handleGalleryClick() {
      this.$emit('galleryClick');
    }
  }
};
</script>
<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    display: flex
    flex-direction: column
    justify-content: center
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background-color:#000
    z-index:99
    .wrapper
      width:100%
      height:0
      padding-bottom: 100%
      .swiper-container
        .swiper-img
          width:100%
        .swiper-pagination
          color:#fff
          bottom: -4rem
</style>
