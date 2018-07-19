<template>
  <div id="fixtures">
    <v-container>
      <h1>Fixtures</h1>
      <p v-if="loading || fixturesLoading">Loading...</p>
      <v-layout row wrap v-if="countries && fixtures && !fixturesLoading && !loading">
        <v-flex xs12 sm8 v-for="(match, i) in fixtures" :key="i">
          <fixture-row :match="match" :country="getCountry(match.league.data.country_id)" />
        </v-flex>
        <v-flex v-if="!fixtures" xs12 sm 6>No Matches Found</v-flex>
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
  computed: { ...mapState({
    fixtures: state => state.sportmonks.fixtures,
    countries: state => state.sportmonks.countries,
    loading: state => state.shared.loading,
    fixturesLoading: state => state.sportmonks.fixturesLoading
  })},

  methods: {
    getCountry(id){
      const country = this.countries.filter((country) => {
        return country.id == id
      })
      return country[0]
    }
  },
  created() {
    this.$store.dispatch('sportmonks/getFixtures')   
    this.$store.dispatch('sportmonks/getCountries')   
  },
};
</script>

