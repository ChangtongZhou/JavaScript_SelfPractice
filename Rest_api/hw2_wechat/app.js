const express = require('express');
const bodyParser = require('body-parser');

// Import routes for the users
const user = require('./routes/user.route');
// Import routes for the posts
const post = require('./routes/post.route');
// Import routes for the likes
const like = require('./routes/like.route');

const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:pass12345@ds115971.mlab.com:15971/wechat_practice_db';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/users', user);
app.use('/posts', post);
app.use('/likes', like);

let port = 3000;

app.listen(port, ()=>{
  console.log('Server is up and running on port number ' + port);
});
