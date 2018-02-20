import api from './api'

export default {
    index(bookmark) {
        return api().get('bookmarks', {
            params: {
                params: bookmark
            }
        })
    },

    post(bookmark) {
        return api().post('bookmarks', {
            params: {
                params: bookmark
            }
        })
    },

    delete(bookmarkId) {
        return api().delete(`bookmarks/${bookmarkId}`)
    }
}