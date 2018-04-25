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
//   .get(favsViewController.sendNewFav);

favsRouter.route('/')
  .get(favsController.getAll, favsViewController.showFav, sendError)
  .post(favsController.create, favsViewController.sendCreateFav);
  //  redirectToLocation);

  favsRouter.route('/:id')
  .get(favsController.getOne, favsViewController.sendOneFav);
//   // .put(favsController.update)
//   .delete(favsController.destroy, favsViewController.destroyFav);

module.exports = favsRouter;

