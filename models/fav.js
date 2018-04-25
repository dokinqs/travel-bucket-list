const db = require('../config/connection');

function getAllFavs() {
  const queryPromise = db.many(`
  SELECT * FROM favs
  JOIN locations ON locations.locations_id = favs.locations_id
  `)
  return queryPromise;
}

function getOneFav(id) {
  const queryPromise = db.one(`
  SELECT * FROM favs
  WHERE favs_id = $1
  `, id)
  return queryPromise;
}

function createFav(id) {
  console.log(JSON.stringify(id));
  const queryPromise = db.one(`
  INSERT INTO favs (locations_id)
  VALUES ($/locations_id/)
  RETURNING *
  `, id);
  return queryPromise;
}

function updateFav(favorite) {
  const queryPromise = db.one(`
  UPDATE favs
  SET note = $/note/
  WHERE favs.favs_id = $/favs_id/
  RETURNING *
  `, favorite);
  return queryPromise;
}

function destroyFav(id) {
  const queryPromise = db.none(`
  DELETE FROM favs 
  WHERE favs_id = $1
  `, id);
  return queryPromise;
}   

module.exports = {
  getAllFavs,
  getOneFav,
  createFav,
  updateFav,
  destroyFav
};