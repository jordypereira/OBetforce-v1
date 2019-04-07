<template>
  <v-container grid-list-md>
    <v-responsive height="350px" class="my-2 px-5" v-if="!isLoggedIn">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex>
            <h3 :class="displayMobile">Welcome to {{ this.$store.state.shared.sitename }}</h3>
            <span class="subheading">On this website you will be able to prove how good you are.</span>
            <v-divider class="my-3"></v-divider>
            <div class="title mb-3">Get started right away!</div>
            <v-btn large color="primary" class="mx-0" @click="dialog = true">Register</v-btn>
            <v-dialog v-model="dialog" max-width="600px">
              <v-card dark>
                <v-card-title class="headline">Register for OBetforce</v-card-title>
                <v-card-text>
                  <register-form></register-form>
                </v-card-text>
                <v-card-actions>
                  <a href="" color="primary darken-1" flat>Read our privacy statement</a>
                  <v-spacer></v-spacer>
                  <v-btn color="primary darken-1" flat="flat" @click="dialog = false">
                    Cancel
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <!-- <v-btn large color="primary" class="mx-0 ml-4">Login</v-btn> -->
          </v-flex>
        </v-layout>
      </v-container>
    </v-responsive>
    <v-layout row wrap>
      <v-flex v-for="(subject, i) in subjects" :key="i">
        <score-card :subject="subject" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import liveImage from '@/assets/images/live_score.jpg'
import fixtureImage from '@/assets/images/fixture.jpg'
import newsImage from '@/assets/images/news_section.jpg'
import ScoreCard from '@/components/ScoreCard'
import RegisterForm from '@/components/RegisterForm'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    ScoreCard,
    RegisterForm
  },
  computed: {
    ...mapState({
      isLoggedIn: state => state.authentication.isLoggedIn
    }),
    displayMobile () {
      if (this.$vuetify.breakpoint.xs) {
        return 'headline'
      } else {
        return 'display-3'
      }
    }
  },
  data () {
    return {
      dialog: false,
      subjects: [
        {
          name: 'Live',
          link: 'livescore',
          img: liveImage,
          matches: [
            {
              league: 'England - League One',
              homeTeam: 'Oxford United',
              awayTeam: 'Scunthorpe United',
              homeScore: 1,
              awayScore: 1
            },
            {
              league: 'England - League One',
              homeTeam: 'Millwall',
              awayTeam: 'Nottingham Forest',
              homeScore: 2,
              awayScore: 0
            }
          ]
        },
        {
          name: 'Fixture',
          link: 'fixtures',
          img: fixtureImage,
          matches: [
            {
              league: 'England - League One',
              homeTeam: 'Oxford United',
              awayTeam: 'Scunthorpe United',
              homeScore: 1,
              awayScore: 1
            },
            {
              league: 'England - League One',
              homeTeam: 'Millwall',
              awayTeam: 'Nottingham Forest',
              homeScore: 2,
              awayScore: 0
            }
          ]
        },
        {
          name: 'Scores',
          link: 'fixtures',
          img: fixtureImage,
          matches: [
            {
              league: 'England - League One',
              homeTeam: 'Oxford United',
              awayTeam: 'Scunthorpe United',
              homeScore: 1,
              awayScore: 1
            },
            {
              league: 'England - League One',
              homeTeam: 'Millwall',
              awayTeam: 'Nottingham Forest',
              homeScore: 2,
              awayScore: 0
            }
          ]
        },
        {
          name: 'News',
          link: 'newsfeed',
          img: newsImage,
          news: [
            {
              img:
                'http://cdn.livesoccertv.com/tt/images/articles/25692-isco-argentina-goal.jpg&w=240',
              title:
                'Zidane addresses the Isco exit rumors ahead of Las Palmas trip',
              link: '/',
              date: '2018-03-30 08:37:53'
            },
            {
              img:
                'http://cdn.livesoccertv.com/tt/images/articles/25691-messi-spain-loss.jpg&w=240',
              title:
                'Messi’s dressing-room message after Argentina’s 6-1 Spain loss',
              link: '/',
              date: '2018-03-30 06:12:23'
            }
          ]
        }
      ]
    }
  }
}
</script>
