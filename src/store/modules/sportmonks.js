import axios from 'axios'

const sportmonksAPI = 'DWKiZeKLZU0RgcgX1L6PX1mxroSV8e70EYLBSNwxsEej5a9mE9ptYuV2oFWD'

axios.create({
  baseURL: 'https://soccer.sportmonks.com/api/v2.0/',
  headers: {
    'api_token': 'DWKiZeKLZU0RgcgX1L6PX1mxroSV8e70EYLBSNwxsEej5a9mE9ptYuV2oFWD'
  }
});

const state = {
  livescores: null
}

const getters = {}

const mutations = {
  setLivescores(state, payload) {
    state.livescores = payload
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
    axios
      .get(
        'https://soccer.sportmonks.com/api/v2.0/livescores?api_token=' + sportmonksAPI + '&include=stats,localTeam,visitorTeam,league',
      )
      .then(response => {
        commit('shared/setLoading', false, {
          root: true
        })
        commit('setLivescores', response.data.data)
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