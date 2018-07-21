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
  }
}

const actions = {
  createRow ({ commit }, row) {
    commit('addRow', row)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
