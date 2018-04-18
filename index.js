// import dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

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

// handle get requests to root route
app.get('/', (req, res) => {
  res.send('hi');
});

// CREATE
app.post('/locations', (req, res) => {
  console.log(req.body);
  res.send('create location');
});

// READ
// get all
app.get('/locations', (req, res) => {
  res.send('get all locations');
});

app.get('/location/:id', (req, res) => {
  console.log(req.params); // get doesn't use body-parser
  res.send(`get location with id ${req.params.id}`);
});

// UPDATE
app.put('/locations/:id', (req, res) => {
  console.log(req.body);
  res.send(`update location with id ${req.params.id}`)
})

// DELETE
app.delete('/locations/:id', (req, res) => {
  // delete doesn't use body-parser
  res.send(`destroy location with id ${req.params.id}`)
})

// listen on port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});