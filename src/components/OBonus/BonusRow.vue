<template>
  <v-flex xs12>
    <v-layout>
      <v-flex xs12 sm4 d-flex justify-center>{{ name }}</v-flex>
      <v-flex xs12 sm4 d-flex justify-center>{{ bonus }} %</v-flex>
      <v-flex xs12 sm4 d-flex justify-center>{{ slider + slider * bonus / 100 }}</v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
export default {
  props: {
    name: String,
    bonus: Number,
    slider: [Number, String]
  }
}
</script>

