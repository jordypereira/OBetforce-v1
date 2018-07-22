<template>
  <v-navigation-drawer v-model="$store.state.drawer" fixed app clipped dark>
    <v-list dense>
      <v-list-tile v-if="isLoggedIn" @click="logout" class="hidden-sm-and-up" value="true">
        <v-list-tile-action>
          <v-icon>exit_to_app</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>
            Logout
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile value="true" to="/">
        <v-list-tile-action>
          <v-icon>play_arrow</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-subheader>Matches</v-subheader>
      <v-list-tile value="true" v-for="item  in navMatches" :key="item.title" :to="item.to">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>
      <v-subheader>Game</v-subheader>
      <v-list-tile value="true" v-for="item in navGame" :key="item.title" :to="item.to">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>
      <v-subheader>Discover</v-subheader>
      <v-list-tile value="true" v-for="item in navDiscover" :key="item.title" :to="item.to">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>
      <v-subheader>More</v-subheader>
      <v-list-tile value="true" v-for="item in navMore" :key="item.title" :to="item.to">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      navMatches: [
        {
          icon: 'play_arrow',
          title: 'Live Score',
          to: '/livescore'
        },
        {
          icon: 'play_arrow',
          title: 'Fixtures',
          to: '/fixtures'
        }
      ],
      navGame: [
        {
          icon: 'play_arrow',
          title: 'Obetforce',
          to: '/obetforce'
        },
        {
          icon: 'play_arrow',
          title: 'Betslips',
          to: '/betslips'
        },
        {
          icon: 'play_arrow',
          title: 'OBonus',
          to: '/obonus'
        },
        {
          icon: 'play_arrow',
          title: 'News Feed',
          to: '/newsfeed'
        }
      ],
      navDiscover: [
        {
          icon: 'play_arrow',
          title: 'Challenges',
          to: '/challenges'
        },
        {
          icon: 'play_arrow',
          title: 'Persons',
          to: '/persons'
        },
        {
          icon: 'play_arrow',
          title: 'Groups',
          to: '/groups'
        }
      ],
      navMore: [
        {
          icon: 'play_arrow',
          title: 'Help',
          to: '/help'
        },
        {
          icon: 'play_arrow',
          title: 'Glossary',
          to: '/glossary'
        },
        {
          icon: 'play_arrow',
          title: 'Tutorial',
          to: '/tutorial'
        }
      ]
    }
  },
  name: 'NavDrawer',
  methods: {
    logout() {
     this.$store.dispatch('authentication/logout');
    },
  },
  computed: {
    ...mapState({
      isLoggedIn: state => state.authentication.isLoggedIn,
      userEmail: state => state.authentication.username,
  })
  }
}
</script>

<style scoped>
.v-navigation-drawer {
  padding: 0;
}
</style>
