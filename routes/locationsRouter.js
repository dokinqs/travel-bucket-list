const locationsRouter = require('express').Router();
const locationsController = require('../controllers/locationsController');
const locationsViewController = require('../controllers/locationsViewController');

const locationDb = require('../models/location');

// function sendLocations(req, res) {
//     console.log('I send successful responses');
//     res.json({
//       status: 'ok',
//       quotes: res.locals.locations
//     });
// }

function sendError(err, req, res, next) {
  console.log('I send errors');
  res.status(500).json({
    status: 'error',
    message: err.message
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
  console.log('going to remove');
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
  .get(locationsController.getAll, locationsViewController.sendLocations, sendError)
  // .post(locationsController.create, locationsViewController.sendCreateLocation);
  .post(locationsController.create, locationsViewController.redirectToLocation);

locationsRouter.get('/new', locationsViewController.sendNewLocation);

locationsRouter.route('/:location_id')
  .get(locationsController.getOne, locationsViewController.sendOneLocation, sendError)
  .put(update)
  .delete(remove);

module.exports = locationsRouter;