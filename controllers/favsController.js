const favDb = require('../models/fav');

function getAll(req, res, next) {
  favDb.getAllFavs()
  .then((favorites) => {
    res.locals.favorites = favorites;
    next();
  })
  .catch(err => next(err));
}

function create(req, res, next) {
  console.log('req ' + req);
  console.log('params loc id ' + req.params.locations_id);
  console.log('params id ' + req.params.id);
  favDb.createFav(req.body)
  .then(favorite => {
    res.locals.favorite = favorite;
    next();
  })
  .catch(err => next(err));
}

function sendError(err, req, res, next) {
  console.log('I send errors');
  res.status(500).json({
    status: 'error',
    message: err.message
  })
}

module.exports = {
  getAll,
  create,
  sendError
}