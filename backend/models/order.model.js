const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
  basket: { type: Array, required: true },
  key: { type: String, required: true },
  status: { type: String, required: true },
  description: { type: String},
  personalData: {type: Array},
});

module.exports = mongoose.model('Order', ordersSchema);