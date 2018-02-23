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
                    v-if="isUserLoggedIn && !bookmark"
                    dark
                    class="cyan"
                    @click="setAsBookmark"
                >
                    Bookmark
                </v-btn>

                <v-btn
                    v-if="isUserLoggedIn && bookmark"
                    dark
                    class="cyan"
                    @click="unsetAsBookmark"
                >
                    Unset Bookmark
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
            bookmark: null
        }
    },
    computed: {
        ...mapState([
            'isUserLoggedIn',
            'user'
        ])
    },
    watch: {
        async song (){
            if(!this.isUserLoggedIn){
                return
            }
            
            try {
                const bookmarks = (await bookmarksService.index({
                    songId: this.song.id,
                    userId: this.user.id
                })).data
                if(bookmarks.length){
                    this.bookmark = bookmarks[0]
                }
            } catch (err) {
                console.log(err)
            }
            
        }
    },
    methods: {
        async setAsBookmark(){
            try {
                this.bookmark = (await bookmarksService.post({
                    songId: this.song.id,
                    userId: this.user.id
                })).data
            } catch (err) {
                console.log(err)
            }
        },
        async unsetAsBookmark(){
            try {
                await bookmarksService.delete({
                    bookmarkId: this.bookmark.id,
                    userId: this.user.id
                })
                this.bookmark = null
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
