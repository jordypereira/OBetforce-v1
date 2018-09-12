import axios from 'axios'

// Api URL
const apiDomain = 'http://api.obetforce.com/'
// Auth token received from logging in
const accessToken = `Bearer ${localStorage.getItem('token')}`

const apiAxios = axios.create({
  baseURL: apiDomain,
  headers: {
    Authorization: accessToken // Auth token
  }
})

const state = {
  betslips: [], // All betslips of the current user
  betslipRows: [] // All bets in the current Betslip
}

// Call Mutations from Actions
const mutations = {
  // Adds a bet to the current Betslip
  addRow(state, row) {
    state.betslipRows.push(row)
  },
  // Removes a bet from the current Betslip
  removeRow(state, id) {
    state.betslipRows.splice(id, 1)
  },
  // Clears the current Betslip
  clearRows(state) {
    state.betslipRows = []
  },
  // Save user betslips for display
  saveBetslips(state, betslips) {
    state.betslips = betslips
  }
}

// Call Actions from Vue
const actions = {
  // Add a bet to the betslip
  createRow({
    commit
  }, row) {
    commit('addRow', row)
  },
  // Remove a bet from the current betslip
  deleteRow({
    commit
  }, id) {
    commit('removeRow', id)
  },
  // Save the current betslip
  saveBetslip({
    commit,
    getters
  }) {
    apiAxios
      .post('api/betslip/create', {
        bets: getters.betSlipString
      })
      // Clear Rows
      .then(commit('clearRows'))
      // Don't clear rows and show error
      .catch((err) => {
        console.log(err)
        // TODO Alert error
      })

  },
  getBetslips({
    commit
  }) {
    apiAxios.get('api/user/betslips').then((resp) => {
      console.log(resp.data.data);
      commit('saveBetslips', resp.data.data)
    })
  }
}

// Get a state in a different way
const getters = {
  rowInBetslip: (state) => (id) => {
    return state.betslipRows.some((betslipRow) => betslipRow.id === id)
  },
  betSlipString: (state) => {
    let betString = ''

    // Add all bets in a long string format: condition,home_team,visitor_team,odds,date;
    state.betslipRows.forEach((bet) => {
      betString += `${bet.condition},${bet.home},${bet.away},${bet.odds},${
        bet.date
      };`
    })

    // Remove last ;
    betString = betString.slice(0, -1)

    return betString
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}