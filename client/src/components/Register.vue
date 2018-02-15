<template>
  <panel title="Register">
    <slot>
      <form name="tab-tracker-form" autocomplete="off">
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
                aria-autocomplete="new-password"
                box
                placeholder="password"
                v-model="password"
              ></v-text-field>
            </form>
          <br>
          <div class="error" v-html="error"/>
          <v-btn class="cyan" @click="register">Register</v-btn>
    </slot>
  </panel>

</template>

<script>
import authenticationService from '@/services/authenticationService'
import Panel from '@/components/Panel'

export default {
  data() {
      return {
          email: '',
          password: '',
          error: null
      }
  },
  components: {
      Panel
  },
  methods: {
    async register(){
      try {
        const response = await authenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
  .error {
    color: red;
  }
</style>
