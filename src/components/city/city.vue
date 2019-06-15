<template>
  <div class="city">
    <div class="city-header">
      <router-link to="/">
        <div class="city-back iconfont">
          &#xe624;
        </div>
      </router-link>

      <h1>城市选择</h1>
    </div>
    <citySearch :cities="cities"></citySearch>
    <cityList :cities="cities"
              :hotCities="hotCities"></cityList>
  </div>
</template>

<script>
import cityList from './cityList'
import citySearch from './citySearch'
import axios from 'axios'
export default {
  name: 'City',
  components: { cityList, citySearch },
  data () {
    return {
      cities: {},
      hotCities: []
    }
  },
  mounted () {
    axios.get('/api/city.json')
      .then(this.getCityInfo)
  },
  methods: {
    getCityInfo (resp) {
      console.log(resp)
      this.cities = resp.data.cities
      this.hotCities = resp.data.hotCities
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '~style/varibles.styl';

.city-header {
  color: #fff;
  background: $bgColor;
  height: $headerHeight;

  .city-back {
    left: 0;
    top: 0;
    width: 0.8rem;
    height: 0.86rem;
    line-height: 0.86rem;
    float: left;
    text-align: center;
    color: #fff;
  }

  h1 {
    margin: 0 auto;
    text-align: center;
    font-size: 0.32rem;
    padding: 0 1rem;
    height: $headerHeight;
    line-height: $headerHeight;
  }
}
</style>
