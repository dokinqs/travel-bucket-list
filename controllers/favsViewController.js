function showFav(req, res) {
  res.render('favorites/index', {
    favorite: res.locals.favorite
  });
}

function sendCreateFav(req, res) {
  res.render('favorites/index', {
    favorites: res.locals.favorites
  });
}

module.exports = {
  showFav,
  sendCreateFav
}