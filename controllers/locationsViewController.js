function sendLocations(req, res) {
  // console.log('I send successful responses');
  // res.json({
  //   status: 'ok',

  // points to file "index.ejs" inside "views/locations"
  res.render('locations/index', {
    locations: res.locals.locations
  });
}

function sendOneLocation(req, res) {
  // res.json({
  //   status: 'ok',

  // "location.ejs" view makes use of the same partial single_location.ejs
+  // for rendering one location as the index view used to render each location in the list
+  // of locations that were passed in to locations/index
  res.render('locations/location', {
    location: res.locals.location
  });
}

function sendCreateLocation(req, res) {
  // or write "locations/new" view and call "res.render('locations/new')"
  res.json({
    status: 'ok',
    location: res.locals.newLocation
  });
}

function redirectToLocation(req, res) {
  console.log('redirecting to /locations/' + res.locals.newLocation.locations_id);
}

function sendNewLocation(req, res) {
  res.render('locations/newLocation');
}

module.exports = {
  sendLocations: sendLocations,
  sendOneLocation: sendOneLocation,
  sendCreateLocation: sendCreateLocation,
  sendNewLocation: sendNewLocation,
  redirectToLocation: redirectToLocation
};