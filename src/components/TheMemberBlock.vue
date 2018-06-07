<template>
  <div class="members">
    <v-layout row wrap>
      <v-flex xs12>
        <v-form v-model="valid">
          <v-layout row wrap>
            <v-flex xs4>
              <v-text-field label="Username" v-model="username" :rules="usernameRules" required></v-text-field>
            </v-flex>
            <v-flex xs4>
              <v-text-field label="Password" v-model="password" :rules="passwordRules" type="password" required></v-text-field>
            </v-flex>
            <v-flex xs4>
              <v-btn color="primary">Sign in</v-btn>
            </v-flex>
          </v-layout>
        </v-form>
        <!-- <p>New here?
          <router-link to="/register">Register an account!</router-link>
        </p> -->
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null,
      usernameRules: ['required'],
      passwordRules: ['required'],
      valid: false
    }
  }
}
</script>

<style scoped>
.members {
  /* padding: 5px 15px; */
}
</style>
