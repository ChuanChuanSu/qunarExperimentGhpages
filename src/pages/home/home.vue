<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icon :iconList="iconList"></home-icon>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import axios from 'axios'; // ajax请求
import { mapState } from 'vuex';
import homeHeader from './components/homeHeader';
import homeSwiper from './components/homeSwiper';
import homeIcon from './components/homeIcon';
import homeRecommend from './components/homeRecommend';
import homeWeekend from './components/homeWeekend';


export default {
  name: 'home',
  components: {
    homeHeader,
    homeSwiper,
    homeIcon,
    homeRecommend,
    homeWeekend,
  },
  data() {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: '',
    };
  },
  methods: {
    getHomeInfo() {
      axios.get('/api/index.json?city='.concat(this.city))
        .then(this.getHomeInfoSuc);
    },
    getHomeInfoSuc(res) {
      if (res.data.ret && res.data.data) {
        this.swiperList = res.data.data.swiperList;
        this.iconList = res.data.data.iconList;
        this.recommendList = res.data.data.recommendList;
        this.weekendList = res.data.data.weekendList;
      }
    },
  },
  computed: {
    ...mapState(['city']),
  },
  mounted() {
    this.getHomeInfo();
    this.lastCity = this.city;
  },
  activated() {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.getHomeInfo();
    }
  },
};
</script>

<style>
</style>
