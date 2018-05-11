<template>
  <div class="members">
    <h2>Member's Area</h2>
    <v-form v-model="valid">
      <v-text-field label="Username" v-model="username" :rules="usernameRules" required></v-text-field>
      <v-text-field label="Password" v-model="password" :rules="passwordRules" type="password" required></v-text-field>
      <v-btn color="primary">Sign in</v-btn>
    </v-form>
    <p>New here?
      <router-link to="/register">Register an account!</router-link>
    </p>
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
      valid: false,
    };
  },
};
</script>

<style scoped>
.members {
  padding: 5px 15px;
}
</style>
