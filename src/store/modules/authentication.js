import axios from 'axios'

const authKey = "2p0anMjU1xw95OmUZQDV4eZ83U3Kw2JJ2DaUPwNX"

const state = {
  isLoggedIn: !!localStorage.getItem('token'),
  pending: false,
  username: localStorage.getItem('token'),
  authError: null
}

const getters = {}

const mutations = {
  LOGIN(state) {
    state.pending = true
  },
  LOGIN_SUCCESS(state) {
    state.isLoggedIn = true
    state.pending = false
  },
  LOGIN_FAILED(state, error) {
    state.isLoggedIn = false
    state.pending = false
    state.authError = error
  },
  LOGOUT(state) {
    state.isLoggedIn = false
  },
  updateUsername(state, username) {
    state.username = username
  }
}

const actions = {
  login({
    commit
  }, creds) {
    commit('LOGIN') // show spinner
    axios.post('http://127.0.0.1:8000/oauth/token', {
        'client_secret': authKey,
        'client_id': 2,
        'grant_type': 'password',
        username: creds.email,
        password: creds.password
      })
      .then(function (response) {
        localStorage.setItem('token', creds.email)
        commit('LOGIN_SUCCESS')
        commit('updateUsername', creds.email)
      })
      .catch(err => {
        commit('LOGIN_FAILED', 'Incorrect credentials')
      })
  },
  logout({
    commit
  }) {
    localStorage.removeItem('token')
    commit('LOGOUT')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}