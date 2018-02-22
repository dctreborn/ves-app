<template>
  <panel title="Bookmarks">
      <v-data-table
        :headers="headers"
        :pagination.sync="pagination"
        :items="bookmarks">        
        <template slot="items" slot-scope="props">
            <td class="text-xs-right">
                {{props.item.title}}
            </td>
            <td class="text-xs-right">
                {{props.item.artist}}
            </td>
        </template>
      </v-data-table>
  </panel>
</template>

<script>
import {mapState} from 'vuex'
import bookmarksService from '@/services/bookmarksService'
export default {
    data() {
        return {
            headers: [
                {
                    text: 'Title',
                    value: 'title'
                },
                {
                    text: 'Artist',
                    value: 'artist'
                },
            ],
            pagination: {
                sortBy: 'data',
                descending: true
            },
            bookmarks: [
                {
                    title: 'hello world',
                    artist: 'Testing'
                },
                {
                    title: 'hello world',
                    artist: 'Testing'
                }
            ]
        }
    },
    computed: {
        ...mapState([
            'isUserLoggedIn'
        ])
    },
    async mounted(){
        if (this.isUserLoggedIn) {
            this.bookmarks = (await BookmarksService.index({
                userId: this.$store.state.user.id
            }))
        }
    }
}
</script>

<style>

</style>
