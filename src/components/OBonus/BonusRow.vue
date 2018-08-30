<template>
  <v-flex xs12>
    <v-layout>
      <v-flex xs12 sm4 d-flex justify-center>{{ name }}</v-flex>
      <v-flex xs12 sm4 d-flex justify-center>{{ bonus }} %</v-flex>
      <v-flex xs12 sm4 d-flex justify-center>€ {{ max }}</v-flex>
      <v-flex xs12 sm4 d-flex justify-center>{{ rule }}</v-flex>
      <v-flex xs12 sm4 d-flex justify-center subheading font-weight-bold>€ {{ obonus }}</v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
export default {
  props: {
    name: String,
    bonus: Number,
    max: Number,
    rule: String,
    slider: [Number, String]
  },
  computed: {
    obonus() {
      let obonus =  this.slider + this.slider * this.bonus / 100
      if (obonus >= this.max){
        return this.max
      } else {
        return obonus
      }
    }
  }
}
</script>

