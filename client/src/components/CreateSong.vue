<template>
<v-layout>
    <v-flex xs4>
        <panel title="Song Metadata">                
            <v-text-field
                label="Title"
                v-model="song.title"
            ></v-text-field>

            <v-text-field
                label="Artist"
                v-model="song.artist"
            ></v-text-field>

            <v-text-field
                label="Genre"
                v-model="song.genre"
            ></v-text-field>

            <v-text-field
                label="Album"
                v-model="song.album"
            ></v-text-field>

            <v-text-field
                label="Image URL"
                v-model="song.albumImageUrl"
            ></v-text-field>

            <v-text-field
                label="Youtube ID"
                v-model="song.youtubeId"
            ></v-text-field>
                 
        </panel>
        </v-flex>
        
        <v-flex xs8>
            <panel title="Song Structure" class="ml-2">            
                <v-text-field
                    label="Lyrics"
                    multi-line
                    v-model="song.lyrics"
                ></v-text-field>

                <v-text-field
                    label="Tab"
                    multi-line
                    v-model="song.tab"
                ></v-text-field>  
            </panel>

            <router-link to="/songs">
                <v-btn class="cyan" @click="create">Create Song</v-btn>
            </router-link>
        </v-flex>    
  </v-layout>
</template>

<script>
import songsService from '@/services/songsService'
import Panel from '@/components/Panel'
export default {
  data(){
      return {
        song: {
            title: null,
            artist: null,
            genre: null,
            album: null,
            albumImageUrl: null,
            youtubeId: null,
            lyrics: null,
            tab: null
        }
      }
  },
  methods: {
      async create(){
        try {
            await songsService.post(this.song)
        } catch (err) {
            console.log(err)
        }
        
      }
  },
  components: {
      Panel
  }
}
</script>

<style scoped>

</style>
