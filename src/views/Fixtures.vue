<template>
  <div id="fixtures">
    <v-container>
      <v-layout justify-space-between>
        <h1>Fixtures</h1>
        <v-flex xs4>

          <v-select v-model="selectedDay" :items="days"></v-select>
        </v-flex>
      </v-layout>
      <p v-if="loading || fixturesLoading">Loading...</p>
      <v-layout row wrap v-if="countries && !fixturesLoading && !loading">
        <v-flex xs12 :class="fixtureFullScreen" v-for="(match, i) in fixtures" :key="i">
          <fixture-row :match="match" :country="getCountry(match.league.data.country_id)" :disableOdds="$store.getters['betslips/rowInBetslip'](match.id)" />
        </v-flex>
        <v-flex v-if="fixtures.length == 0" xs12 sm 6>No Matches Found</v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import FixtureRow from '@/components/Fixtures/FixturesRow'
import { mapState } from 'vuex'

export default {
  name: 'Fixtures',
  components: {
    FixtureRow
  },
  data () {
    return {
      days: [],
      selectedDay: this.getDay(0)
    }
  },
  computed: { ...mapState({
    countries: state => state.sportmonks.countries,
    loading: state => state.shared.loading,
    fixturesLoading: state => state.sportmonks.fixturesLoading
  }),
  fixtureFullScreen () {
    return (this.$store.state.betslipdrawer) ? 'lg12' : 'lg8'
  },
  fixtures () {
    return this.$store.state.sportmonks.dayFixtures[this.selectedDay] ? this.$store.state.sportmonks.dayFixtures[this.selectedDay] : null
  }
  },

  methods: {
    getCountry (id) {
      const country = this.countries.filter((country) => {
        return country.id === id
      })
      if (country[0]) {
        return country[0]
      } else if (this.countries.length > 0) {
        this.$store.dispatch('sportmonks/getCountryById', id)
      }
    },
    getDay (i) {
      let day = new Date()
      day.setDate(day.getDate() + i)
      day = day.toISOString().split('T')[0]

      return day
    },
    getXDays (x) {
      for (let index = 0; index < x; index++) {
        this.days.push(this.getDay(index))
      }
    }
  },
  watch: {
    // whenever selected day changes, this function will run
    selectedDay: function (newDay, oldDay) {
      this.$store.dispatch('sportmonks/getDayFixtures', newDay)
    }
  },
  created () {
    this.getXDays(10)
    this.$store.dispatch('sportmonks/getDayFixtures', this.days[0])
    this.$store.dispatch('sportmonks/getCountries')
  }
}
</script>
