const http = require("http");
const express = require('express');
const bodyParser = require('body-parser');
let app = express();

// Connect to mysql
let mysql = require('mysql');

let db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'YOUR Password',
  database: 'USTSV_DB_practice'
})

db.connect((err)=>{
  if(err) throw err;
  console.log('Connected to database');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

let port = 5000;
app.listen(port, ()=>{
  console.log(`Server running on port: ${port}`);
})

app.get('/app', (req, res)=>{
  res.send("Welcome to my page!");
})

// Get all users
app.get('/app/users/getall', (req, res)=>{
  // console.log(req);
  db.query('SELECT * FROM users', (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify(results));
  });
});

// Get one user
app.get('/app/users/getone/:id', (req, res)=>{
  db.query('SELECT * FROM users WHERE id = ?', [req.params.id], (err, results)=>{
    if(err) throw err;
    res.send(JSON.stringify(results));
  })
})

// Insert one new user
app.post('/app/users/insertone', (req, res)=>{
  let user = {
    name: req.body.name,
    age: req.body.age,
    sex: req.body.sex,
    title: req.body.title,
    start_date: new Date()
  };
  db.query("INSERT INTO users SET ?", user, (err, results)=> {
    if(err) throw err;
    res.send(JSON.stringify(results));
  });
});

// Delete one user
app.delete('/app/users/deleteone/:id', (req, res)=>{
  db.query('DELETE FROM users WHERE id=?', [req.params.id], (err, results)=>{
    if(err) throw err;
    res.send('You deleted one record successfully!');
  })
})











// Reference:
//https://www.js-tutorials.com/javascript-tutorial/node-js-rest-api-add-edit-delete-record-mysql-using-express/
