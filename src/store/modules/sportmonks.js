import {
  SportmonksApi
} from 'sportmonks';
const sportmonksAPI = new SportmonksApi('DWKiZeKLZU0RgcgX1L6PX1mxroSV8e70EYLBSNwxsEej5a9mE9ptYuV2oFWD');

// const sportmonksAPI = '?api_token=DWKiZeKLZU0RgcgX1L6PX1mxroSV8e70EYLBSNwxsEej5a9mE9ptYuV2oFWD'

let getNextWeek = () => {
  let nextWeek = new Date()
  nextWeek.setDate(nextWeek.getDate() + 10);
  nextWeek = nextWeek.toISOString().split('T')[0]

  return nextWeek
}

const state = {
  livescores: null,
  leagues: null,
  fixtures: null,
  countries: null,
}

const getters = {}

const mutations = {
  setLivescores(state, payload) {
    state.livescores = payload
  },
  setLeagues(state, payload) {
    state.leagues = payload
  },
  setFixtures(state, payload) {
    state.fixtures = payload
  },
  setCountries(state, payload) {
    state.countries = payload
  }
}

const actions = {
  getLivescores({
    commit
  }) {
    commit('shared/setLoading', true, {
      root: true
    })
    commit('shared/clearError', '', {
      root: true
    })
    sportmonksAPI
      .get(
        'v2.0/livescores', {
          stats: true,
          localTeam: true,
          visitorTeam: true,
          league: true
        },
      )
      .then(response => {
        commit('shared/setLoading', false, {
          root: true
        })
        commit('setLivescores', response.data)
      })
  },
  getLeagues({
    commit
  }) {
    commit('shared/setLoading', true, {
      root: true
    })
    commit('shared/clearError', '', {
      root: true
    })
    sportmonksAPI
      .get(
        'v2.0/leagues',
      )
      .then(response => {
        commit('shared/setLoading', false, {
          root: true
        })
        commit('setLeagues', response.data)
      })
  },
  getFixtures({
    commit
  }) {
    commit('shared/setLoading', true, {
      root: true
    })
    commit('shared/clearError', '', {
      root: true
    })
    const today = new Date().toISOString().split('T')[0]
    const nextWeek = getNextWeek()
    sportmonksAPI
      .get(
        'v2.0/fixtures/between/{from}/{to}', {
          from: today,
          to: nextWeek,
          odds: true,
          localTeam: true,
          visitorTeam: true,
          league: true
        }
      )
      .then(response => {
        commit('shared/setLoading', false, {
          root: true
        })
        commit('setFixtures', response.data)
      })
  },
  getCountries({
    commit
  }) {
    commit('shared/setLoading', true, {
      root: true
    })
    commit('shared/clearError', '', {
      root: true
    })
    sportmonksAPI.get('v2.0/countries')
      .then(response => {
        commit('shared/setLoading', false, {
          root: true
        })
        commit('setCountries', response.data)
      })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}