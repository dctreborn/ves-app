<template>
    <div>
        <v-layout>
            <v-flex xs6>
                <song-metadata :song="song"/>
            </v-flex>
            

            <v-flex xs6 class="ml-2">
                <panel title="Tabs">
                    <textarea
                        readonly
                        label="Tab"
                        v-model="song.tab"
                    ></textarea>  
                </panel>
            </v-flex>
        </v-layout>    

        <v-layout>
            <v-flex xs6>
                <panel title="Youtube">
                    {{song.youtubeId}}
                </panel>
            </v-flex>

            <v-flex xs6>
                <panel title="Lyrics">
                    {{song.lyrics}}
                </panel>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import SongMetadata from '../ViewSong/SongMetaData'
import songsService from '@/services/songsService'
import Panel from '@/components/Panel'
export default {
    data(){
        return {
            song: {}
        }
    },    
    async mounted(){
        const songId = this.$store.state.route.params.songId
        this.song = (await songsService.show(songId)).data
    },
    components: {
        Panel,
        SongMetadata
    }
}
</script>

<style scoped>
textarea {
    width: 80%;
    font-family: monospace;
    border: none;
    height: 600px;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 20px;
}
</style>
