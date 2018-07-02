<template>
  <div id="group-overview">
    <v-layout row justify-content-between class="primary pa-3 white--text border-10">
      <v-flex xs12 class="headline">
        {{ category.name }}
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex v-for="(group, i) in category.groups" :key="i" sm6 lg3 class="my-3 mx-5 group">
        <v-card class="group-card" width="300px">

          <v-card-title primary-title>
            <v-layout>
              <v-flex xs6 lg3>
                <img src="@/assets/images/group_icon.png" alt="Group Icon">
              </v-flex>
              <v-flex xs6 lg8 offset-lg1>
                <span class="headline">{{ group.name }}</span>
                <br> {{ group.title }}
              </v-flex>
            </v-layout>
            <img src="@/assets/images/group_image.png" alt="Group Image">
            <v-layout justify-space-between class="mt-3">
              <v-flex xs6>
                {{ group.percentage }}%
                <br> Return last 12M
              </v-flex>
              <v-flex class="align-self-end">
                <span class="primary--text group-risk">{{ group.risk }}</span>
                <br> Risk
              </v-flex>
            </v-layout>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: {
    category: Object
  }
}
</script>

<style lang="scss" scoped>
.group {
  .group-risk {
    font-size: 25px;
    font-weight: bold;
    border: solid 2px #49af49;
    padding-left: 6px;
    padding-right: 6px;
  }
}
</style>
