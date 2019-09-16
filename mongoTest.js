const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys')

// This connects to  my Cloud Mongo DB
mongoose.connect(keys.mongoURI);

// This creates a new Schema 
var itemSchema = new mongoose.Schema({
    name: String,
    price: Number,
});

// This creates a variable saved to the mode for my Schema
var Item = mongoose.model('Item', itemSchema);

// This will be the first item saved to the Schema

var firstItem = new Item({
    name: 'Television',
    price: 200
});

var secondItem = new Item({
    name: 'Television Ally',
    price: 100
});

// This is the process of saving the item to the database. 
firstItem.save(function(err, item) {
    if(err) {
        console.log('Something Went wrong');
    } else {
        console.log('First Item was saved');
        console.log(item);
    }
});

secondItem.save(function(err, item) {
    if(err) {
        console.log('Something Went wrong');
    } else {
        console.log('Second Item was saved');
        console.log(item);
    }
});