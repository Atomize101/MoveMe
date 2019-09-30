const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('api/items', requireLogin, (req, res) => {
        // Make sure user is logged in first.
    });
};