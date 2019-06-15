<template>
  <div class="">
    <div class="current-city">
      <h2 class="current-city-title">
        当前城市
      </h2>
      <div class="current-city-text">
        {{this.$store.state.currentCity}}
      </div>
    </div>
    <div class="hot-city">
      <h2 class="hot-city-title">
        热门城市
      </h2>
      <ul class="hot-city-text">
        <li v-for="(item,index) of this.hotCities"
            :key="item.id"
            v-bind:class="{'norightBorder':listinLi(index)}"
            @click="changeCurrentCity(item.name)">{{item.name}}
        </li>
      </ul>
    </div>
    <div class="cityList">
      <div class="cityListItem"
           v-for="(item,key) of this.cities"
           :key="item.id">
        <div class="citySpell">
          {{key}}
        </div>
        <ul class="cityorder">
          <div class="a"></div>
          <div class="b"></div>
          <div class="c"></div>
          <li v-for="itemc of item"
              @click="changeCurrentCity(itemc.name)"
              :key="itemc.id">
            {{itemc.name}}
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'cityList',
  props: {
    hotCities: Array,
    cities: Object
  },
  data () {
    return {
      currentCity: '北京'
    }
  },
  methods: {
    listinLi (index) {
      if ((index + 1) % 3 === 0) {
        return true
      }
      return false
    },
    changeCurrentCity (city) {
      console.log(city)
      this.$store.dispatch('changeCurrentCity', city)
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '~style/varibles.styl';

.hot-city {
  color: $fontColor;

  .hot-city-title {
    font-size: 0.24rem;
    padding: 0.24rem 0.3rem;
    background: $titleBgColor;
  }

  .hot-city-text {
    display: flex;
    flex-flow: wrap;

    .norightBorder {
      border-right: 0;
    }

    li {
      width: 33.33%;
      height: 0.9rem;
      line-height: 0.9rem;
      font-size: 0.28rem;
      text-align: center;
      border-right: 1px solid $borderColor;
      box-sizing: border-box;
      border-bottom: 1px solid $borderColor;
    }
  }
}

.current-city {
  color: $fontColor;

  .current-city-title {
    font-size: 0.24rem;
    padding: 0.24rem 0.3rem;
    background: $titleBgColor;
  }

  .current-city-text {
    margin: 0.14rem 0.3rem;
    padding: 0.17rem 0.3rem;
    display: inline-block;
    border-radius: 0.12rem;
    background: $bgColor;
  }
}

.cityList {
  .cityListItem {
    margin-top: -1px;
    z-index: 2;
    position: relative;

    .citySpell {
      font-size: 0.24rem;
      padding: 0.24rem 0.3rem;
      background: $titleBgColor;
    }

    .cityorder {
      display: flex;
      flex-flow: wrap;
      position: relative;

      li {
        width: 25%;
        text-align: center;
        height: 0.9rem;
        line-height: 0.9rem;
        border-bottom: 1px solid $borderColor;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 0.1rem;
        box-sizing: border-box;
      }

      .a {
        position: absolute;
        left: 25%;
        width: 0;
        height: 100%;
        border-right: 0.02rem solid #ddd;
      }

      .b {
        position: absolute;
        left: 50%;
        width: 0;
        height: 100%;
        border-right: 0.02rem solid #ddd;
      }

      .c {
        position: absolute;
        left: 75%;
        width: 0;
        height: 100%;
        border-right: 0.02rem solid #ddd;
      }
    }
  }
}
</style>
