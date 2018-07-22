<template>
  <v-navigation-drawer v-model="$store.state.betslipdrawer" right app clipped dark>
    <v-subheader>Betslips</v-subheader>
    <ScaleTransition group>
      <v-list dense three-line v-for="(row, i) in BetslipRows" :key="i" class="betslipRow">
        <v-list-tile>
          <Row :category="row.category" :condition="row.condition" :home="row.home" :away="row.away" :odds="row.odds" @deleteRow="deleteRow(i)" />
        </v-list-tile>
        <v-divider></v-divider>
      </v-list>
    </ScaleTransition>
    <v-layout column justify-center align-center>
      <p class="white--text pa-2">Total Odds: {{ totalOdds() }}</p>
      <v-btn class="m-auto primary" @click="$store.dispatch('betslips/saveBetslip')">Save Betslip</v-btn>
    </v-layout>
  </v-navigation-drawer>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Row from '@/components/Betslips/BetslipRow.vue'
import {ScaleTransition} from 'vue2-transitions'

export default {
  components: {
    Row,
    ScaleTransition
  },
  computed: { ...mapState({
    BetslipRows: state => state.betslips.betslipRows,
  })},
  methods: {
    deleteRow(id) {
      this.$store.dispatch('betslips/deleteRow', id)
    }, 
    totalOdds() {
      let total = 0;
      this.BetslipRows.forEach(element => {
        total += parseFloat(element.odds)
      })
      return Math.round(total * 100) / 100
    }
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
.betslipRow {
  display: inline-block;
}
</style>
