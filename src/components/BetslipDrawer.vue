<template>
  <v-navigation-drawer v-model="$store.state.betslipdrawer" right app clipped dark>
    <v-subheader>Betslips</v-subheader>
    <v-list dense three-line>
      <ScaleTransition group>
        <template v-for="(row, i) in betslipRows">
          <v-list-tile :key="`list-tile-${row.id}`" class="betslipRow">
            <Row :category="row.category" :condition="row.condition" :home="row.home" :away="row.away" :odds="row.odds" @deleteRow="deleteRow(i)" />
          </v-list-tile>
          <v-divider :key="`divider-${i}`"></v-divider>
        </template>
      </ScaleTransition>
    </v-list>
    <v-layout v-if="betslipRows.length" column justify-center align-center>
      <p class="white--text pa-2">Total Odds: {{ totalOdds() }}</p>
      <v-btn class="primary" @click="$store.dispatch('betslips/saveBetslip')">Save Betslip</v-btn>
    </v-layout>
  </v-navigation-drawer>
</template>
<script>
import { mapState } from 'vuex'
import Row from '@/components/Betslips/BetslipRow.vue'
import {ScaleTransition} from 'vue2-transitions'

export default {
  components: {
    Row,
    ScaleTransition
  },
  computed: { ...mapState({
    betslipRows: state => state.betslips.betslipRows,
  })},
  methods: {
    deleteRow(id) {
      this.$store.dispatch('betslips/deleteRow', id)
    }, 
    totalOdds() {
      let total = 0;
      this.betslipRows.forEach(element => {
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
