const db = require('../config/connection');

// SELECT locations.cname, locations.nativelanguage, locations.currencyname FROM locations

function getAllLocations() {
  const queryPromise = db.any(`
  SELECT * FROM locations
  `);
  return queryPromise;
}

function getOneLocation(id) {
  const queryPromise = db.one(`
  SELECT * FROM locations
  WHERE location_id = $1
  `, id);
  return queryPromise;
}

function createLocation(location) {
  const queryPromise = db.one(`
  INSERT INTO locations (cname, nativelanguage, currencyname)
  VALUES ($/cname/, $/nativelanguage/, $/currencyname/)
  RETURNING *
  `, location);
  return queryPromise;
}

function updateLocation(location) {
  const queryPromise = db.one(`
  UPDATE locations
  SET cname = $/cname/, nativelanguage = $/nativelanguage/, currencyname = $/currencyname/
  WHERE location_id = $/location_id/
  RETURNING *
  `, location);
  return queryPromise;
}

function destroyLocation(id) {
  const queryPromise = db.none(`
  DELETE FROM locations 
  WHERE location_id = $1
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

