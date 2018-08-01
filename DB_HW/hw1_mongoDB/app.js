const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/user.route'); // import routes for the UserSchema
const app = express();

// set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:pass12345@ds115971.mlab.com:15971/ustsv_user_db'

let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/app', user);

let port = 3000;

app.listen(port, ()=>{
  console.log('Server is up and running on port number ' + port);
});















// Reference:
// https://codeburst.io/writing-a-crud-app-with-node-js-and-mongodb-e0827cbbdafb
