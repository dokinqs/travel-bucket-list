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

module.exports = {
  getAllFavs,
  getOneFav,
  createFav
};