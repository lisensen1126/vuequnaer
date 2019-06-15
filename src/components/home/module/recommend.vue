<template>
  <div class="recommend">
    <div class="recommend-text">为你推荐猜你喜欢</div>
    <ul class="recommend-ul">
      <li class="recommend-item border-bottom"
          v-for="(item,index) of recommendList"
          :key="index">
        <div class="recommend-img"><img :src="item.url"
               alt=""></div>
        <div class="recommed-right">
          <div class="recommend-title">{{item.title}}</div>
          <div class="recommend-desc">{{item.desc}}</div>
          <div class="recommend-btn">{{detailsBtnText}}</div>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'Recommend',
  props: {
    recommendList: Array
  },
  data () {
    return {
      detailsBtnText: '查看详情'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.recommend {
  width: 100%;
  .recommend-text {
    padding: 0.2rem 0 0.2rem 0.24rem;
    font-size: 0.24rem;
    background: #f7f7f7;
    color: #212121;
  }
  .recommend-item {
    width: 100%;
    padding: 0.2rem 0;
    display: flex;

    .recommend-img {
      padding-left: 0.24rem;
      img {
        width: 2rem;
        height: 2rem;
      }
    }
    .recommed-right {
      padding-left: 0.22rem;
      .recommend-title {
        margin-top: 0.26rem;
        height: 0.44rem;
        color: #212121;
        font-size: 0.32rem;
        line-height: 0.44rem;
      }
      .recommend-desc {
        color: #616161;
        font-size: 0.24rem;
        line-height: 0.34rem;
        vertical-align: text-bottom;
        padding: 0.15rem 0;
      }
      .recommend-btn {
        background: #f05d08;
        text-align: center;
        color: #212121;
        display: inline-block;
        border-radius: 0.1rem;
        padding: 0.1rem 0.2rem;
      }
    }
  }
}
</style>
