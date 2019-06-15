<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(page,index) of pages"
                    :key="index">
        <div class="icons-item"
             v-for="(item,index) of page"
             :key="index">
          <img :src="item.url"
               alt="">
          <p>{{item.des}}</p>
        </div>
      </swiper-slide>
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
  name: 'Icons',
  props: {
    iconsList: Array
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
  },
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        console.log(index + '   ' + item)
        const pageNumber = Math.floor(index / 8)
        if (!pages[pageNumber]) {
          pages[pageNumber] = []
        }
        pages[pageNumber].push(item)
      })
      return pages
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.icons >>> .swiper-container {
  width: 100%;
}

.icons >>> .swiper-pagination-bullet-active {
  background: #000 !important;
}

.icons {
  width: 100%;
  height: 3.7rem;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;

  .icons-item {
    width: 25%;
    text-align: center;
    height: 1.5rem;
    padding-top: 0.1rem;
    display: inline-block;

    img {
      width: 1.1rem;
      height: 1.1rem;
    }

    p {
      margin-top: 0.1rem;
      color: #212121;
      font-size: 0.28rem;
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      padding: 0px 0.3rem;
    }
  }
}
</style>
