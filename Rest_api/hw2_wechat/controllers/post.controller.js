const Post = require('../models/post.model');

// Find all posts
exports.getall = (req, res) => {
  Post.find((err, posts) => {
    if(err) throw err;
    res.send(posts);
  })
}


// Find one post
exports.getone = (req, res) => {
  Post.findById(req.params.id, (err, post) => {
    if (err) throw err;
    res.status(200).json(post);
  })
}

// Find posts post by a specific user
exports.getOneByUserId = (req, res) => {
  Post.find({"userId": req.params.id}, (err, post) => {
    if (err) throw err;
    res.status(200).json({post});
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
    if(err) throw err;
    res.send('Post created successfuly.')
  })
};

// Update one post
exports.updateone = (req, res) => {
  Post.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, post)=>{
    if(err) throw err;
    res.send('Post updated.');
  })
};

// Delete one post
exports.deleteone = (req, res) => {
  Post.findByIdAndRemove(req.params.id, (err) => {
    if(err) throw err;
    res.send('Deleted one post successfuly!');
  })
};
