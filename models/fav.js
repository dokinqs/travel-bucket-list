const db = require('../config/connection');

function getAll() {
  const queryPromise = db.many(`
  SELECT * FROM favs
  JOIN locations ON locations.locations_id = favs.locations_id
  `)
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
  getAll,
  createFav
};