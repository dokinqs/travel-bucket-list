const favsRouter = require('express').Router();
const favsController = require('../controllers/favsController');
const favsViewController = require('../controllers/favsViewController');

const favDb = require('../models/fav');

function sendError(err, req, res, next) {
  console.log('I send errors');
  res.status(500).json({
    status: 'error',
    message: err.message
  })
}

// favsRouter.route('/new')
//   .get(favsViewController.sendNewLocation);

// favsRouter.route('/:id')
//   .get(favsController.getOne, favsViewController.sendOneLocation)
//   // .put(favsController.update)
//   .delete(favsController.destroy, favsViewController.destroyLocation);

favsRouter.route('/')
  .get(favsController.getAll, favsViewController.showFav, sendError)
  .post(favsController.create, favsViewController.sendCreateFav);
  //  redirectToLocation);

module.exports = favsRouter;

