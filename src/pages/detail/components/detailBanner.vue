<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <div class="img-wrapper">
        <img class="img" :src="bannerImg" />
      </div>
      <div class="img-info">
        <div class="img-info-left">{{ sightName }}</div>
        <div class="img-info-right">
          <span class="iconfont img-info-right-icon">&#xe695;</span>
          11
        </div>
      </div>
    </div>
    <fade-animation>
      <gallery
        :img="gallaryImgs"
        v-show="hasGalleryShow"
        @galleryClick="handleGalleryClick"
      ></gallery>
    </fade-animation>
  </div>
</template>
<script>
import gallery from 'common/gallery/gallery';
import fadeAnimation from 'common/fadeAnimation/fadeAnimation';

export default {
  name: 'detailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data() {
    return {
      hasGalleryShow: false
    };
  },
  components: {
    gallery,
    fadeAnimation
  },
  methods: {
    handleBannerClick() {
      this.hasGalleryShow = true;
    },
    handleGalleryClick() {
      this.hasGalleryShow = false;
    }
  }
};
</script>
<style lang="stylus" scoped>
  .banner
    position: relative
    .img-wrapper
      overflow: hidden
      height:0
      padding-bottom: 55%
      .img
        width:100%
    .img-info
      position:absolute
      bottom: 0
      left: 0
      right: 0
      display:flex
      color: #ffffff
      height:0.6rem
      line-height:0.6rem
      padding-left:.1rem
      background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
      .img-info-left
        flex:1
        font-size: .32rem
      .img-info-right
        padding:0 .4rem
        margin-top:.1rem
        height:.4rem
        line-height:.4rem
        background-color: rgba(0,0,0,0.8)
        border-radius:.2rem
        font-size: .24rem
        .img-info-right-icon
          font-size:.24rem
</style>
