const path = require('path');
// import dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
// const fetch = require('node-fetch');
// const request = require('request');
// const requestp = require('request-promise');
// const locationDb = require('./models/location');
const locationsRouter = require('./routes/locationsRouter');
const favsRouter = require('./routes/favsRouter');

// declare the port, passed to app.listen below
const PORT = process.env.PORT || 3000;

// initialize app
const app = express();

// use middleware
// log request info to console
app.use(logger('dev'));
// parse urlencoded req bodies (POST and PUT)
app.use(bodyParser.urlencoded({extended: false}));
// parse json req bodies (POST and PUT)
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// view middleware/public directory for static assets
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// handle get requests to root route
app.get('/', (req, res) => {
  // res.send('hi');
  res.render('homepage');
});

// app.get('/mylist', (req, res) => {
//   request.get({url: "http://countryapi.gear.host/v1/Country/getCountries", function(err, res, body) {
//     if (!error && response.statusCode === 200) {
//       res.json(body);
//       console.log('mylist' + res.json(body));
//     }
//   }
// })
// });

// const url = 'http://countryapi.gear.host/v1/Country/getCountries';

// fetch(url)
//   .then((resp) => resp.json()) 
//   .then(function(data){
//     console.log(data);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

// locationsRouter.get('/mylist', (req, res, next) => {
//   requestp('http://countryapi.gear.host/v1/Country/getCountries'), {
//     transform: function(body) {
//       return JSON.parse(body);
//     }
//   }
//   .then((res) => {
//     console.log(res.json());
//     res.json();
//     res.locals.locations = data;
//   })
//   .catch((err) => next(err));``
// });

app.use('/locations', locationsRouter);
app.use('/favs', favsRouter);

// listen on port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});