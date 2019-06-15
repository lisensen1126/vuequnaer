<template>
  <div class="weekendTrip">
    <div class="weekendTrip-title">
      周末去哪
    </div>
    <ul class="weekendTrip-box">
      <li class="weekendTrip-item border-bottom"
          v-for="item of weekendTripList"
          :key="item.id">
        <img :src="item.url"
             alt="" />
        <p class="trip-title">{{item.tripTitle}}</p>
        <p class="trip-desc">{{item.tripDesc}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WeekendTrip',
  props: {
    weekendTripList: Array
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.weekendTrip-title {
  height: 0.8rem;
  padding-left: 0.26rem;
  line-height: 0.8rem;
  color: #212121;
  background: #f7f7f7;
}
.weekendTrip-item {
  padding: 0;
  border-bottom: 0.1rem solid #eeeeee;
  img {
    width: 100%;
  }
  .trip-title {
    overflow: hidden;
    padding-right: 1.4rem;
    color: #212121;
    font-size: 0.28rem;
    line-height: 0.48rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 0.14rem 0.2rem 0 0.24rem;
  }

  .trip-desc {
    overflow: hidden;
    padding-right: 1.4rem;
    color: #616161;
    font-size: 0.24rem;
    line-height: 0.42rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-left: 0.24rem;
    padding: 0 0.2rem 0.2rem 0.24rem;
  }
}
</style>
