const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');
const Order = require('../models/order.model');

router.get('/products', async (req, res) => {
  try {
    const result = await Product.find();
    if (!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/products/:id', async (req, res) => {
  try {
    const result = await Product.findById(req.params.id);
    if (!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/orders', async (req, res) => {
  try {
    const newOrderInBucket = new Order(req.body);
    newOrderInBucket.save();
    req.session.orderKey = req.body.key;
    req.session.save( function(err) {
      req.session.reload( function (err) {
        console.log('Session Updated');
      });
    });
    console.log(req.session.orderKey);
    res.json(newOrderInBucket);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.get('/doneOrder', async (req, res) => {
  try {
    const result = await Order.findOne({key: req.session.orderKey});
    if (!result) res.status(404).json({ order: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/doneOrder', async (req, res) => {
  try {
    console.log(req.session.orderKey);
    await Order.updateOne({ key: req.session.orderKey },{$set:{status:'done'}});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/deleteOrder', async (req, res) => {
  //console.log(req.body);
  try {
    console.log(req.session.orderKey)
    await Order.deleteOne({ key: req.session.orderKey });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
