// import dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const locationDb = require('./models/location');
const locationsRouter = require('./routes/locationsRouter');

// declare the port, passed to app.listen below
const PORT = process.env.PORT || 3000;

// initialize app
const app = express();

// use middleware
// log request info to console
app.use(logger( 'dev'));
// parse urlencoded req bodies (POST and PUT)
app.use(bodyParser.urlencoded({extended: false}));
// parse json req bodies (POST and PUT)
app.use(bodyParser.json());

// handle get requests to root route
app.get('/', (req, res) => {
  res.send('hi');
});

app.use('/locations', locationsRouter);

// listen on port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});