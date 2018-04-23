const favDb = require('../models/fav');

function getAll(req, res, next) {
  favDb.getAll()
  .then((favorites) => {
    res.locals.favorites = favorites;
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
  sendError
}