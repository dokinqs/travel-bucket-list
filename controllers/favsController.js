const favDb = require('../models/fav');

function getAll(req, res, next) {
  favDb.getAllFavs()
  .then((favorites) => {
    res.locals.favorites = favorites;
    next();
  })
  .catch(err => next(err));
}

function getOne(req, res, next) {
  favDb.getOneFav(req.params.id)
  .then(data => {
    res.locals.favorite = data;
    next();
  })
  .catch(err => {
    next(err);
  })
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

function update(req, res, next) {
  req.body.id = req.params.id;
  favDb.updateFav(req.body)
    .then(data => {
      res.redirect(`/favs/${req.body.id}`);
    })
    .catch(err => {
      next(err);
    })
}

function destroy(req, res) {
  favDb.destroyFav(req.params.id)
    .then(() => {
      res.redirect('/favs');
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
  getAll,
  getOne,
  create,
  sendError,
  update,
  destroy
}