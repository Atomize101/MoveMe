const mongoose = require('mongoose');
const { Schema } = mongoose;

var itemSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    dateAdded: Date
});

mongoose.model('items', itemSchema);

