import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import fastClick from 'fastclick';
import '@/assets/styles/reset.css';
import '@/assets/styles/border.css';
import '@/assets/styles/iconfont.css';
import 'swiper/dist/css/swiper.css';
import App from './App';
import router from './router';
import store from './store/index';

Vue.config.productionTip = false;
fastClick.attach(document.body);// 移动端300毫秒问题
Vue.use(VueAwesomeSwiper);// 轮播图插件

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App),
});
