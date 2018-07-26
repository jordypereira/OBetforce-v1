<template>
  <v-flex xs4 class="py-2">
    <v-layout>
      <v-flex class="xs12">
        {{ name }}
      </v-flex>
    </v-layout>
    <v-layout align-center>
      <v-flex class="xs12 px-2 py-1">
        <span v-if="!disableOdd" class="primary px-2 py-1 pointer" @click="$emit('addBet')">
          {{ odd | roundTo2Decimals }}
        </span>
        <span v-else class="px-2 py-1">
          {{ odd | roundTo2Decimals }}
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
    disableOdd: Boolean
  }
}
</script>
