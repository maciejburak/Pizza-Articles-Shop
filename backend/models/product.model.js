const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true },
  price: { type: Number, required: true },
  photos:{type: Array, required: true },
  description: { type: String, required: true },
  type:{ type: String, required: true },
  produced: { type: String, required: true },
  size: { type: String, required: true },
});

module.exports = mongoose.model('Product', productsSchema);