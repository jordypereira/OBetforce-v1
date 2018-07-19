<template>
  <v-flex xs12>
    <v-layout>
      <v-flex xs12 sm4 d-flex justify-center v-for="i in 3" :key="i" v-html="column[i-1]" :class="classes"></v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
export default {
  props: {
    column: Array,
    classes: Array
  }
}
</script>

