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
                <v-btn flat dark>
                    Login                
                </v-btn>
            </router-link>
            
            <router-link to="/register">
                <v-btn flat dark>                    
                    Sign Up                
                </v-btn>
            </router-link>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>
