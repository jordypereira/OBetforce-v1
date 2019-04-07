<template>
  <v-container grid-list-md>
    <h1>Live Scores</h1>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-select v-if="leagues" :items="leagues" item-text="name" item-value="id" v-model="selectedLeague" label="Choose a League to display" clearable>
        </v-select>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <h1>Live Matches</h1>
      <p v-if="loading">Loading...</p>
      <v-flex xs12 sm 6 v-for="(match, i) in this.filterMatchesByLeague(livescores)" :key="i">
        <match-row :match="match" />
      </v-flex>
      <v-flex v-if="this.filterMatchesByLeague(livescores).length < 1" xs12>No Matches Found</v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import MatchRow from '@/components/MatchRow'
import { mapState } from 'vuex'

export default {
  components: {
    MatchRow
  },
  data () {
    return {
      country: null,
      selectedLeague: null,
      info: null
    }
  },
  computed: { ...mapState({
    livescores: state => state.sportmonks.livescores,
    leagues: state => state.sportmonks.leagues,
    loading: state => state.shared.loading
  }) },

  methods: {
    filterMatchesByLeague (matches) {
      if (!this.selectedLeague) return matches
      return matches.filter(match => match.league_id === this.selectedLeague)
    }
  },
  created () {
    this.$store.dispatch('sportmonks/getLivescores')
    this.$store.dispatch('sportmonks/getLeagues')
  }
}
</script>
