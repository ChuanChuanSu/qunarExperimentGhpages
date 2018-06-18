<template>
  <ul class="list">
    <li class="list-item"
        v-for="item in letters"
        :key="item"
        :ref="item"
        @click="handleClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
    >
      {{item}}
    </li>
  </ul>
</template>
<script>
export default{
  name: 'cityAlphabet',
  props: {
    cities: Object,
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null,
    };
  },
  updated() {
    this.startY = this.$refs.A[0].offsetTop;
  },
  computed: {
    letters() {
      return Object.keys(this.cities);
    },
  },
  methods: {
    handleClick(e) {
      this.$emit('alphabetClick', e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 226;
          const index = Math.floor((touchY - this.startY) / 20);
          // console.log(index);
          this.$emit('alphabetClick', this.letters[index]);
        }, 16);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    },
  },
};
</script>
<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .list
    position:absolute
    height: 60%
    right:0
    top: 4.5rem
    width:.4rem
    /*background-color: red*/
    display:flex
    flex-direction:column
    justify-content:space-around
    .list-item
      /*background-color:green*/
      line-height:.4rem
      text-align:center
      a
        color: $backGroundColor
</style>
