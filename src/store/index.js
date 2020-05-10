import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    password: ''
  },
  getters: {
    username (state) {
      return state.username || sessionStorage.getItem('loginusername')
    }
  },
  mutations: {
    setLogin (state, val) {
      state.username = val
      sessionStorage.setItem('loginusername', val)
    }
  },
  actions: {
  },
  modules: {
  }
})
