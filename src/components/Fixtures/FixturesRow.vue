<template>
  <div class="match my-2 elevation-20 pa-2">
    <div class="match-league">
      <img :src="`/images/countryflags/${this.country.name}.png`" alt=""> {{ country.name }} - {{ match.league.data.name }}
    </div>
    <v-layout text-xs-center align-center justify-center class="secondary white--text">
      <v-flex xs4 class="elevation-20 py-2">
        {{ match.time.starting_at.date | getDay }} {{ match.time.starting_at.date }} {{ match.time.starting_at.time | shortenDate }}
      </v-flex>
      <v-flex xs3>
        {{ match.localTeam.data.name }}
        <img :src="match.localTeam.data.logo_path" class="icon ml-2">
      </v-flex>
      <v-flex xs1 class="primary py-2">
        <span>vs</span>
      </v-flex>
      <v-flex xs3>
        <img :src="match.visitorTeam.data.logo_path" class="icon mr-2"> {{ match.visitorTeam.data.name }}
      </v-flex>
    </v-layout>
    <h3 class="text-xs-center mt-2">Pre Match Odds</h3>
    <v-layout text-xs-center align-center justify-center class="secondary white--text">
      <Odd name="Home" :odd="match.odds.data[0].bookmaker.data[0].odds.data[0].value" />
      <Odd name="Draw" :odd="match.odds.data[0].bookmaker.data[0].odds.data[1].value" />
      <Odd name="Away" :odd="match.odds.data[0].bookmaker.data[0].odds.data[2].value" />
    </v-layout>

  </div>
</template>

<script>
import Odd from './FixtureOdd'

export default {
  props: {
    match: [Array, Object],
    country: [Array, Object]
  },
  components: {
    Odd
  }
};
</script>

<style scoped>
.icon {
  width: 16px;
}
</style>
