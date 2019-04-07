<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field v-model="name" :rules="nameRules" :counter="24" label="Name" required></v-text-field>
    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
    <v-text-field
    v-model="password"
    :append-icon="showPassword ? 'visibility_off' : 'visibility'"
    :rules="[rules.required, rules.min]"
    :type="showPassword ? 'text' : 'password'"
    label="Password"
    hint="At least 8 characters"
    counter
    @click:append="showPassword = !showPassword">
    </v-text-field>
    <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree with our privacy statement?" required></v-checkbox>

    <v-btn :disabled="!valid" @click="submit">
      submit
    </v-btn>
  </v-form>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    valid: true,
    name: 'Testing2',
    email: 'test@test2',
    password: '123456789',
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => ('The email and password you entered don\'t match')
    },
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 24) || 'Name must be less than 24 characters'
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    showPassword: false,
    checkbox: true
  }),

  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('authentication/register', {
          name: this.name,
          email: this.email,
          password: this.password
        })
      }
    }
  },
  computed: {
    ...mapState({
      isLoggedIn: state => state.authentication.isLoggedIn,
      pending: state => state.authentication.pending,
      userEmail: state => state.authentication.username,
      authError: state => state.authentication.authError
    })
  }
}
</script>

<style>
</style>
