<template>
  <a :href="news.url" target="_blank">
    <v-card tile hover>
      <v-img v-if="news.urlToImage"
        :src="news.urlToImage"
        height="200px"
      >
      </v-img>
      <v-card-title primary-title>
          <div>
            <h3 class="headline mb-3">{{ news.title }}</h3>
            <div>{{ news.description }}</div>
          </div>
        </v-card-title>
      <v-card-actions>
        {{ news.publishedAt }}
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>favorite</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>bookmark</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>share</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
</a>
</template>

<script>
export default {
  props: {
    news: [Array, Object, String]
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
