const state = {
  isLoggedIn: !!localStorage.getItem('token'),
  pending: false,
  username: localStorage.getItem('token')
}

const getters = {}

const mutations = {
  LOGIN(state) {
    state.pending = true;
  },
  LOGIN_SUCCESS(state) {
    state.isLoggedIn = true;
    state.pending = false;
  },
  LOGOUT(state) {
    state.isLoggedIn = false;
  },
  updateUsername(state, username) {
    state.username = username;
  }
}

const actions = {
  login({
    commit
  }, creds) {
    commit('LOGIN') // show spinner
    return new Promise(resolve => {
      setTimeout(() => {
        localStorage.setItem("token", creds.email);
        commit('LOGIN_SUCCESS')
        commit('updateUsername', creds.email)
        resolve();
      }, 1000);
    });
  },
  logout({
    commit
  }) {
    localStorage.removeItem("token");
    commit('LOGOUT');
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}