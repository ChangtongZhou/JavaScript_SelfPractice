const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if(req.method === 'GET') {
    console.log(`${req.method} ${req.url}`);
    let url = req.url;

    if(url.match(/\d+/g)) {
      let id = url.split("/")[2];
      console.log(id);
      fs.appendFile('spiral.js', 'I am an id: '+id, function(err) {
          if(err) {
            console.log('-------');
            console.log('Error appending to file.');
            console.log('-------');
          } else {
            console.log('-------');
            console.log('appending to file is successful.');
            console.log('-------');
          }
        }
      );

      res.writeHead(200, {'Content-Type' : 'text/js'});
      res.end();
      // res.send(id);
      // res.set()
      // res.end("Id is = " + id);
    } else {
      switch (url) {
        case '/':
          fs.readFile("index.html", function(err, data) {
            if(err) {
              res.writeHead(404);
              res.write("Not Found!");
            } else {
              res.writeHead(200, {'Content-Type': 'text/html'});
              res.write(data);
            }
            res.end();
          });
          break;
        case '/spiral.js':
          res.writeHead(200, {'Content-Type': 'text/js'});
          fs.readFile('spiral.js', function(err, data) {
            if(err){
              res.writeHead(404);
              res.write("Not Found!");
            } else {
              res.write(data);
            }
            res.end();
          });
          break;
        default:
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write('<h1> Hey there!</h1><br /><br /> This is the default response. Request URL is: ' + req.url);
          res.end();
      }
    }


  } else {
    console.log(req.method + 'is not supported');
    res.end('not supported');
  }

});
server.listen(port, hostname, ()=>{
  console.log(`Server running at http://${hostname}:${port}/`);
});
