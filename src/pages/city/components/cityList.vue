<template>
  <div class="list" ref="list">
    <div>
      <div class="item">
        <div class="item-title border-topbottom">您的位置</div>
        <div class="button-list">
          <div class="button-wrapper">
            <button class="button">{{this.currentCity}}</button>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-title border-topbottom ">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="item in hotCities"
               :key="item.id"
               @click="handleChangeCityClick(item.name)"
          >
            <button class="button">
              <!--北京-->
              {{item.name}}
            </button>
          </div>
        </div>
      </div>
      <div class="item" v-for="(item,index) in cities" :key="index" :ref="index">
        <div class="item-title border-topbottom">{{index}}</div>
        <div class="city-list">
          <div class="city border-bottom"
               v-for="city in item"
               :key="city.id"
               @click="handleChangeCityClick(city.name)"
          >
            {{city.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll';
import { mapState, mapMutations } from 'vuex';

export default{
  name: 'cityList',
  props: {
    cities: Object,
    hotCities: Array,
    scrollText: String,
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.list);
  },
  computed: mapState({
    currentCity: 'city',
  }),
  watch: {
    scrollText() {
      if (this.scrollText) {
        const element = this.$refs[this.scrollText];
        this.scroll.scrollToElement(element[0]);
      }
    },
  },
  methods: {
    handleChangeCityClick(city) {
      this.changeCity(city);
      this.$router.push('/');
    },
    ...mapMutations({
      changeCity: 'changeCity',
    }),
  },
};
</script>
<style lang="stylus" scoped>
@import '~styles/variables.styl'

  .border-topbottom
    &:before
      border-color: #777777
    &:after
      border-color: #777777
  .border-bottom
    &:before
      border-color: #777777
  .list
    position:absolute
    top: 1.58rem
    right:0
    bottom:0
    left:0
    /*background:red*/
    overflow:hidden
    .item-title
      title()
      color:#000
    .button-list
      padding:.1rem .6rem .1rem .1rem
      overflow:hidden
      .button-wrapper
        float:left
        width:33.33%
        /*padding: 0 .1rem*/
        /*background-color: red*/
        display:flex
        .button
          //width:100% - .4rem
          flex:1
          margin: .1rem
          padding: .05rem 0
          border-radius: .06rem
          border: solid 1px #ccc
          background-color: #fff
    .city-list
      .city
        line-height:.76rem
        text-indent:.2rem
        color:#000
</style>
