<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <h1>News Feed</h1>
      <v-flex xs12 sm 6 v-for="(news, i) in news" :key="i">
        <news-row :news="news" />
      </v-flex>
      <v-flex v-if="!news" xs12 sm 6>No News</v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import NewsRow from '@/components/NewsRow'
import axios from 'axios'

export default {
  components: {
    NewsRow
  },
  data() {
    return {
      news: null
    }
  },
  mounted() {
    axios
      .get('http://livesoccertv.com/mobile/api/news/') // eslint-disable-next-line
      .then(response => (this.news = response.data.data))
  }
}
</script>
