<template>
    <v-layout>
        <v-flex xs6>
            <panel title="Song Data">
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
                    </v-flex>
                    
                    <v-flex xs6>
                        <img :src="song.albumImageUrl" class="album-image">
                        {{song.album}}
                    </v-flex>
                </v-layout>
            </panel>
        </v-flex>

        <v-flex xs6 class="ml-2">
            <panel title="Tabs">
                {{song.tab}}
            </panel>
        </v-flex>
    </v-layout>    
</template>

<script>
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
        Panel
    }
}
</script>

<style scoped>
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
