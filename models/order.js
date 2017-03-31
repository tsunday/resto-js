var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: String,
    address: String,
    phone: String,
    cart: [String]
});

module.exports = mongoose.model('Order', schema);