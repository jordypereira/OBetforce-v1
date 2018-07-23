<template>
  <div class="match my-2 elevation-20 pa-2">
    <div class="match-league">
      <img v-if="country" :src="`/images/countryflags/${this.country.name}.png`">
      <span v-if="country && match.league.data">
        {{ country.name }} - {{ match.league.data.name }}
      </span>
    </div>
    <v-layout text-xs-center align-center justify-center class="secondary white--text">
      <v-flex xs6 sm4 class="elevation-20 py-2">
        {{ match.time.starting_at.date | getDay }} {{ match.time.starting_at.date }} {{ match.time.starting_at.time | shortenDate }}
      </v-flex>
      <v-flex xs6 sm8 :class="{'py-2': $vuetify.breakpoint.xs}">
        <v-layout row wrap align-center justify-center>
          <v-flex xs12 sm5 v-if="match.localTeam.data">
            {{ match.localTeam.data.name }}
            <img :src="match.localTeam.data.logo_path" class="icon ml-2">
          </v-flex>
          <v-flex xs12 sm2 class="primary py-2">
            <span>vs</span>
          </v-flex>
          <v-flex xs12 sm5 v-if="match.visitorTeam.data">
            <img :src="match.visitorTeam.data.logo_path" class="icon mr-2"> {{ match.visitorTeam.data.name }}
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <h3 class="text-xs-center mt-2">Pre Match Odds</h3>
    <v-layout text-xs-center align-center justify-center class="secondary white--text" v-if="match.odds.data[0]">
      <Odd v-if="match.odds.data[0].bookmaker.data[0].odds.data[i]" v-for="(name, i) in ['Home', 'Draw', 'Away']" :key="i" :name="name" :odd="match.odds.data[0].bookmaker.data[0].odds.data[i].value" @addBet="addBet(i)" :disableOdd="disableOdds" />
    </v-layout>
    <v-layout v-else justify-center>
      <p class="pt-2 font-weight-light font-italic"> No odds found </p>
    </v-layout>
  </div>
</template>

<script>
import Odd from './FixtureOdd'

export default {
  props: {
    match: [Object],
    country: [Object],
    disableOdds: Boolean
  },
  components: {
    Odd
  },
  data() {
    return {
      
    }
  },
  methods: {
    addBet(i) {
      this.$store.state.betslipdrawer = true
      
      const row = 
      { 
        id: this.match.id,
        category: 'Reguliere speeltijd', 
        home: this.match.localTeam.data.name, 
        away: this.match.visitorTeam.data.name, 
        condition: this.getCondition(i), 
        odds: this.match.odds.data[0].bookmaker.data[0].odds.data[i].value
      }
      this.$store.dispatch('betslips/createRow', row)
    },
    getCondition(i) {
      switch(i){
        case 0:
        return this.match.localTeam.data.name
        break;
        case 1:
        return 'Draw'
        break;
        case 2: 
        return this.match.visitorTeam.data.name
        break;
      }
    }
  }
};
</script>

<style scoped>
.icon {
  width: 16px;
  max-width: 16px;
  max-height: 16px;
}
</style>
