<template>
  <v-navigation-drawer v-model="$store.state.betslipdrawer" right app clipped dark>
    <v-subheader>Betslips</v-subheader>
    <v-list dense three-line v-for="(row, i) in BetslipRows" :key="i">
      <v-scale-transition>
        <v-list-tile>
          <Row :category="row.category" :condition="row.condition" :home="row.home" :away="row.away" :odds="row.odds" @deleteRow="deleteRow(i)" />
        </v-list-tile>
        <v-divider></v-divider>
      </v-scale-transition>
    </v-list>
    <v-layout justify-center align-center>
      <v-btn class="m-auto primary" @click="$store.dispatch('betslips/saveBetslip')">Save Betslip</v-btn>
    </v-layout>
  </v-navigation-drawer>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Row from '@/components/Betslips/BetslipRow.vue'

export default {
  components: {
    Row
  },
  computed: { ...mapState({
    BetslipRows: state => state.betslips.betslipRows,
  })},
  methods: {
    deleteRow(id) {
      this.$store.dispatch('betslips/deleteRow', id)
    }
  },
  data() {
    return {

    }
  },
  name: 'BetslipDrawer'
}
</script>

<style scoped>
.v-navigation-drawer {
  padding: 0;
}
</style>
