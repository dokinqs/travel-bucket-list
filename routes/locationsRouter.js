const locationsRouter = require('express').Router();
const locationsController = require('../controllers/locationsController');
const locationsViewController = require('../controllers/locationsViewController');

const locationDb = require('../models/location');

function sendError(err, req, res, next) {
  console.log('I send errors');
  res.status(500).json({
    status: 'error',
    message: err.message
  })
}
   
locationsRouter.route('/')
  .get(locationsController.getAll, locationsViewController.sendLocations, sendError)
  .post(locationsController.create, locationsViewController.sendCreateLocation);

locationsRouter.route('/new')
  .get(locationsController.getAll, locationsViewController.sendNewLocation);

locationsRouter.route('/:id')
  .get(locationsController.getOne, locationsViewController.sendOneLocation)
  // , sendError
  .put(locationsController.update)
  .delete(locationsController.destroy, locationsViewController.destroyLocation);

// locationsRouter.route('/mylist')
//   .get(locationsController.getApi, locationsViewController.showApiCountries);

module.exports = locationsRouter;