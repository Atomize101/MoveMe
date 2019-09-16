const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys')

mongoose.connect(keys.mongoURI);

var itemSchema = new mongoose.Schema({
    name: String,
    price: Number,
});

var Item = mongoose.model('Item', itemSchema);

var firstItem = new Item({
    name: 'Television',
    price: 200
});

firstItem.save(function(err, firstItem) {
    if(err) {
        console.log('Something Went wrong');
    } else {
        console.log('First Item was saved');
        console.log(firstItem);
    }
});