<template>
  <v-card raised class="betslip">
    <v-card-title primary-title>
      <v-layout column>
        <v-flex>
          <h1 class="text-xs-center black white--text pa-2" style="fontWeight: 400">BETTING SLIP</h1>
        </v-flex>
        <!-- <v-flex>
          <span class="text-xs-center d-block mt-3">CUSTOMER RECEIPT</span>
        </v-flex> -->
      </v-layout>
    </v-card-title>
    <v-card-text>
      <p class="text-xs-right headline">{{ totalOdds() }}</p>
      <v-divider></v-divider>
      <BetCardRow v-for="bet in bets" :key="bet.id" :homeTeam="bet.home_team" :visitorTeam="bet.visitor_team" :condition="bet.condition" :time="bet.time" :date="bet.date" :odds="bet.odds" />
    </v-card-text>
  </v-card>
</template>

<script>
import BetCardRow from '@/components/Betslips/BetCardRow.vue'

export default {
  components: {
    BetCardRow
  },
  props: {
    bets: Array
  },
  methods: {
    totalOdds () {
      let total = 1
      this.bets.forEach(bet => {
        total *= parseFloat(bet.odds)
      })
      return Math.round(total * 100) / 100
    }
  }
}
</script>

<style lang="scss" scoped>
.betslip {
  margin: 10px 10px 0 10px;
}
</style>
