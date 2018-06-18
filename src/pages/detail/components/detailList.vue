<template>
  <div>
    <div
      class="item border-bottom"
      v-for="(item, index) in categoryList"
      :key="index"
      @click="handleItemClick(index,$event)"
    >
      <span class="item-icon"></span>
      {{item.title}}
      <div
        class="item-children"
        v-if="item.children"
      >
        <fade-animation>
          <detail-list
            v-show="categoryList[index].showChildren"
            :categoryList="item.children"
          >
          </detail-list>
        </fade-animation>
      </div>
    </div>
  </div>
</template>
<script>
import fadeAnimation from 'common/fadeAnimation/fadeAnimation';

export default {
  name: 'detailList',
  data() {
    return {
      showChildren: false
    };
  },
  props: {
    categoryList: Array
  },
  methods: {
    handleItemClick(index, e) {
      this.categoryList[index].showChildren = !this.categoryList[index].showChildren;
      e.stopPropagation();
    }
  },
  components: {
    fadeAnimation
  }
};
</script>
<style lang="stylus" scoped>
  .item
    line-height:.8rem
    font-size: .32rem
    padding: 0 .2rem
    .item-icon
      position: relative
      left: .06rem
      top: .08rem
      display: inline-block
      width: .36rem
      height: .36rem
      background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right: .1rem
      background-size: .4rem 3rem
</style>
