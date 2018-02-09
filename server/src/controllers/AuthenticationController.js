module.exports = {
    register (req, res) {
        res.send({
            message: `User registered! ${req.body.email}`
        })
    }
}