<template>
  <div id="group-overview">
    <v-layout row justify-content-between class="primary pa-3 white--text" style="borderRadius: 10px">
      <v-flex xs6 class="headline">
        {{ group.name }}
      </v-flex>
      <v-flex xs6 class="text-xs-right headline">
        View All
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex v-for="(person, i) in group.persons" :key="i" sm6 lg2 class="my-3 mx-1">
        <v-card class="friend-card">
          <v-card-media :src="person.image" height="200px">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0 text-sm-center primary white--text">{{ person.name }}</h3>
              <div>{{ person.text }}</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: {
    group: Object
  }
}
</script>

<style lang="scss" scoped>
.friend-card {
  max-width: 250px;
}
</style>
