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
      <v-flex xs12 sm 6 v-for="(match, i) in this.filterMatchesByLeague(matches)" :key="i">
        <match-row :match="match" />
      </v-flex>
      <v-flex v-if="!this.filterMatchesByLeague(matches)" xs12 sm 6>No Matches Found</v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import MatchRow from '@/components/MatchRow';
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
      matches: null,
      info: null,
    };
  },
  methods: {
    filterMatchesByLeague(matches) {
      if (!this.selectedLeague) return matches;
      return matches.filter(match => match.league_id === this.selectedLeague);
    },
  },
  mounted() {
    axios
      .get(
        'https://soccer.sportmonks.com/api/v2.0/livescores?api_token=VPw9DABvYNd0OH8S4G5UoUiIEgOCno0mN6bJND1IdkHlwVJ2rRVBVg6JzzAY&include=stats,localTeam,visitorTeam,league',
      ) // eslint-disable-next-line
      .then(response => (this.matches = response.data.data));
    axios
      .get(
        'https://soccer.sportmonks.com/api/v2.0/leagues?api_token=VPw9DABvYNd0OH8S4G5UoUiIEgOCno0mN6bJND1IdkHlwVJ2rRVBVg6JzzAY',
      ) // eslint-disable-next-line
      .then(response => (this.leagues = response.data.data));
  },
};
</script>
