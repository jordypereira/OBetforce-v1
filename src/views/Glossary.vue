<template>
  <v-container>
    <v-layout>
      <v-flex xs12 class="headline">
        <div class="d-inline" v-for="letter in letters" :key="letter">
          <a href="#">{{ letter }}</a> |
        </div>
      </v-flex>
    </v-layout>
    <div v-for="letter in letters" :key="letter" :id="letter">
      <v-layout>
        <v-flex lg6 offset-lg3 class="headline primary--text">{{ letter }}</v-flex>
      </v-layout>
      <v-layout>
        <v-flex lg6 offset-lg3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </v-flex>
      </v-layout>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    }
  }
}
</script>
