const mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
    name: String,
    price: Number,
});

mongoose.model('Item', itemSchema);
