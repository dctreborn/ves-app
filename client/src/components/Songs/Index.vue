<template>
  <v-layout>
    <v-flex xs6 v-if="isUserLoggedIn">
        <song-bookmarks/>
        <recently-viewed-songs class="mt-2"/>
    </v-flex>
    <v-flex xs6 class="ml-2">
        <songs-search-panel/>
        <songs-panel class="mt-2"/>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import SongBookmarks from './SongBookmarks'
import RecentlyViewedSongs from './RecentlyViewedSongs'
import SongsService from '@/services/songsService'
import {mapState} from 'vuex'
export default {
  components: {
      SongsPanel,
      SongsSearchPanel,
      SongBookmarks,
      RecentlyViewedSongs
  },
  computed: {
      ...mapState([
          'isUserLoggedIn'
      ])
  },
  data (){
      return {
          songs: null
      }
  },
  async mounted(){
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
