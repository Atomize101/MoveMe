const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Item = mongoose.model('items');

module.exports = app => {
    app.post('/api/items', (req, res) => {
        const name = req.body.name;
        const description = req.body.description;
        const price = req.body.price;
        //const dateAdded = Date.parse(req.body.dateAdded);
        //const _user = req.user.id;

        const item = new Item({
            name,
            description,
            price,
            //dateAdded
            //_user
    });
    item.save()
        .then(() => res.json('Item Added')
        .catch(err => res.status(400).json('Error: ' + err)));
    });
}


module.exports = app => {
    app.get('/api/items', (req, res) => {
        Item.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: ' + err));
    })
};

//const Item = mongoose.model('items');

//module.exports = app => {
  //  app.post('api/items', requireLogin, (req, res) => {
    //    // Make sure user is logged in first.
      //  const { name, description, price } = req.body;

        //const item = new Item({
          //  name: name,
            //description: description,
            //price: price,
            //_user: req.user.id,
            //dateAdded: Date.now()
        //})
    //});
//};