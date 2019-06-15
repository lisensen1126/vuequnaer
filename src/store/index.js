import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    'currentCity': '沙比'
  },
  actions: {
    changeCurrentCity (ctx, currentCity) {
      console.log(currentCity)
      ctx.commit('changeCurrentCity', currentCity)
    }
  },
  mutations: {
    changeCurrentCity (state, currentCity) {
      state.currentCity = currentCity
    }
  }
})
