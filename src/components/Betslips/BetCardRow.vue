<template>
  <v-layout class="betslip mt-3" row justify-space-between>
    <div>
      <p>
        <span class="title">{{ homeTeam }} - {{ visitorTeam }}</span><br/>
        <span class="grey--text">{{ condition }}</span>
      </p>
    </div>
    <div>
      <p>{{ time }}<br/>
        <span class="grey--text">{{ date | onlyDate }}</span>
      </p>
    </div>
  </v-layout>
</template>

<script>
export default {
  props: {
    homeTeam: String,
    visitorTeam: String,
    condition: String,
    time: String,
    date: String,
  }
}
</script>

<style lang="scss" scoped>
</style>
