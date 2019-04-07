<template>
  <v-toolbar app clipped-left dark>
    <v-toolbar-side-icon @click.stop="$store.state.drawer = !$store.state.drawer" class="hidden-lg-and-up"></v-toolbar-side-icon>
    <v-toolbar-title v-if="mobileAndLoggedOut">
      {{ this.$store.state.shared.sitename }}
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <the-member-block></the-member-block>
    </v-toolbar-items>
    <v-toolbar-side-icon @click.stop="$store.state.betslipdrawer = !$store.state.betslipdrawer" v-if="isLoggedIn" />
  </v-toolbar>
</template>

<script>
import TheMemberBlock from '@/components/TheMemberBlock'
import { mapState } from 'vuex'

export default {
  components: {
    TheMemberBlock
  },
  computed: {
    ...mapState({
      isLoggedIn: state => state.authentication.isLoggedIn
    }),
    mobileAndLoggedOut () {
      if (this.$vuetify.breakpoint.smAndDown) {
        if (!this.isLoggedIn) {
          return false
        }
        return true
      }
      return true
    }
  },
  name: 'NavToolbar'
}
</script>
