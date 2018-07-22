import Vue from 'vue'
import Vuex from 'vuex'
import sportmonks from './modules/sportmonks'
import shared from './modules/shared'
import authentication from './modules/authentication'
import betslips from './modules/betslips'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: true,
    betslipdrawer: false
  },
  modules: {
    sportmonks,
    shared,
    authentication,
    betslips
  }
})
