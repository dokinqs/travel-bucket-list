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
  WHERE locations_id = $1
  `, id);
  return queryPromise;
}

// INSERT INTO locations (cname, nativelanguage, currencyname)
// VALUES ($/cname/, $/nativelanguage/, $/currencyname/)

function createLocation(location) {
  console.log(JSON.stringify(location));
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
  SET cname = $/cname/, nativelanguage = $/nativelanguage/, currencyname = $/currencyname/
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

