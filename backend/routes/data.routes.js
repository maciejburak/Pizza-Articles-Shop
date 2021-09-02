const express = require('express');
const router = express.Router();
const Post = require('../models/post.model');

router.get('/posts', async (req, res) => {
  try {
    const result = await Post
      .find({status: 'published'})
      //.select('author created title photo')
      .sort({created: -1});
    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/posts/:id', async (req, res) => {
  try {
    const result = await Post
      .findById(req.params.id);
    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.post('/posts', async (req, res) => {
  try {
    const { title, text} = req.body;
    const newPost = new Post(req.body);
    if(title.length<11)(res.json('Title has to has minimum 10 signs'))
    else if(text.length<21)(res.json('Text has to has minimum 20 signs'))
    else{
      newPost.save()
      res.json(newPost)
    }
  } catch(err) {
    res.status(500).json({ message: err });
  }
})

module.exports = router;
