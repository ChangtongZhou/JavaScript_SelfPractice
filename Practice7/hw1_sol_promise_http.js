var axios = require('axios');

axios.get('https://www.w3schools.com/angular/customers.php')
  .then((res) => {
    console.log("Returned data is: \n");
    console.log(res.data);
  })
  .catch((err) => console.log(err));


// const promise = new Promise((resolve, reject) => {
//   resolve();
//   reject();
// })
//
// promise.then(res=>console.log(res)).catch(err=>console.log(err));
