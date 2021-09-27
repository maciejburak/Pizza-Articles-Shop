const express = require('express');
const router = express.Router();
const Order = require('../models/order.model.js');

router.post('/orders/postOrder', async (req, res) => {
  try {
    const newOrderInBucket = new Order(req.body);
    newOrderInBucket.save();
    req.session.orderKey = req.body.key;
    res.session.save()
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.put('/orders/saveOrder', async (req, res) => {
  try {
    await Order.updateOne({ key: req.session.orderKey },{$set:{status:'done', personalData: req.body.data}});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/orders/deleteOrder', async (req, res) => {
  try {
    await Order.deleteOne({ key: req.session.orderKey });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
