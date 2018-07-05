import Vue from 'vue'
import Vuex from 'vuex'
import sportmonks from './modules/sportmonks'
import shared from './modules/shared'
import authentication from './modules/authentication'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: true
  },
  modules: {
    sportmonks,
    shared,
    authentication
  }
})