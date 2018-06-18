<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    ></detail-banner>
    <detail-header
      :sightName="sightName"
    ></detail-header>
    <div class="container">
      <detail-list
        :categoryList="categoryList"
      ></detail-list>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import detailBanner from './components/detailBanner';
import detailHeader from './components/detailHeader';
import detailList from './components/detailList';

export default {
  name: 'detail',
  data() {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    };
  },
  components: {
    detailBanner,
    detailHeader,
    detailList
  },
  methods: {
    getDetailInfo() {
      axios
        .get('/api/detail.json?id=' + this.$route.params.id)
        .then(this.getDetailInfoSucc);
    },
    getDetailInfoSucc(res) {
      const data = res.data;
      if (data.ret && data.data) {
        this.sightName = data.data.sightName;
        this.bannerImg = data.data.bannerImg;
        this.gallaryImgs = data.data.gallaryImgs;
        this.categoryList = data.data.categoryList;
      }
    }
  },
  mounted() {
    this.getDetailInfo();
  }
};
</script>
<style lang="stylus" scoped>
  .container
    height: 50rem
</style>
