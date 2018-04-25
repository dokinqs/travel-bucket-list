function showFav(req, res) {
  res.render('favorites/index', {
    favorite: res.locals.favorite
  });
}
// 
function sendCreateFav(req, res) {
  favorite = res.locals.favorite;
  // res.render('favorites/index', {
  //   favorite: res.locals.favorite
  // });
  res.redirect(`favorites/${favorite.favs_id}`);
}

function sendOneFav(req, res) {
  res.render('favorites/favorite', {
    location: res.locals.location
  });
}

module.exports = {
  showFav,
  sendCreateFav,
  sendOneFav
}