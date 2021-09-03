const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
  name: { type: String},
  value: { type: Number},
  price: { type: Number},
  type:{ type: String},
  status: {type:String},
});

module.exports = mongoose.model('Order', ordersSchema);