const db = require('../config/connection');

function getAllLocations() {
  const queryPromise = db.any(`
  SELECT * FROM locations
  `);
  return queryPromise;
}

function getOneLocation(id) {
  const queryPromise = db.one(`
  SELECT * FROM locations
  WHERE locations_id = $1
  `, id);
  return queryPromise;
}

function createLocation(location) {
  const queryPromise = db.one(`
  INSERT INTO locations (cname)
  VALUES ($/cname/)
  RETURNING *
  `, location);
  return queryPromise;
}

function updateLocation(location) {
  const queryPromise = db.one(`
  UPDATE locations
  SET cname = $/cname/
  WHERE locations_id = $/locations_id/
  RETURNING *
  `, location);
  return queryPromise;
}

function destroyLocation(id) {
  const queryPromise = db.none(`
  DELETE FROM locations 
  WHERE locations_id = $1
  `, id);
  return queryPromise;
}   

module.exports = {
  getAllLocations,
  getOneLocation,
  createLocation,
  updateLocation,
  destroyLocation
}