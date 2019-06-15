<template>
  <div class="hello">
    <Header></Header>
    <Swiper :swiperList="swiperList"></Swiper>
    <Icons :iconsList="iconsList"></Icons>
    <Recommend :recommendList="recommendList"></Recommend>
    <WeekendTrip :weekendTripList="weekendTripList"></WeekendTrip>
    <Footer></Footer>

  </div>
</template>

<script>
import Header from './module/header'
import Footer from '../footer/footer'
import Swiper from './module/swiper'
import Recommend from './module/recommend'
import Icons from './module/icons'
import WeekendTrip from './module/weekendTrip'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    Header, Swiper, Footer, Icons, Recommend, WeekendTrip
  },
  data () {
    return {
      swiperList: [],
      iconsList: [],
      weekendTripList: [],
      recommendList: []

    }
  },
  mounted () {
    if (!process.env.NODE_ENV === 'development') {
      axios.get('https://www.jsonstore.io/5be9b83cca5a29d60034d49e479efd74d8482c21587235ab3441aa28b9c33f76')
        .then(this.getHomeInfo)
    } else {
      axios.get('/api/index.json')
        .then(this.getHomeInfo)
    }
  },
  methods: {
    getHomeInfo (res) {
      console.log(res)
      console.log(process.env.NODE_ENV)
      this.swiperList = res.data.result.swiperList
      this.iconsList = res.data.result.iconsList
      this.weekendTripList = res.data.result.weekendTripList
      this.recommendList = res.data.result.recommendList
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
