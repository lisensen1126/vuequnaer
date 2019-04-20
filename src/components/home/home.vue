<template>
  <div class="hello">
    <Header></Header>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../header/header'
import Footer from '../footer/footer'
export default {
  name: 'Home',
  components: {
    Header, Footer
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
