<template>
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

                <v-btn
                    dark
                    class="cyan"
                    :to="{
                        name: 'song-edit',
                        params() {
                            return {
                                songId: song.id
                            }
                        }
                    }">
                    Edit
                </v-btn>
            </v-flex>
            
            <v-flex xs6>
                <img :src="song.albumImageUrl" class="album-image">
                {{song.album}}
            </v-flex>
        </v-layout>
    </panel>
</template>

<script>
import SongsService from '@/services/songsService'
export default {
    props: [
        'song'
    ],
    methods: {
        navigateTo(route){
            this.$router.push(route)
        }
    },
    async mounted(){
        //   request backend data
        this.songs = (await SongsService.edit()).data
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
