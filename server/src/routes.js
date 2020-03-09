const AuthenticationController = require('./controllers/AuthenticationController');

const AuthenticationControllerPolicy = require('./polices/AuthenticationControllerPolicy');
module.exports = (app) => {
    app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
}
