/**
 * 模块 vuexTest.js
 */
export default {
  namespaced: true,
  state: {
    stateHello: 1
  },
  getters: {
    gettersHello: (state, getters, rootState, rootGetters) => {
      console.log('state:', state)
      console.log('getters:', getters)
      console.log('rootState:', rootState)
      console.log('rootGetters:', rootGetters)
      return state.stateHello * 2
    }
  },
  mutations: {
    mutationsHello (state, val) {
      console.log('val', val)
      state.stateHello += val
    }
  },
  actions: {

  }
}
