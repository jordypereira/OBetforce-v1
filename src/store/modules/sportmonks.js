import { SportmonksApi } from 'sportmonks'
const sportmonksAPI = new SportmonksApi(
  'DWKiZeKLZU0RgcgX1L6PX1mxroSV8e70EYLBSNwxsEej5a9mE9ptYuV2oFWD'
)

// const sportmonksAPI = '?api_token=DWKiZeKLZU0RgcgX1L6PX1mxroSV8e70EYLBSNwxsEej5a9mE9ptYuV2oFWD'

let getNextWeek = () => {
  let nextWeek = new Date()
  nextWeek.setDate(nextWeek.getDate() + 10)
  nextWeek = nextWeek.toISOString().split('T')[0]

  return nextWeek
}

const state = {
  livescores: null,
  leagues: localStorage.getItem('sportmonks/countries') || null,
  fixtures: null,
  countries: localStorage.getItem('sportmonks/countries') || null,
  fixturesLoading: false
}

const getters = {}

const mutations = {
  setLivescores (state, payload) {
    state.livescores = payload
  },
  setLeagues (state, payload) {
    state.leagues = payload
    localStorage.setItem('leagues', payload)
  },
  setFixtures (state, payload) {
    state.fixtures = payload
  },
  setCountries (state, payload) {
    state.countries = payload
    localStorage.setItem('countries', payload)
  },
  setFixturesLoading (state, payload) {
    state.fixturesLoading = payload
  }
}

const actions = {
  getLivescores ({ dispatch }) {
    if (!this.state.livescores) {
      dispatch('updateLivescores')
    }
  },
  updateLivescores ({ commit }) {
    commit('shared/setLoading', true, {
      root: true
    })
    commit('shared/clearError', '', {
      root: true
    })
    sportmonksAPI
      .get('v2.0/livescores', {
        stats: true,
        localTeam: true,
        visitorTeam: true,
        league: true
      })
      .then((response) => {
        commit('setLivescores', response.data)
        commit('shared/setLoading', false, {
          root: true
        })
      })
  },
  getLeagues ({ dispatch }) {
    if (!this.state.leagues) {
      dispatch('updateLeagues')
    }
  },
  updateLeagues ({ commit }) {
    commit('shared/setLoading', true, {
      root: true
    })
    commit('shared/clearError', '', {
      root: true
    })
    sportmonksAPI.get('v2.0/leagues').then((response) => {
      commit('setLeagues', response.data)
      commit('shared/setLoading', false, {
        root: true
      })
    })
  },
  getFixtures ({ dispatch }) {
    if (!this.state.fixtures) {
      dispatch('updateFixtures')
    }
  },
  updateFixtures ({ commit }) {
    commit('shared/setLoading', true, {
      root: true
    })
    commit('setFixturesLoading', true)
    commit('shared/clearError', '', {
      root: true
    })
    const today = new Date().toISOString().split('T')[0]
    const nextWeek = getNextWeek()
    sportmonksAPI
      .get('v2.0/fixtures/between/{from}/{to}', {
        from: today,
        to: nextWeek,
        odds: true,
        localTeam: true,
        visitorTeam: true,
        league: true
      })
      .then((response) => {
        commit('setFixtures', response.data)
        commit('shared/setLoading', false, {
          root: true
        })
        commit('setFixturesLoading', false)
      })
  },
  getCountries ({ dispatch }) {
    if (!this.state.countries) {
      dispatch('updateCountries')
    }
  },
  updateCountries ({ commit }) {
    commit('shared/setLoading', true, {
      root: true
    })
    commit('shared/clearError', '', {
      root: true
    })
    sportmonksAPI.get('v2.0/countries').then((response) => {
      commit('setCountries', response.data)
      commit('shared/setLoading', false, {
        root: true
      })
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
