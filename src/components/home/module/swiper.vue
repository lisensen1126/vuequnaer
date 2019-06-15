<template>
  <div class="swiper-box">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList"
                    :key="item.id"><img :src="item.imgUrl"
             alt=""></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"
           slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Homewiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.swiper-box >>> .swiper-pagination-bullet-active {
  background: #fff !important;
}

.swiper-box {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 26.6666667%;
}
</style>
