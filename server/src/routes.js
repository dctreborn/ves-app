const AuthenticationController = require('./controllers/AuthenticationController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports  = (app) => {
    app.post('/register',        
        // policy must be first for validation
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)
}
