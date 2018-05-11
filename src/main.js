import Vue from 'vue'
import Vuetify from 'vuetify';
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
    warning: '#FFC107',
  },
});

Vue.config.productionTip = false
Vue.filter('shortenDate', date => date.substring(0, 5));

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')