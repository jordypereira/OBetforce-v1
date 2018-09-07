import axios from 'axios'

const apiDomain = "http://api.obetforce.com/"
const accessToken = `Bearer ${localStorage.getItem('token')}`

const apiAxios = axios.create({
  baseURL: apiDomain,
  headers: {
    'Authorization': accessToken
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
  removeBetslip(state) {
    state.betslipRows = []
  },
  removeRow(state, id) {
    state.betslipRows.splice(id, 1)
  },
  saveBetslips(state, betslips) {
    state.betslips = betslips
  }
}

const actions = {
  createRow({ // Add a bet to the betslip
    commit
  }, row) {
    commit('addRow', row)
  },
  deleteRow({ // Remove a bet from the betslip
    commit
  }, id) {
    commit('removeRow', id)
  },
  saveBetslip({
    commit,
    getters
  }) { // Save a betslip
    console.log(getters.betSlipString);

    apiAxios.post('api/betslip/create', {
        bets: getters.betSlipString
      })
      .then((resp) => {
        commit('removeBetslip')
      })
      .catch(err => {
        console.log(err);
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

const getters = {
  rowInBetslip: (state) => (id) => {
    return state.betslipRows.some((betslipRow) => betslipRow.id === id)
  },
  betSlipString: state => {
    let betString = ''

    // Add all bets in a long string format: condition,home_team,visitor_team,odds,date;
    state.betslipRows.forEach(bet => {
      betString += `${bet.condition},${bet.home},${bet.away},${bet.odds},${bet.date};`
    });

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