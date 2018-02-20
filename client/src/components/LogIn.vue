<template>
  <panel title="Login">
    <v-text-field
      name="email"
      box
      label="Email"
      placeholder="email"
      v-model="email"
    ></v-text-field>
    <br>
    <v-text-field
        name="password"
        label="Password"
        type="password"
        box
        placeholder="password"
        v-model="password"
      ></v-text-field>
      <br>
      <div class="danger-alert" v-html="error"/>
      <v-btn class="cyan" @click="login">Log In</v-btn>
  </panel>

</template>

<script>
import authenticationService from '@/services/authenticationService'

export default {
  data() {
      return {
          email: '',
          password: '',
          error: null
      }
  },
  methods: {
    async login(){
      try {
        const response = await authenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>

</style>
