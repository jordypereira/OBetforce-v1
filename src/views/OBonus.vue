<template>
  <v-container grid-list-md>
    <h1 class="display-4 text-xs-center">OBonus</h1>
    <hr class="mb-4">
    <v-layout class="my-4">
      <v-flex xs12 sm10 offset-sm1>
        <v-card>
          <v-card-title primary-title>
            <div class="headline m-auto">Set your budget</div>
          </v-card-title>
          <v-flex xs10 offset-xs1>
            <v-slider v-model="slider" :max="sliderMax" :min="0" :step="10"></v-slider>
            <v-layout justify-space-between>
              <div style="width: 60px">
                <v-text-field v-model="slider" class="mt-0" hide-details single-line type="number" step="10" max="1000"></v-text-field>
              </div>
              <p class="mt-0">€ {{ sliderMax }}</p>
            </v-layout>
          </v-flex>

        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <VRow :column="['Online shop', 'Bonus', 'Total']" :classes="['display-1']" />
      <BonusRow v-for="shop in shops" :key="shop.name" :bonus="shop.bonus" :name="shop.name" :slider="slider" />
    </v-layout>
  </v-container>
</template>

<script>
import BonusRow from '@/components/OBonus/BonusRow'
import VRow from '@/components/shared/VRow'

export default {
  components: {
    BonusRow,
    VRow
  },
  data () {
    return {
      slider: 0,
      sliderMax: 1000,
      shops: [{
        name: 'A',
        bonus: 100
      }, {
        name: 'B',
        bonus: 50
      }]
    }
  }
}
</script>

<style>
</style>
