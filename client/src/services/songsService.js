import api from './api'

export default {
    index(credentials) {
        return api().get('songs')
    }
}