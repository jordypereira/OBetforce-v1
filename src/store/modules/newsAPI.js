import axios from 'axios'

const apiDomain = 'https://newsapi.org/v2/'

const apiAxios = axios.create({
  baseURL: apiDomain,
  headers: {
    'Authorization': '7268d3802e194bf8926774143fc2e239'
  }
})

const state = {
  newsArticles: localStorage.getItem('news/articles') || null
}

const mutations = {
  setNewsArticles (state, payload) {
    state.newsArticles = payload
    localStorage.setItem('news/articles', payload)
  }
}

const actions = {
  getNewsArticles ({
    dispatch
  }) {
    if (!this.state.newsArticles) {
      dispatch('updateNewsArticles')
    }
  },
  updateNewsArticles ({
    commit
  }) {
    commit('shared/setLoading', true, {
      root: true
    })
    commit('shared/clearError', '', {
      root: true
    })
    apiAxios
      .get('top-headlines?country=us&category=sports')
      .then((resp) => {
        commit('shared/setLoading', false, {
          root: true
        })
        commit('setNewsArticles', resp.data.articles)
      })
      .catch((resp) => {
        commit('shared/setError', resp, {
          root: true
        })
        commit('shared/setLoading', false, {
          root: true
        })
      })
  }
}

const getters = {

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
