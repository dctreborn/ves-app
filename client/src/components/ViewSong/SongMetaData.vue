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

                <v-btn
                    v-if="isUserLoggedIn && !isBookmarked"
                    dark
                    class="cyan"
                    @click="bookmark"
                >
                    Bookmark
                </v-btn>

                <v-btn
                    v-if="isUserLoggedIn && isBookmarked"
                    dark
                    class="cyan"
                    @click="unbookmark"
                >
                    Unbookmark
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
import {mapState} from 'vuex'
import bookmarksService from '@/services/bookmarksService'

export default {
    props: [
        'song'
    ],
    data(){
        return {
            isBookmarked: false
        }
    },
    computed: {
        ...mapState([
            'isUserLoggedIn'
        ])
    },
    async mounted (){
        if(!this.isUserLoggedIn){
            return
        }
        
        try {
            const bookmark = (await bookmarksService.index({
                songId: this.song.id,
                userId: this.$store.state.user.id   
            })).data
            this.isBookmarked = !!bookmark
        } catch (err) {
            console.log(err)
        }
        
    },
    methods: {
        async bookmark(){
            try {
                await bookmarksService.post({
                    songId: this.song.id,
                    userId: this.$store.state.user.id   
                })
            } catch (err) {
                console.log(err)
            }
        },
        async unbookmark(){
            try {
                await bookmarksService.delete({
                    songId: this.song.id,
                    userId: this.$store.state.user.id   
                })
            } catch (err) {
                console.log(err)
            }
        }
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
