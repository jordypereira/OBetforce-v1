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
      <VRow :column="['Online shop', 'Bonus', 'Max', 'Rule', 'Total']" :classes="['headline']" />
      <BonusRow v-for="shop in shops" :key="shop.name" :name="shop.name" :bonus="shop.bonus" :max="shop.max" :rule="shop.rule" :slider="slider" />
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
      sliderMax: 250,
      shops: [
        {
          name: '24bettle.com',
          bonus: 100,
          max: 100,
          rule: 'Play 8X'
        },
        {
          name: '777.com',
          bonus: 100,
          max: 150
        },
        {
          name: 'Betcenter',
          bonus: 100,
          max: 100
        },
        {
          name: 'Betway',
          bonus: 100,
          max: 100
        },
        {
          name: 'Betfirst',
          bonus: 200,
          max: 100
        },
        {
          name: 'Bwin',
          bonus: 100,
          max: 120
        },
        {
          name: 'Bingoal',
          bonus: 100,
          max: 210
        },
        {
          name: 'Circus',
          bonus: 100,
          max: 250
        },
        {
          name: 'Goldenpalace',
          bonus: 100,
          max: 500
        },
        {
          name: 'Napoleongames',
          bonus: 100,
          max: 200
        },
        {
          name: 'Stanleybet',
          bonus: 200,
          max: 100
        },
        {
          name: 'Unibet',
          bonus: 200,
          max: 80
        }
      ]
    }
  }
}
</script>

<style>
</style>
