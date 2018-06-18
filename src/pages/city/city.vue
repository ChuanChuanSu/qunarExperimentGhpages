<template>
  <div>
    <city-header></city-header>
    <city-search
      :cities="cities"
    ></city-search>
    <city-list
      :cities="cities"
      :hotCities="hotCities"
      :scrollText="scrollText"
    ></city-list>
    <city-alphabet
      :cities="cities"
      @alphabetClick="handleAlphabetClick"
    ></city-alphabet>
  </div>
</template>
<script>
import axios from 'axios';
import cityHeader from './components/cityHeader';
import citySearch from './components/citySearch';
import cityList from './components/cityList';
import cityAlphabet from './components/cityAlphabet';

export default{
  name: 'city',
  data() {
    return {
      hotCities: [],
      cities: {},
      scrollText: '',
    };
  },
  components: {
    cityHeader,
    citySearch,
    cityList,
    cityAlphabet,
  },
  methods: {
    getCityInfo() {
      axios.get('/api/city.json')
        .then(this.getCityInfoSuc);
    },
    getCityInfoSuc(res) {
      const data = res.data;
      if (data.ret && data.data) {
        this.hotCities = data.data.hotCities;
        this.cities = data.data.cities;
      }
    },
    handleAlphabetClick(text) {
      this.scrollText = text;
    },
  },
  mounted() {
    this.getCityInfo();
  },
};
</script>
<style lang="stylus" scoped>
</style>
