const { Bookmark, Song } = require('../models')

module.exports = {
    async index(req, res) {
        try {
            const {songId, userId} = req.query

            const bookmark = await Bookmark.findOne({
                where: {
                    SongId: songId,
                    UserId: userId
                }
            })
            res.send(bookmark)
        } catch (err) {
            res.status(500).send({
                error: 'An error occured fetching bookmark'
            })
        }
    },

    async post(req, res) {
        try {
            const {songId, userId} = req.body
            const bookmark = await Bookmark.findOne({
                where: {
                    SongId: songId,
                    UserId: userId
                }
            })
            console.log('bookmark data', bookmark)
            if(bookmark) {
                return res.status(400).send({
                    error: 'you already have this bookmarked'
                })
            }

            const newBookmark = await Bookmark.create({
                SongId: songId,
                UserId: userId
            })
            res.send(newBookmark)
        } catch (err) {
            res.status(500).send({
                error: 'An error occured creating bookmark'
            })
        }
    },

    async delete(req, res) {
        try {
            const { bookmarkId } = req.query

            const bookmark = await Bookmark.findById(bookmarkId)
            await bookmark.destroy()
            res.send(bookmark)
        } catch (err) {
            res.status(500).send({
                error: 'An error occured deleting bookmark'
            })
        }
    }
}