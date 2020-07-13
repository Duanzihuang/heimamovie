// tslint:disable
// import Vuex from 'vuex'
import { createStore } from 'vuex'

export default createStore({
  state: {
    isShowBack: true
  },
  getters: {
    isShowBack (state: any) {
      return state.isShowBack
    }
  },
  mutations: {
    setShowBack (state: any, isShowBack: boolean) {
      state.isShowBack = isShowBack
    }
  },
  actions: {},
  modules: {}
})
