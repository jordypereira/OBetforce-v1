<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app clipped dark>
      <v-list dense>
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
    <v-toolbar app clipped-left dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-lg-and-up"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title" to="/"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <member-block></member-block>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer app>
      <span></span>
    </v-footer>
  </v-app>
</template>

<script>
import MemberBlock from '@/components/TheMemberBlock'

export default {
  components: {
    MemberBlock
  },
  data() {
    return {
      drawer: true,
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
      ],
      title: 'OBetforce'
    }
  },
  name: 'App'
}
</script>
