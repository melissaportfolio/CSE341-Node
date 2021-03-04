// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))

const express = require('express')
const app = express()
const path = require('path')
const { nextTick } = require('process')
const PORT = process.env.PORT || 5000
const url = require('url')
​
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/team', function (req, res, next) {
     res.render('pages/index',  {
       result: ''
     })
     next()
  }, function (req, res)  {
    // console.log('inside function')
  })
  .get('/math', function (req, res)  {
​
    const request = req.query
​
    number1 = Number(request.operand1)
    number2 = Number(request.operand2)
​
    switch(request.operator) {
      case 'add':
        result = number1 + number2
        break;
      case 'subtract':
        result = number1 - number2
        break;
      case 'multiply':
        result = number1 * number2
        break;
      case 'divide':
        result = number1 / number2
        break;
      default:
        break;
    }
    console.log(result)
    res.render('pages/index', {
      result: result
  });
  })
  .get('/math_service', function (req, res)  {
​
    const request = req.query
​
    number1 = Number(request.operand1)
    number2 = Number(request.operand2)
​
    switch(request.operator) {
      case 'add':
        result = number1 + number2
        break;
      case 'subtract':
        result = number1 - number2
        break;
      case 'multiply':
        result = number1 * number2
        break;
      case 'divide':
        result = number1 / number2
        break;
      default:
        break;
    }
    console.log(result)
    res.render('pages/index', 
      JSON.stringify({result: result})
  );
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
