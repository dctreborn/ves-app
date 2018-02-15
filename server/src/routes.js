const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./policies/SongsController')

module.exports  = (app) => {
    app.post('/register',        
        // policy must be first for validation
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)

    app.post('/login',
        AuthenticationController.login)

    app.post('/songs',
        SongsController.index)
}
