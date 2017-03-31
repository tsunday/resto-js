var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    alias: {type: String, required: true},
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    details: {type: String},
    rate: Number,
    comments: [String],
    price: {type: Number, required: true}
});

module.exports = mongoose.model('Product', schema);