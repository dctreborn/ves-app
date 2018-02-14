<template>
    <v-toolbar dark fixed class="cyan">
        <v-toolbar-title class="mr-4">
            Tab Tracker
        </v-toolbar-title>

        <v-toolbar-items>
            <v-btn flat dark>
                Browser
            </v-btn>
        </v-toolbar-items>

        <v-spacer/>

        <v-toolbar-items>
            <router-link to="register">
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
