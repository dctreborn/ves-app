<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
            <v-btn class="cyan accent-2"
                slot="action"
                @click="navigateTo({path: '/songs/create'})"
                light
                medium
                absolute
                right
                middle
                fab>
                <v-icon>+</v-icon>
            </v-btn>
          <div v-for="song in songs" :key="song.id">
              {{song.title}} - 
              {{song.artist}} - 
              {{song.album}}
          </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/songsService'
import Panel from '@/components/Panel'
export default {
  components: {
      Panel
  },
  data (){
      return {
          songs: []
      }
  },
  methods: {
      navigateTo(route){
          this.$router.push(route)
      }
  },
  async mounted(){
    //   request backend data
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>

</style>
