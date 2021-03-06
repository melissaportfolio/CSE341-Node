// example
// const express = require('express')
// const path = require('path')
const PORT = process.env.PORT || 5000

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static("public"));

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
// app.get('/getRate', function(req, res, next) {
//   res.render('pages/index', {
//     result: ''
//   });
// });

app.get("/", function(req, res) {
  console.log("Received request for root /");

  res.write("This is the root");
  res.end();
});





//POSTAL RATES PAGE
app.get("/getRate", function(req, res) {
  const request = req.query;

  console.log("get rate");
  var result = 0;
  //letters - stamped
const weight = Number(request.weight);

  // //letters - metered
  // rate2 = Number(request.postalRate2);

  // //large envelopes
  // rate3 = Number(request.postalRate3);

  // //first class package service - retail
  // rate4 = Number(request.postalRate4);

  switch(request.postalRate) {
    
    case 'lettersStamped':
      if (weight <= 1){
        result = .55;
      }
      if (weight <=2) {
        result = .75;
      }
      if (weight <=3) {
        result = .95;
      }
      if (weight <=3.5) {
        result = 1.15;
      }
      break;
    case 'lettersMetered':
      if (weight <= 1){
        result = .51;
      }
      if (weight <=2) {
        result = .71;
      }
      if (weight <=3) {
        result = .91;
      }
      if (weight <=3.5) {
        result = 1.11;
      }
      break;
    case 'largeEnvelopes':
      if (weight == 1) {
        result = 1;
      }
      result = weight * 1;
      break;
    case 'firstClass':
      if (weight <=4) {
        result = 4.00;
      }
      if (weight >= 5 && weight <9) {
        result = 4.80;
      }
      if (weight >=9 && weight <13) {
        result = 5.50;
      }
      if (weight >=13) {
        result = 6.25;
      }
      break;
    default: 
      break;
  }

  params = {
    result: result
  };
  console.log(result);
  res.render('pages/index', params);


  // res.write("this is the rate page");
  // res.end();
});





// app.get("/home", function(req, res){
//   //controller
//     console.log("Received request for home page");
//   const name = getCurrentUser();
//   const emailAddress = "john@email.com";

//   const params = {username: name, email: emailAddress};
//   res.render("home", params);

//   // res.render("index");
  
// });

app.listen(PORT, function() {
  console.log("The server is running on port 5000");
});

// function renderHomePage(name) {
//   //view
//   res.write("<html><head><title>Home</title></head>");
//   res.write("<body>");
//   res.write("<h1>This is the home page</h1>");
//   res.write("<h2> Welcome " + name + "</h2>");
//   res.write("</body><</html>");
//   res.end();
// }

//model
// function getCurrentUser() {
//   return "John";
// }

