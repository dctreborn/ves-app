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
          <div v-for="song in songs" class="song" :key="song.id">

              <v-layout>
                  <v-flex xs6>
                    <div class="song-title">
                        {{song.title}}
                    </div>
                    <div class="song-artist">
                        {{song.artist}}
                    </div>
                    <div class="song-genre">
                        {{song.genre}}
                    </div>

                    <v-btn
                        dark
                        class="cyan"
                        @click="navigateTo({name: 'song', params: {songId: song.id}})"
                    >
                        View
                    </v-btn>

                  </v-flex>
                  <v-flex xs6>
                      <img :src="song.albumImageUrl" class="album-image">
                  </v-flex>
              </v-layout>
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

.song-tigenretle {
    font-size: 18;
}

.album-image {
    width: 100%;
}
</style>
