<template>
  <v-app>
    <the-nav-drawer></the-nav-drawer>
    <the-nav-toolbar></the-nav-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer app>
      <span></span>
    </v-footer>
  </v-app>
</template>

<script>
import TheNavDrawer from '@/components/TheNavDrawer'
import TheNavToolbar from '@/components/TheNavToolbar'

export default {
  components: {
    TheNavDrawer,
    TheNavToolbar
  },
  name: 'App'
}
</script>

<style lang="scss">
.border-10 {
  border-radius: 10px;
}
</style>

