<template>
  <div>
    <router-link
      to="/"
      tag="div"
      class="header-abs"
      v-show="!hasScreenScroll"
    >
      <span class="iconfont header-abs-back">&#xe624;</span>
    </router-link>
    <div
      class="header-fixed"
      v-show="hasScreenScroll"
      :style="styleObject"
    >
      <router-link tag="div" to="/" class="header-fixed-left">
        <span class="iconfont header-fixed-back">&#xe624;</span>
      </router-link>
      {{sightName}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'detailHeader',
  data() {
    return {
      hasScreenScroll: false,
      styleObject: {
        opacity: 0
      }
    };
  },
  props: {
    sightName: String
  },
  methods: {
    handleScroll() {
      // console.log('scroll');
      const top = document.documentElement.scrollTop;
      this.hasScreenScroll = (top !== 0);
      if (top > 0 && top <= 300) {
        const opacity = (top / 300) > 1 ? 1 : (top / 300);
        this.styleObject = { opacity };
      }
    }
  },
  mounted() {
    // console.log('nihao');
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    // console.log('beforeDestroy');
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/variables.styl'
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .72rem
    height: .72rem
    line-height: .72rem
    border-radius: .36rem
    text-align: center
    background-color: #444
    opacity: .8
    color: #fff
    font-size: .32rem
  .header-fixed
    position:fixed
    left: 0
    top: 0
    right: 0
    heigtht:headerHeight
    line-height:headerHeight
    text-align:center
    color:#fff
    background-color:#00bcd4
    font-size:0.32rem
    .header-fixed-left
      position:absolute
      top:0
      left:0
      width:.84rem
      text-align: center
      color:#fff
      .header-fixed-back
        font-size:.35rem
</style>
