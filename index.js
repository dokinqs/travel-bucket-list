const path = require('path');
// import dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
// const locationDb = require('./models/location');
const locationsRouter = require('./routes/locationsRouter');

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

app.use('/locations', locationsRouter);

// listen on port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});