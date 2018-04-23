function showFav(req, res) {
  res.render('favorites/index', {
    favorites: res.locals.favorites
  });
}

module.exports = {
  showFav
}