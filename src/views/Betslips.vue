<template>
  <v-container id="betslips">
    <h1>Betslips</h1>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm5 md4 class="mx-auto" v-for="betslip in betslips" :key="betslip.id">
        <Betslip :bets="betslip.bets.data" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import Betslip from '@/components/Betslips/BetslipCard.vue'

export default {
  components: {
    Betslip
  },
  computed: { ...mapState({
    betslips: state => state.betslips.betslips
  }),
  },
  created() { 
    this.$store.dispatch('betslips/getBetslips')  
  },
}
</script>




