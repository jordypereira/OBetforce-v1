<template>
  <v-navigation-drawer v-model="$store.state.betslipdrawer" fixed right app clipped dark>
    <v-subheader>Betslips</v-subheader>
    <v-list dense three-line v-for="(row, i) in BetslipRows" :key="i">
      <v-list-tile>
        <Row :category="row.category" :condition="row.condition" :home="row.home" :away="row.away" :odds="row.odds" />
      </v-list-tile>
      <v-divider></v-divider>
    </v-list>
    <v-layout justify-center align-center>

      <v-btn class="m-auto primary">Save Betslip</v-btn>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Row from '@/components/Betslips/BetslipRow.vue'

export default {
  components: {
    Row
  },
  computed: { ...mapState({
    BetslipRows: state => state.betslips.betslipRows,
  })},
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
