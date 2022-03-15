import Vue from 'vue'
import Vuex from 'vuex'
import vuexTest from './modules/vuexTest'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    vuexTest
  },
  getters
})

export default store
