const state = {
  betslips: [],
  betslipRows: []
}

const getters = {}

const mutations = {
  addRow (state, row) {
    state.betslipRows.push(row)
  },
  addBetslip (state) {
    state.betslips.push(state.betslipRows)
    state.betslipRows = []
  },
  removeBetslipRow (state, id) {
    state.betslipRows.splice(id, 1)
  }
}

const actions = {
  createRow ({ commit }, row) {
    commit('addRow', row)
  },
  deleteRow ({ commit }, id) {
    commit('removeBetslipRow', id)
  },
  saveBetslip ({ commit }) {
    commit('addBetslip')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
