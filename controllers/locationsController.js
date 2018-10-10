const locationDb = require('../models/location');
const fetch = require('node-fetch');

const url = 'http://countryapi.gear.host/v1/Country/getCountries';

function getApi(req, res, next) {
  fetch(url)
    .then((res) => res.json())
    .then(data => {
      console.log(data.results);
      res.locals.data = data;
      next();
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
}

// CREATE

function create(req, res, next) {
    console.log(req.body);
    locationDb.createLocation(req.body)
    .then(data => {
      res.locals.location = data;
      next();
    })
    .catch(err => {
      next(err);
    })
}

// READ

function getAll(req, res, next) {
  locationDb.getAllLocations()
  .then(data => {
    console.log('Queried DB, got ' + data.length + ' results');
    res.locals.locations = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function getOne(req, res, next) {
  locationDb.getOneLocation(req.params.id)
  .then(data => {
    res.locals.location = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

// UPDATE

function edit(req, res, next) {
  locationDb.getOneLocation(req.params.id)
    .then(data => {
      res.locals.location = data;
      next();
    })
    .catch(err => {
      next(err);
    })
}

function update(req, res, next) {
  req.body.id = req.params.id;
  locationDb.updateLocation(req.body)
    .then(data => {
      res.redirect(`/locations/${req.body.id}`);
    })
    .catch(err=> {
      next(err);
    })
}

// DELETE

function destroy(req, res) {
  locationDb.destroyLocation(req.params.id)
    .then(() => {
      res.redirect('/locations');
    })
    .catch(err => {
      // next(err);
      res.status(500).json({
        status: 'error',
        message: err.message
      })
    })
}

module.exports = {
  getApi,
  getAll,
  getOne,
  create,
  edit,
  update,
  destroy
};