<template>
  <div>
    <div class="search">
      <input
        placeholder="请输入城市名"
        class="search-input"
        v-model="keyWord"
      />
    </div>
    <div
      class="search-result"
      v-show="keyWord.length"
      ref="search"
    >
      <ul>
        <li
          v-for="item in list"
          :key="item.id"
          class="search-result-item border-bottom"
          @click="handleChangeCityClick(item.name)"
        >
          {{item.name}}
        </li>
      </ul>
      <div
        v-show="hasNoResultData"
        class="notification border-bottom"
      >
        没有匹配的数据项
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll';
import { mapMutations } from 'vuex';

export default{
  name: 'citySearch',
  data() {
    return {
      keyWord: '',
      list: [],
      timer: null,
      cityKey: [],
      cityValue: [],
    };
  },
  props: {
    cities: Object,
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search);
  },
  computed: {
    hasNoResultData() {
      return !this.list.length;
    },
  },
  watch: {
    cities() {
      this.cityKey = Object.keys(this.cities);
      this.cityValue = Object.values(this.cities);
    },
    keyWord() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyWord.length) {
        this.list = [];
      } else {
        this.timer = setTimeout(() => {
          const result = [];
          for (let i = 0; i < this.cityKey.length; i += 1) {
            this.cityValue[i].forEach((item) => {
              if (item.spell.indexOf(this.keyWord) > -1 || item.name.indexOf(this.keyWord) > -1) {
                result.push(item);
              }
            });
          }
          this.list = result;
        }, 100);
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

  .search
    height:.72rem
    line-height:.72rem
    background-color:$backGroundColor
    padding: 0 .1rem
    .search-input
      box-sizing:border-box
      width:100%
      height:.62rem
      line-height:.62rem
      border-radius:.1rem
      padding: 0 .1rem
      text-align:center
  .search-result
    z-index: 1
    overflow: hidden
    display: block
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background-color:#eee
    .search-result-item
      line-height:.76rem
      text-indent:.2rem
      color:#000
      background-color: #fff
    .notification
      line-height:.76rem
      text-indent:.2rem
      color:#000
      background-color: #fff
</style>
