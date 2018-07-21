<template>
  <v-layout>
    <v-flex xs2>
      <v-btn block icon right>
        <v-icon>close</v-icon>
      </v-btn>
    </v-flex>
    <v-flex xs8>
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
      {{ odds }}
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
</style>
