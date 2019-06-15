<template>
  <div class="header">
    <div class="header-left iconfont">&#xe624;</div>
    <div class="header-input iconfont"
         @click="toCitySearch">&#xe632;输入城市游玩景点主题</div>
    <router-link to="/city">
      <div class="header-right ">{{this.$store.state.currentCity}}<span class="iconfont">&#xe673;</span></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  },
  methods: {
    toCitySearch () {
      this.$router.push('/city')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '~style/varibles.styl';

.header {
  line-height: 0.86rem;
  display: flex;
  background-color: $bgColor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;
    text-align: center;
  }

  .header-input {
    flex: 1;
    border-radius: 0.1rem;
    background: #fff;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    color: #ccc;
    padding-left: 0.2rem;
  }

  .header-right {
    width: 1.24rem;
    float: right;
    text-align: center;
    color: #fff;

    span {
      font-size: 0.2rem;
      margin-left: 0.04rem;
    }
  }
}
</style>
