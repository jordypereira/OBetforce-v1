<template>
  <v-layout>
    <v-flex xs12 align-center justify-center d-flex>
      <v-form ref="loginForm" v-model="valid" v-if="!isLoggedIn && !pending" lazy-validation>
        <v-layout row>
          <v-flex xs4 class="px-1" align-center d-flex>
            <v-text-field label="Email" v-model="email" :rules="emailRules" solo required></v-text-field>
          </v-flex>
          <v-flex xs4 class="px-1" align-center d-flex>
            <v-text-field label="Password" v-model="password" :rules="passwordRules" type="password" solo required></v-text-field>
          </v-flex>
          <v-flex xs4 class="px-1" align-center d-flex>
            <v-btn :disabled="!valid" color="primary" @click="login">Sign in</v-btn>
          </v-flex>
        </v-layout>
      </v-form>
      <a v-if="pending">Logging user in..</a>
      <a v-if="isLoggedIn" @click="logout" class="hidden-xs-only">{{ userEmail }}, Logout</a>
    </v-flex>
  </v-layout>
  <!-- <p>New here?
          <router-link to="/register">Register an account!</router-link>
        </p> -->
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be at least 6 characters'
      ],
      valid: true
    }
  },
  methods: {
    logout() {
     this.$store.dispatch('authentication/logout');
    },
    login() {
      if (this.$refs.loginForm.validate()) {
      this.$store.dispatch('authentication/login', {
        email: this.email,
        password: this.password
      });
      }
    }
  },
  computed: {
    ...mapState({
      isLoggedIn: state => state.authentication.isLoggedIn,
      pending: state => state.authentication.pending,
      userEmail: state => state.authentication.username,
  })
  }
}
</script>

<style scoped>
.v-input__slot {
  margin-bottom: 0;
}
</style>
