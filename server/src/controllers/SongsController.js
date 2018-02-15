const {Song} = require('../models')

module.exports = {
    async index (req, res) {
        try {
            const songs = Song.findAll({
                limit: 10
            })
            res.send(songs)
        } catch (err) {
            res.status(500).send({
                error: 'An error occured fetching songs'
            })
        }
    },
    async post(req, res) {
        try {
            const song = Song.create(req.body)
            res.send(song)
        } catch (err) {
            res.status(500).send({
                error: 'An error occured creating songs'
            })
        }
    }
}