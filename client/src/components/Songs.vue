<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
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
  async mounted(){
    //   request backend data
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>

</style>
