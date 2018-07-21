<template>
  <v-navigation-drawer v-model="$store.state.betslipdrawer" fixed right app clipped dark>
    <v-subheader>Betslips</v-subheader>
    <v-list dense three-line>
      <v-list-tile>
        <Row />
      </v-list-tile>
      <v-divider></v-divider>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import Row from '@/components/Betslips/BetslipRow.vue'

export default {
  components: {
    Row
  },
  data() {
    return {

    }
  },
  name: 'BetslipDrawer'
}
</script>

<style scoped>
.v-navigation-drawer {
  padding: 0;
}
</style>
