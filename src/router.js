import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LiveScore from './views/LiveScore.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: Home,
    },
    {
      path: '/livescore',
      component: LiveScore,
    },
  ],
})