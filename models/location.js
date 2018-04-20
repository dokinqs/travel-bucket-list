// import { builtinModules } from 'module';

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
  INSERT INTO locations (Name, NativeLanguage, CurrencyName)
  VALUES ($/Name/, $/NativeLanguage/, $/CurrencyName/
  RETURNING *
  `, location);
  return queryPromise;
}

function updateLocation(location) {
  const queryPromise = db.one(`
  UPDATE locations
  SET Name = $/Name/, $/NativeLanguage/, $/CurrencyName/
  WHERE locations_id = $/locations_id/`)
}

function destroyLocation(id) {
  const queryPromise = db.none(`
  DELETE FROM locations WHERE locations_id = $1
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