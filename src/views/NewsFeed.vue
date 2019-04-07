<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <h1>News Feed</h1>
      <v-card>
        <v-container
          fluid
          grid-list-md
        >
          <v-layout row wrap>
            <v-flex
              v-for="(newsArticle, i) in news" :key="i"
              v-bind="{ [`xs6`]: true }"
            >
              <news-row :news="newsArticle" />
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      <v-flex v-if="!news" xs12 sm 6>No News</v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import NewsRow from '@/components/NewsRow'
import { mapState } from 'vuex'

export default {
  name: 'News',
  components: {
    NewsRow
  },
  data () {
    return {

    }
  },
  computed: { ...mapState({
    news: state => state.newsAPI.newsArticles,
    loading: state => state.shared.loading
  })
  },
  created () {
    this.$store.dispatch('newsAPI/getNewsArticles')
  }
}
</script>
