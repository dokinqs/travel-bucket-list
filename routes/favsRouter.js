const favsRouter = require('express').Router();
const favsController = require('../controllers/favsController');
const favsViewController = require('../controllers/favsViewController');

const favDb = require('../models/fav');

// locationsRouter.route('/mylist')
//   .get(locationsController.getApi, locationsViewController.showApiCountries);

// locationsRouter.get('/new', locationsViewController.sendNewLocation);
// favsRouter.route('/new')
//   .get(favsViewController.sendNewLocation);

// favsRouter.route('/:id')
//   .get(favsController.getOne, favsViewController.sendOneLocation, sendError)
//   // .put(favsController.update)
//   .delete(favsController.destroy, favsViewController.destroyLocation);


function sendError(err, req, res, next) {
  console.log('I send errors');
  res.status(500).json({
    status: 'error',
    message: err.message
  })
}

favsRouter.route('/')
  .get(favsController.getAll, favsViewController.showFav)
  // sendError

  .post(favsController.create);
  // , favsViewController.sendCreateFav
  // .post(favsController.create, favsViewController.redirectToLocation);

module.exports = favsRouter;

