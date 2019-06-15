<template>
  <div class="citySearch">
    <div class="search-enter">
      <input type="text"
             v-model="keyword">
    </div>
    <div class="searchResult"
         v-show="this.keyword">
      <ul class="searchList">
        <li v-for="item of this.list"
            :key="item.id">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'citySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      timer: null,
      list: []
    }
  },
  watch: {
    keyword () {
      console.log(this.keyword)
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            } else {
              console.log(this.keyword)
            }
          })
        }
        this.list = result
        console.log(this.list)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '~style/varibles.styl';

.citySearch {
  width: 100%;
  height: $headerHeight;
  background: $bgColor;
  position: relative;

  .search-enter {
    width: 100%;
    display: flex;
  }

  input {
    outline: none;
    border-radius: 0.13rem;
    color: $fontColor;
    line-height: 0.58rem;
    padding: 0 0.1rem;
    flex: 1;
    margin: 0.1rem 0.3rem;
  }

  .searchResult {
    position: fixed;
    left: 0;
    top: 1.72rem;
    right: 0;
    bottom: 0;
    overflow: scroll;
    background: $titleBgColor;
    z-index: 3;

    .searchList {
      width: 100%;

      li {
        padding: 0.15rem 0.3rem;
        color: #000;
        border-bottom: $borderColor;
      }
    }
  }
}
</style>
