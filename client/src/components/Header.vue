<template>
    <v-toolbar dark fixed class="cyan">
        <v-toolbar-title class="mr-4">
            <router-link to="/">
                Tab Tracker
            </router-link>
        </v-toolbar-title>

        <v-toolbar-items>
            <v-btn flat dark>
                Browser
            </v-btn>
        </v-toolbar-items>

        <v-spacer/>

        <v-toolbar-items>
            <router-link to="/login">
                <v-btn v-if="!$store.state.isUserLoggedIn" flat dark>
                    Login                
                </v-btn>
            </router-link>
            
            <router-link to="/register">
                <v-btn v-if="!$store.state.isUserLoggedIn" flat dark>                    
                    Sign Up                
                </v-btn>
            </router-link>

             <router-link to="/">
                <v-btn v-if="$store.state.isUserLoggedIn" @click="logout" flat dark>                    
                    Log Out                
                </v-btn>
            </router-link>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  methods: {
      logout() {
          this.$store.dispatch('setToken', null)
          this.$store.dispatch('setUser', null)
      }
  }
}
</script>

<style scoped>

</style>
