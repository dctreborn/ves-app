import api from './api'

export default {
    index(params) {
        return api().get('histories', {
            params: params
        })
    },

    post(history) {
        return api().post('histories', history)
    }
}