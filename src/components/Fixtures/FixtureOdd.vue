<template>
  <v-flex xs4 class="py-2">
    <v-layout>
      <v-flex class="xs12">
        {{ name }}
      </v-flex>
    </v-layout>
    <v-layout align-center>
      <v-flex class="xs12 px-2 py-1">
        <span class="primary px-2 py-1 pointer" @click="$emit('addBet')">
          {{ odd }}
        </span>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
export default {
  props: {
    name: String,
    odd: [Number, String],
  }
}
</script>
