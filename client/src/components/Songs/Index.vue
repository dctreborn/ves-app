<template>
  <v-layout column>
    <v-flex>
        <song-bookmarks/>
    </v-flex>
    <v-flex xs6>
        <songs-search-panel/>
        <songs-panel class="mt-2"/>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import SongsService from '@/services/songsService'
export default {
  components: {
      SongsPanel,
      SongsSearchPanel
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
.song {
    padding: 20px;
    height: 330px;
    overflow: hidden;
}

.song-title {
    font-size: 30px;
}

.song-artist {
    font-size: 24;
}

.song-genre {
    font-size: 18;
}

.album-image {
    width: 100%;
}
</style>
