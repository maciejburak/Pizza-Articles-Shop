const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
  name: { type: String},
  value: { type: Number},
  price: { type: Number},
  url: { type: String},
  description: { type: String},
  type:{ type: String},
  produced: { type: String},
  size: { type: String},
});

module.exports = mongoose.model('Product', productsSchema);