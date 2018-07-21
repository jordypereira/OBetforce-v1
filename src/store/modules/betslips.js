const state = {
  betslips: [],
  betslipRows: [
    {
      category: 'Reguliere speeltijd',
      home: 'Portugal',
      away: 'Spain',
      condition: 'Portugal',
      odds: '4.05'
    }
  ]
}

const getters = {}

const mutations = {
  addRow (state, row) {
    state.betslipRows.push(row)
  },
  addBetslip (state) {
    state.betslips.push(state.betslipRows)
    state.betslipRows = []
  }
}

const actions = {
  createRow ({ commit }, row) {
    commit('addRow', row)
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
