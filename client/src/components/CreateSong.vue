<template>
<v-layout>
    <v-flex xs4>
        <panel title="Song Metadata">                
            <v-text-field
                label="Title"
                required
                :rules="[required]"
                v-model="song.title"
            ></v-text-field>

            <v-text-field
                label="Artist"
                required
                :rules="[required]"
                v-model="song.artist"
            ></v-text-field>

            <v-text-field
                label="Genre"
                required
                :rules="[required]"
                v-model="song.genre"
            ></v-text-field>

            <v-text-field
                label="Album"
                required
                :rules="[required]"
                v-model="song.album"
            ></v-text-field>

            <v-text-field
                label="Image URL"
                required
                :rules="[required]"
                v-model="song.albumImageUrl"
            ></v-text-field>

            <v-text-field
                label="Youtube ID"
                required
                :rules="[required]"
                v-model="song.youtubeId"
            ></v-text-field>
                 
        </panel>
        </v-flex>
        
        <v-flex xs8>
            <panel title="Song Structure" class="ml-2">            
                <v-text-field
                    label="Lyrics"
                    multi-line
                    required
                    :rules="[required]"
                    v-model="song.lyrics"
                ></v-text-field>

                <v-text-field
                    label="Tab"
                    multi-line
                    required
                    :rules="[required]"
                    v-model="song.tab"
                ></v-text-field>  
            </panel>
            
            <div class="danger-alert" v-if="error">
                {{error}}
            </div>
            <v-btn class="cyan" @click="create">Create Song</v-btn>
        </v-flex>    
  </v-layout>
</template>

<script>
import songsService from '@/services/songsService'
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
        },
        required: (value) => !!value || 'Required',
        error: null
      }
  },
  methods: {
      async create(){
            this.error = null
            const allFieldsFilled = Object
                .keys(this.song)
                .every(key => !!this.song[key])
            if (!allFieldsFilled) {
                this.error = 'Please fill in all the required fields'
                return
            } 
        try {
            await songsService.post(this.song)
            this.$router.push({
                path: "/songs"
            })
        } catch (err) {
            console.log(err)
        }
        
      }
  }
}
</script>

<style scoped>

</style>
