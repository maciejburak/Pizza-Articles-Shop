const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');


router.get('/products', async (req, res) => {
  try {
    const result= await Product.find()
    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result)
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.post('/products', async (req, res) => {
  try {
    const newProductInBucket = new Product(req.body);
    newProductInBucket.save()
    res.json(newProductInBucket)
  } catch(err) {
    res.status(500).json({ message: err });
  }
})

/*router.post('/order', async (req, res) => {
  try {
    console.log(req.body)
  } catch(err) {
    res.status(500).json({ message: err });
  }
})*/

module.exports = router;


/*router.get('/products/:id', async (req, res) => {
  try {
    const result = await Data
      .findById(req.params.id);
    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});*/


