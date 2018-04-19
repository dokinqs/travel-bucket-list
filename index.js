// import dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const locationDb = require('./models/location');

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
  // res.send('create location');
  locationDb.createLocation(req.body)
  .then(data => {
    console.log(data);
    res.json({
      status: 'ok',
      quote: data
    })
  })
  .catch(err => {
    res.status(500).json({
      status: 'error',
      message: err.message
    })
  })
});

// READ
// get all
app.get('/locations', (req, res) => {
  // res.send('get all locations');
  locationDb.getAllLocations()
    .then(data => {
      console.log(data);
      res.json({
        locations: data,
        status: 'ok'
      })
    })
    .catch(err => {
      // console.log(err.message);
      res.status(500).json({
        status: 'error',
        message: err.message
      })
    })
});

app.get('/location/:id', (req, res) => {
  console.log(req.params); // get doesn't use body-parser
  // res.send(`get location with id ${req.params.id}`);
  locationDb.getOneLocation(req.params.id)
  .then(data => {
    console.log(data);
    res.json({
      locations: data,
      status: 'ok'
    })
  })
  .catch(err => {
    // console.log(err.message);
    res.status(500).json({
      status: 'error',
      message: err.message
    })
  })
});

// UPDATE
app.put('/locations/:id', (req, res) => {
  console.log(req.body);
  // res.send(`update location with id ${req.params.id}`)
  req.body.locations_id = req.params.id;
  locationDb.updateLocation(req.body)
  .then(data => {
    console.log(data);
    res.json({
      status: 'ok',
      quote: data
    })
  })
  .catch(err => {
    res.status(500).json({
      status: 'error',
      message: err.message
    })
  })
})

// DELETE
app.delete('/locations/:id', (req, res) => {
  // delete doesn't use body-parser
  // res.send(`delete location with id ${req.params.id}`)
  locationDb.deleteLocation(req.params.id)
  .then(() => {
    res.json({
      status: 'ok',
      message: `Successfully delete location with id ${req.params.id}`
    })
  })
  .catch(err => {
    res.status(500).json({
      status: 'error',
      mesage: err.message
    })
  })
});

// listen on port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});