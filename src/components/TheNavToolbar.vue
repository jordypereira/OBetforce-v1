<template>
  <v-toolbar app clipped-left dark>
    <v-toolbar-side-icon @click.stop="$store.state.drawer = !$store.state.drawer" class="hidden-lg-and-up"></v-toolbar-side-icon>
    <v-toolbar-title to="/" router>{{ this.$store.state.shared.sitename }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <the-member-block></the-member-block>
    </v-toolbar-items>
    <v-toolbar-side-icon @click.stop="$store.state.betslipdrawer = !$store.state.betslipdrawer"></v-toolbar-side-icon>
  </v-toolbar>
</template>

<script>
import TheMemberBlock from '@/components/TheMemberBlock'

export default {
  components: {
    TheMemberBlock
  },
  name: 'NavToolbar'
}
</script>
