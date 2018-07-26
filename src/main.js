import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  theme: {
    primary: '#4CAF50',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

Vue.config.productionTip = false
Vue.filter('shortenDate', (date) => date.substring(0, 5))
Vue.filter('getDay', (date) => {
  date = new Date(date)
  let weekday = new Array(7)
  weekday[0] = 'Sun'
  weekday[1] = 'Mon'
  weekday[2] = 'Tue'
  weekday[3] = 'Wed'
  weekday[4] = 'Thu'
  weekday[5] = 'Fri'
  weekday[6] = 'Sat'
  return weekday[date.getDay()]
})
Vue.filter('roundTo2Decimals', (num) => {
  return (Math.round(num * 100) / 100).toFixed(2)
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
