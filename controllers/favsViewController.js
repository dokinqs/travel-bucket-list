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
    favorite: res.locals.favorite
  });
}

function editFav(req, res) {
  favorite = res.locals.favorite;
  res.render(`favorites/edit`, {
    favorite: res.locals.favorite
  })
}

function destroyFav(req, res) {
  res.redirect('favorites/index');
}

module.exports = {
  showFav,
  sendCreateFav,
  sendOneFav,
  editFav,
  destroyFav
}