const passport = require('passport');

module.exports = app => {

    app.get('/auth/google', passport.authenticate('google', {
        // We could ask for other things, like a users contact list or images from google account. 
        scope: ['profile', 'email']
    }));

    app.get(
        '/auth/google/callback',
         passport.authenticate('google'),
        (req, res) => {
            res.redirect('/items');
            }
         );

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
    
    //app.get('/api/items', (req, res) => {
      //  res.send('Hello World');
    //});


};