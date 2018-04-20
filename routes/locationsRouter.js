const locationsRouter = require('express').Router();

const locationDb = require('../models/location');

function getAll(req, res, next) {
  console.log('About to query the DB');
  locationDb.getAllLocations()
  .then(data => {
    // console.log(data);
    // res.json({
    //   quotes: data,
    //   status: 'ok'
    // })
    console.log('Queried the DB and got ' + data.length + ' results');
    res.locals.locations = data;
    next();
  })
  .catch(err => {
    // res.status(500).json({
    //   status: 'error',
    //   message: err.message
    // });
    next(err);
  })
}

function sendLocations(req, res) {
    console.log('I send successful responses');
    res.json({
      status: 'ok',
      quotes: res.locals.locations
    });
}

function sendError(err, req, res, next) {
  console.log('I send errors');
  res.status(500).json({
    status: 'error',
    message: err.message
  })
   }

// CREATE
function create(req, res) {
// app.post('/locations', (req, res) => {
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
}

// READ
function getAll(req, res) {
// app.get('/locations', (req, res) => {
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
}

function getOne(req, res) {
// app.get('/location/:id', (req, res) => {
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
}

// UPDATE
function update(req, res) {
// app.put('/locations/:id', (req, res) => {
//   console.log(req.body);
  // res.send(`update location with id ${req.params.id}`)
  req.body.location_id = req.params.id;
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
}

// DELETE
function remove(req, res) {
// app.remove('/locations/:id', (req, res) => {
  // delete doesn't use body-parser
  // res.send(`remove location with id ${req.params.id}`)
  locationDb.removeLocation(req.params.id)
  .then(() => {
    res.json({
      status: 'ok',
      message: `Successfully removed location with id ${req.params.id}`
    })
  })
  .catch(err => {
    res.status(500).json({
      status: 'error',
      mesage: err.message
    })
  })
};

locationsRouter.route('/')
.get(getAll, sendLocations, sendError)
.post(create);

locationsRouter.route('/:location_id')
.get(getOne)
.put(update)
.delete(remove);

module.exports = locationsRouter;