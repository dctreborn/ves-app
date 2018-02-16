<template>
    <div>
        <v-layout>
            <v-flex xs6>
                <song-metadata :song="song"/>
            </v-flex>

            <v-flex xs6 class="ml-2">
                <you-tube :youtubeId="song.youtubeId"/>
            </v-flex>
        </v-layout>

        <v-layout>
            <v-flex xs6 class="mt-2">
                <tab :song="song"/>
            </v-flex>

            <v-flex xs6 class="ml-2 mt-2">
                <lyrics :song="song"/>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import SongMetadata from '../ViewSong/SongMetaData'
import YouTube from '../ViewSong/YouTube'
import Lyrics from '../ViewSong/Lyrics'
import Tab from '../ViewSong/Tab'
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
        SongMetadata,
        YouTube,
        Lyrics,
        Tab
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
