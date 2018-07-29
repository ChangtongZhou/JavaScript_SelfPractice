const Post = require('../models/post.model');

// Find all posts
exports.getall = (req, res) => {
  Post.find((err, posts) => {
    if(err) return next(err);
    res.send(posts);
  })
}

// Create one post
exports.createone = (req, res) => {
  let post = new Post({
    content: req.body.content,
    created_at: new Date(),
    userId: req.body.userId
  });

  post.save((err) => {
    if(err) return next(err);
    res.send('Post created successfuly.')
  })
};

// Update one post
exports.updateone = (req, res) => {
  Post.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, post)=>{
    if(err) return next(err);
    res.send('Post updated.');
  })
};

// Delete one post
exports.deleteone = (req, res) => {
  Post.findByIdAndRemove(req.params.id, (err) => {
    if(err) return next(err);
    res.send('Deleted one post successfuly!');
  })
};
