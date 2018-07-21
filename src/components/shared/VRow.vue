<template>
  <v-flex xs12>
    <v-layout>
      <v-flex xs12 sm4 d-flex justify-center v-for="i in column" :key="i" v-html="i" :class="classes"></v-flex>
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

