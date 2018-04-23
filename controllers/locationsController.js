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


function getOne(req, res, next) {
// app.get('/location/:id', (req, res) => {
  console.log(req.params); // get doesn't use body-parser
  // res.send(`get location with id ${req.params.id}`);
  locationDb.getOneLocation(req.params.id)
  .then(data => {
    console.log(data);
    // res.json({
    //   locations: data,
    //   status: 'ok'
    // })
    res.locals.location = data;
    next();
  })
  .catch(err => {
    // console.log(err.message);
    // res.status(500).json({
    //   status: 'error',
    //   message: err.message
    // })
    next(err);
  })
}


// CREATE
function create(req, res, next) {
  // app.post('/locations', (req, res) => {
    console.log(req.body);
    // res.send('create location');
    locationDb.createLocation(req.body)
    .then(data => {
      console.log(data);
      // res.json({
      //   status: 'ok',
      //   quote: data
      // })
      next();
    })
    .catch(err => {
      // res.status(500).json({
      //   status: 'error',
      //   message: err.message
      // })
      next(err);
    })
}


function destroy(req, res, next) {
  locationDb.destroyLocation(req.params.id)
    .then(() => {
      res.redirect('/locations');
    })
    .catch(err => {
      next(err);
    })
}


module.exports = {
  getAll,
  getOne,
  create,
  destroy
};