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
  var result = Number(0).toFixed(2);
  //letters - stamped
const weight = Number(request.weight);

 

  switch(request.postalRate) {
    
    case 'lettersStamped':
      if (weight <= 1){
        result = "$" + .55;
      }
      else if (weight > 1 && weight <=2) {
        result = "$" + .75;
      }
      else if (weight > 2 && weight <=3) {
        result = "$" + .95;
      }
      else if (weight > 3 && weight <=3.5) {
        result = "$" + 1.15;
      }
      else {
        result = "Please select another mailing option.";
      }
      break;


    case 'lettersMetered':
      if (weight <= 1){
        result = "$" + .51;
      }
      else if (weight > 1 && weight <=2) {
        result = "$" + .71;
      }
      else if (weight > 2 && weight <=3) {
        result = "$" + .91;
      }
      else if (weight > 3 && weight <=3.5) {
        result = "$" + 1.11;
      }
      else {
        result = "Please select another mailing option.";
      }
      break;


    case 'largeEnvelopes':
      if (weight <= 1) {
        result = "$" + Number(1.00).toFixed(2);
      }
      else if (weight > 1 && weight <=2) {
        result = "$" + Number(1.20).toFixed(2);
      }
      else if (weight > 2 && weight <=3) {
        result = "$" + Number(1.40).toFixed(2);
      }
      else if (weight > 3 && weight <=4) {
        result = "$" + Number(1.60).toFixed(2);
      }
      else if (weight > 4 && weight <=5) {
        result = "$" + Number(1.80).toFixed(2);
      }
      else if (weight > 5 && weight <=6) {
        result = "$" + Number(2.00).toFixed(2);
      }
      else if (weight > 6 && weight <=7) {
        result = "$" + Number(2.20).toFixed(2);
      }
      else if (weight > 7 && weight <=8) {
        result = "$" + Number(2.40).toFixed(2);
      }
      else if (weight > 8 && weight <=9) {
        result = "$" + Number(2.60).toFixed(2);
      }
      else if (weight > 9 && weight <=10) {
        result = "$" + Number(2.80).toFixed(2);
      }
      else if (weight > 10 && weight <=11) {
        result = "$" + Number(3.00).toFixed(2);
      }
      else if (weight > 11 && weight <=12) {
        result = "$" + Number(3.20).toFixed(2);
      }
      else if (weight > 12 && weight <=13) {
        result = "$" + Number(3.40).toFixed(2);
      }
      else {
        result = "Please select another mailing option.";
      }

      break;



    case 'firstClass':
      //packages between 1 and 4 oz
      if (weight <=4) {
        result = "$" + Number(4.00).toFixed(2);
      }
      //packages between 5 and 8 oz
      else if (weight > 4 && weight <=8) {
        result = "$" + Number(4.80).toFixed(2);
      }
      //packages between 9 and 12 oz
      else if (weight > 8 && weight <=12) {
        result = "$" + Number(5.50).toFixed(2);
      }
      //packages 13 oz
      else if (weight >12 && weight <= 13) {
        result = "$" + 6.25;
      }
      else {
        result = "Please select another mailing option.";
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

