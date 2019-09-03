const passport = require('passport');

module.exports = app => {

    app.get('/auth/google', passport.authenticate('google', {
        // We could ask for other things, like a users contact list or images from google account. 
        scope: ['profile', 'email']
    }));

    app.get('/auth/google/callback', passport.authenticate('google'));

};