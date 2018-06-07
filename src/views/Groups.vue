<template>
  <div id="groups">
    <v-container v-if="!loading">
      <group-category v-for="category in groups.categories" :key="category.name" :category="category"></group-category>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
import GroupCategory from '@/components/Groups/GroupOverview'

export default {
  name: 'Groups',
  components: {
    GroupCategory
  },
  data() {
    return {
      groups: null,
      loading: true
    }
  },
  mounted() {
    axios
      .get('http://localhost:8080/group') // eslint-disable-next-line
      .then(response => {
        this.groups = response.data
        this.loading = false
      })
  }
}
</script>

<style>
</style>
