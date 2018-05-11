<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app clipped>
      <v-list>
        <member-block></member-block>
        <v-list-tile value="true" v-for="(item, i) in items" :key="i" :to="item.to">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
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
import MemberBlock from '@/components/TheMemberBlock';

export default {
  components: {
    MemberBlock,
  },
  data() {
    return {
      drawer: true,
      items: [
        {
          icon: 'bubble_chart',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'bubble_chart',
          title: 'Live Score',
          to: '/livescore',
        },
      ],
      title: 'OBetforce',
    };
  },
  name: 'App',
};
</script>
