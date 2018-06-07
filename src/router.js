import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LiveScore from './views/LiveScore.vue'
import Fixtures from './views/Fixtures.vue'
import Obetforce from './views/Obetforce.vue'
import Betslips from './views/Betslips.vue'
import NewsFeed from './views/NewsFeed.vue'
import Challenges from './views/Challenges.vue'
import Persons from './views/Persons.vue'
import Groups from './views/Groups.vue'
import Help from './views/Help.vue'
import Glossary from './views/Glossary.vue'
import Tutorial from './views/Tutorial.vue'

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
    {
      path: '/fixtures',
      component: Fixtures,
    },
    {
      path: '/obetforce',
      component: Obetforce,
    },
    {
      path: '/betslips',
      component: Betslips,
    },
    {
      path: '/newsfeed',
      component: NewsFeed,
    },
    {
      path: '/challenges',
      component: Challenges,
    },
    {
      path: '/persons',
      component: Persons,
    },
    {
      path: '/groups',
      component: Groups,
    },
    {
      path: '/help',
      component: Help,
    },
    {
      path: '/glossary',
      component: Glossary,
    },
    {
      path: '/tutorial',
      component: Tutorial,
    }
  ],
})