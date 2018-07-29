const Like = require('../models/like.model');

// Find all likes
exports.getall = (req, res) => {
  Like.find((err, likes) => {
    if(err) return next(err);
    res.send(likes);
  })
}

// Create one like
exports.createone = (req, res) => {
  let like = new Like({
    userId: req.body.userId,
    postId: req.body.postId
  });

  like.save((err) => {
    if(err) return next(err);
    res.send('Like created successfuly.')
  })
};

// Update one like
exports.updateone = (req, res) => {
  Like.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, like)=>{
    if (err) return next(err);
    res.send('Like updated.')
  })
}

// Delete one like
exports.deleteone = (req, res) => {
  Like.findByIdAndRemove(req.params.id, (err)=>{
    if(err) return next(err);
    res.send('Deleted one like successfuly.')
  })
}
