var express = require('express');
var router = express.Router();
var Products = require('../models/products');
var Order = require('../models/order');

/* GET products listing. */
router.get('/', function(req, res, next) {
  var products = Products.find(function(err, docs){
      res.json(docs);
  });
});

router.get('/orders', function(req, res, next) {
  var products = Order.find(function(err, docs){
      res.json(docs);
  });
});

router.post('/order', function(req, res, next) {
    var order = new Order(req.body);
    order.save((err, result) => {
        if(err) return console.log(err);

        console.log('order saved to db');
    })
    res.send('OK');
});

router.put('/:alias/rate', function(req, res, next) {
    var query = {alias: req.params.alias};
    Products.findOneAndUpdate(query, {$inc: {rate:1}}, function(err, data){
        if(err){
            console.log(err);
        }
    });
    res.send("OK");
});

module.exports = router;
