<template>
  <v-layout>
    <v-flex xs2 @click="$emit('deleteRow')" d-flex justify-center align-center class="deleteRow">
      <v-icon>close</v-icon>
    </v-flex>
    <v-flex xs1>
      <v-divider vertical/>
    </v-flex>
    <v-flex xs7>
      <v-layout row wrap>
        <v-flex xs12 d-flex>
          {{ condition }}
        </v-flex>
        <v-flex xs12 d-flex class="grey--text">
          {{ category }}
        </v-flex>
        <v-flex xs12 d-flex>
          {{ home }} - {{ away }}
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs2 d-flex align-start justify-end>
      {{ odds | roundTo2Decimals }}
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    condition: String,
    category: String,
    home: String,
    away: String,
    odds: [String, Number]
  }
}
</script>

<style>
.deleteRow:hover {
  cursor: pointer;
}
</style>
