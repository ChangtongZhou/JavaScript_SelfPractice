const User = require('../models/user.model');

// Find all users
exports.userlist = (req, res) => {
  User.find((err, users) => {
    if (err) throw err;
    res.status(200).json({users});
  })
}

// Find one user
exports.oneuser = (req, res) => {
    User.findById(req.params.id, (err, user) => {
      if (err) throw err;
      res.status(200).json({user});
    })
}

// Create one user
exports.createone = (req, res) => {
  let user = new User({
    name: req.body.name,
    gender: req.body.gender,
    location: req.body.location,
    bio: req.body.bio
  });

  user.save((err) => {
    if(err) return next(err);
    res.send('User created successfuly.')
  })
};

// Update one user
exports.updateone = (req, res) => {
  User.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, user) => {
    if(err) return next(err);
    res.send('User updated.');
  })
}

// Delete one user
exports.deleteone = (req, res) => {
  User.findByIdAndRemove(req.params.id, (err) => {
    if(err) return next(err);
    res.send('Deleted user successfuly!')
  })
}
