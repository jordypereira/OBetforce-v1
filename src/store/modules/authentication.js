import axios from 'axios'
import {
  clientId,
  clientSecret
} from '../../env'

const apiDomain = "http://api.obetforce.com/"
const loginUrl = 'oauth/token'
const apiAxios = axios.create({
  baseURL: apiDomain,
  withCredentials: true
})

const state = {
  isLoggedIn: !!localStorage.getItem('token'),
  pending: false,
  username: localStorage.getItem('email'),
  authError: null,
  alert: false,
  alertType: 'success',
}

const getters = {}

const mutations = {
  LOGIN(state) {
    state.pending = true
  },
  REGISTER(state) {
    state.pending = true
  },
  LOGIN_SUCCESS(state) {
    state.isLoggedIn = true
    state.pending = false
  },
  REGISTER_SUCCESS(state, alert) {
    state.alert = true
    state.authError = alert
    state.alertType = 'success'
  },
  LOGIN_FAILED(state, error) {
    state.isLoggedIn = false
    state.pending = false
    state.authError = error
  },
  REGISTER_FAILED(state, alert) {
    state.alert = true
    state.isLoggedIn = false
    state.pending = false
    state.authError = alert
    state.alertType = 'error'
  },
  LOGOUT(state) {
    state.isLoggedIn = false
    state.username = ''
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
    apiAxios.post(loginUrl, {
        'client_id': clientId,
        'client_secret': clientSecret,
        'grant_type': 'password',
        username: creds.email,
        password: creds.password
      })
      .then((resp) => {
        localStorage.setItem('token', resp.data.access_token)
        localStorage.setItem('email', creds.email)
        commit('LOGIN_SUCCESS')
        commit('updateUsername', creds.email)
      })
      .catch(err => {
        commit('LOGIN_FAILED', 'Incorrect credentials')
      })
  },
  register({
    commit
  }, creds) {
    commit('REGISTER') // show spinner
    apiAxios.post('api/user/create', {
        name: creds.name,
        email: creds.email,
        password: creds.password
      })
      .then((resp) => {
        commit('REGISTER_SUCCESS', "Your account has been created.")
        dispatch('login', creds)
      })
      .catch(err => {
        console.log(err.response)
        const msg = err.response.data.message
        console.log(msg);

        if (msg.includes('Duplicate')) {
          commit('REGISTER_FAILED', "User with that email already exists, please choose another email.")
        } else
          commit('REGISTER_FAILED', "Error, please try again.")

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