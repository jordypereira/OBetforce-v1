import axios from 'axios'

const apiDomain = "http://api.obetforce.com/"

const apiAxios = axios.create({
  baseURL: apiDomain,
  withCredentials: true,
  headers: {
    'Authorization': localStorage.getItem('token')
  }
})

const state = {
  betslips: [],
  betslipRows: []
}

const mutations = {
  addRow(state, row) {
    state.betslipRows.push(row)
  },
  addBetslip(state) {
    state.betslips.push(state.betslipRows)
    // foreach(state.betslipRows) {
    //   apiAxios.post
    // }
    state.betslipRows = []
  },
  removeBetslipRow(state, id) {
    state.betslipRows.splice(id, 1)
  }
}

const actions = {
  createRow({
    commit
  }, row) {
    commit('addRow', row)
  },
  deleteRow({
    commit
  }, id) {
    commit('removeBetslipRow', id)
  },
  saveBetslip({
    commit
  }) {
    commit('addBetslip')
  }
}

const getters = {
  rowInBetslip: (state) => (id) => {
    return state.betslipRows.some((betslipRow) => betslipRow.id === id)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}