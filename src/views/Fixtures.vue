<template>
  <div id="fixtures">
    <v-container>
      <h1>Fixtures</h1>
      <p v-if="loading">Loading...</p>
      <v-layout row wrap>
        <v-flex v-if="countries" xs12 sm8 v-for="(match, i) in fixtures" :key="i">
          <fixture-row :match="match" :country="getCountry(match.league.data.country_id)" />
        </v-flex>
        <v-flex v-if="!fixtures && !loading" xs12 sm 6>No Matches Found</v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
import FixtureRow from '@/components/Fixtures/FixturesRow';
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Fixtures',
  components: {
    FixtureRow,
  },
  data() {
    return {
      country: null,
      info: null,
    };
  },
  computed: { ...mapState({
    fixtures: state => state.sportmonks.fixtures,
    countries: state => state.sportmonks.countries,
    loading: state => state.shared.loading
  })},

  methods: {
    getCountry(id){
      return this.countries[id]
    }
  },
  created() {
    this.$store.dispatch('sportmonks/getFixtures')   
    this.$store.dispatch('sportmonks/getCountries')   
  },
};
</script>
