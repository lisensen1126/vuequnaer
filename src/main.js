// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import 'style/reset.css' // 重设标签默认样式
import 'style/border.css' // 解决1px边框问题
import 'style/iconfont/iconfont.css' // iconfont
import 'swiper/dist/css/swiper.css' // 轮播样式
import store from './store'
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
