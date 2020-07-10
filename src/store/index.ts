import Vuex from 'vuex'

export default Vuex.createStore({
  state: {
    isShowBack: true
  },
  getters: {
    isShowBack(state) {
      return state.isShowBack
    }
  },
  mutations: {
    setShowBack(state, isShowBack) {
      state.isShowBack = isShowBack
    }
  },
  actions: {},
  modules: {}
})
