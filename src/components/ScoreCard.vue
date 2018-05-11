<template>
  <v-card  class="subject">
    <v-card-media :src="subject.img" :alt="subject.name" :height="imageHeight" contain>
    </v-card-media>
    <v-card-title v-if="subject.matches" primary-title>
        <div v-for="(match,i) in subject.matches" :key="i" class="match">
          <div class="match-league">{{ match.league }}</div>
          <div class="match-scoreboard secondary white--text">
            <div class="match-team">
              {{ match.homeTeam }}
            </div>
            <div class="match-score primary">
              {{ match.homeScore }} - {{ match.awayScore }}
            </div>
            <div class="match-team">
              {{ match.awayTeam }}
            </div>
          </div>
        </div>
    </v-card-title>
    <v-card-title v-if="subject.news" primary-title>
        <div v-for="(newsItem,i) in subject.news" :key="i" class="newsItem">
          <img :src="newsItem.img" alt="News Image" contain>
          <div class="newsItem-content" :to="newsItem.link">
            <div class="newsItem-title">
              {{ newsItem.title }}
            </div>
            <div class="newsItem-date primary--text">
              {{ newsItem.date }}
            </div>
          </div>
        </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat color="primary">Explore</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    subject: Object,
  },
  computed: {
    imageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '150px';
        default:
          return '200px';
      }
    },
  },
};
</script>
<style scoped>
.subject {
  width: 300px;
  margin: 0 auto 25px;
}
.match {
  width: 100%;
  margin: 10px 0;
}
.match-league {
  font-size: 1.1rem;
}
.match-scoreboard {
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  width: 100%;
}
.match-scoreboard > * {
  text-align: center;
  padding: 10px;
  align-self: center;
}
.match-score {
  flex: 1 1 20%;
  height: inherit;
}
.match-team {
  flex: 1 1 40%;
}
.newsItem {
  display: flex;
  padding: 10px;
}
.newsItem > img {
  max-height: 50px;
}
.newsItem-content {
  padding: 0 10px;
}

@media (min-width: 600px) {
  .subject {
    width: 400px;
  }
}
</style>