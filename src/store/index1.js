import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 根部store中的getter
export default new Vuex.Store({
  state: {
    stateHello: 1
  },
  getters: {
    gettersHello: (state) => {
      return state.stateHello * 2
    }
  },
  mutations: {
    mutationsHello(state, val) {
      console.log('val', val)
      state.stateHello += val
    }
  }
})