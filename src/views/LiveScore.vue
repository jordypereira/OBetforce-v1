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
      <v-flex v-if="!this.filterMatchesByLeague(livescores)" xs12 sm 6>No Matches Found</v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import MatchRow from '@/components/MatchRow';
import { mapState, mapActions } from 'vuex'
import axios from 'axios';

export default {
  components: {
    MatchRow,
  },
  data() {
    return {
      country: null,
      selectedLeague: null,
      leagues: null,
      info: null,
    };
  },
  computed: { ...mapState({
    livescores: state => state.sportmonks.livescores,
    loading: state => state.shared.loading
  })},

  methods: {
    filterMatchesByLeague(matches) {
      if (!this.selectedLeague) return matches;
      return matches.filter(match => match.league_id === this.selectedLeague);
    },
  },
  created() {
    this.$store.dispatch('sportmonks/getLivescores')
    // axios
    //   .get(
    //     'https://soccer.sportmonks.com/api/v2.0/livescores?api_token=DWKiZeKLZU0RgcgX1L6PX1mxroSV8e70EYLBSNwxsEej5a9mE9ptYuV2oFWD&include=stats,localTeam,visitorTeam,league',
    //   ) // eslint-disable-next-line
    //   .then(response => (this.matches = response.data.data));
    axios
      .get(
        'https://soccer.sportmonks.com/api/v2.0/leagues?api_token=DWKiZeKLZU0RgcgX1L6PX1mxroSV8e70EYLBSNwxsEej5a9mE9ptYuV2oFWD',
      ) // eslint-disable-next-line
      .then(response => (this.leagues = response.data.data));
  },
};
</script>
