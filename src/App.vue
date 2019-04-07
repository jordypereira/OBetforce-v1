<template>
  <v-app>
    <the-nav-drawer></the-nav-drawer>
    <the-nav-toolbar></the-nav-toolbar>
    <v-content>
      <v-alert
      v-model="alert"
      dismissible
      :type="alertType"
      transition="scale-transition"
    >
      {{ authError }}
    </v-alert>
      <router-view/>
    </v-content>
    <BetslipDrawer v-if="isLoggedIn" />
    <!-- <v-footer app>
      <span></span>
    </v-footer> -->
  </v-app>
</template>

<script>
import TheNavDrawer from '@/components/TheNavDrawer'
import BetslipDrawer from '@/components/BetslipDrawer'
import TheNavToolbar from '@/components/TheNavToolbar'
import { mapState } from 'vuex'

export default {
  components: {
    TheNavDrawer,
    TheNavToolbar,
    BetslipDrawer
  },
  computed: {
    ...mapState({
      isLoggedIn: state => state.authentication.isLoggedIn,
      alert: state => state.authentication.alert,
      alertType: state => state.authentication.alertType,
      authError: state => state.authentication.authError
    })
  },
  name: 'App'
}
</script>

<style lang="scss">
.border-10 {
  border-radius: 10px;
}
.m-auto {
  margin: 0 auto;
}
.pointer {
  cursor: pointer;
}
</style>
