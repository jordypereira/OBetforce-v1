<template>
  <v-container id="betslips">
    <h1>Betslips</h1>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm5 md3 class="mx-auto" v-for="betslip in betslips" :key="betslip.id">
        <v-card>
          <v-card-title>
            <div>
              <div class="black text-xs-center">
                <h1 class="white--text py-2" style="fontWeight: 400">BETTING SLIP</h1>
              </div>
              <span class="text-xs-center d-block mt-3">CUSTOMER RECEIPT</span>
              <v-layout v-for="bet in betslip.bets.data" :key="bet.id" row justify-space-between class="betslip mt-5">
                <v-flex xs9>
                  <p>
                    <span class="title">{{ bet.home_team }} - {{ bet.visitor_team }}</span><br/>
                    <span class="grey--text">{{ bet.condition }}</span>
                  </p>
                </v-flex>
                <v-flex xs2 class="text-xs-right">
                  <p>{{ bet.time }}<br/>
                    <span class="grey--text">{{ bet.date }}</span>
                  </p>
                </v-flex>
              </v-layout>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      bets: [
        {
          match: 'Manchester C. - Chelsea',
          condition: 'Under / Over - Over 2.5',
          time: '13:30',
          date: '19-10-2017'
        },
        {
          match: 'Lazio - Pescara',
          condition: '1x2 - 1',
          time: '21:00',
          date: '20-10-2017'
        },
        {
          match: 'Barcelona - Sevilla',
          condition: 'Both teams to score - No',
          time: '22:00',
          date: '18-10-2017'
        },
        {
          match: 'Bayern Munich - Werder Bremen',
          condition: 'Half time / Full Time - 1/1',
          time: '15:30',
          date: '18-10-2017'
        }
      ]
    }
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
