<template>
  <div class="header">
    <div class="header-left iconfont">&#xe624;</div>
    <div class="header-input iconfont">&#xe632;输入城市游玩景点主题</div>
    <div class="header-right ">城市<span class="iconfont">&#xe673;</span></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '~style/varibles.styl'
.header
    line-height : .86rem
    display: flex
    background-color: $bgColor
    color: #fff
    .header-left
        width: .64rem
        float: left
        text-align center
    .header-input
        flex: 1
        border-radius: .1rem
        background: #fff
        height : .64rem
        line-height : .64rem
        margin-top : .12rem
        margin-left : .2rem
        color : #ccc
        padding-left .2rem
    .header-right
        width: 1.24rem
        float: right
        text-align: center;
        span
            font-size .2rem
            margin-left .04rem
</style>
