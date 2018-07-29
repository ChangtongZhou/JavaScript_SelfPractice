const User = require('../models/user.model');

// Find all users
exports.getall = function(req, res) {
  User.find(function(err, users){
    if(err) {
      return next(err);
    }
    res.send(users);
  })
};

// Get One user
exports.getone = function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if(err) return next(err);
    res.send(user);
  })
};

// Create One user
exports.user_create = function(req, res) {
  let user = new User({
    name: req.body.name,
    age: req.body.age,
    sex: req.body.sex,
    title: req.body.title,
    start_date: new Date()
  });

  user.save(function(err) {
    if(err) {
      return next(err);
    }
    res.send('User created successfuly.')
  })
};

// Update One user
exports.updateone = function(req, res) {
  User.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, user) {
    if(err) return next(err);
    res.send('User updated.')
  })
};

// Delete One user
exports.deleteone = function(req, res) {
  User.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send('Deleted one user successfuly!');
  })
}
