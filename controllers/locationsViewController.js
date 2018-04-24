// function showApiCountries(req, res) {
//   res.render('locations/mylist', {
//     data: res.locals.data
//   });
// }

function sendLocations(req, res) {
  // console.log('I send successful responses');
  // res.json({
  //   status: 'ok',
  // points to file "index.ejs" inside "views/locations"
  // res.json(res.locals.locations);
  res.render('locations/index', {
    locations: res.locals.locations
  });
}

function sendOneLocation(req, res) {
  // res.json({
  //   status: 'ok',
  // })
  res.render('locations/location', {
    location: res.locals.location
  });
}

function sendCreateLocation(req, res) {
  // or write "locations/new" view and call "res.render('locations/new')"
  // res.json({
  //   status: 'ok',
  //   location: res.locals.newLocation
  // });
  const location = res.locals.newLocation;
  res.redirect(`locations/${location.locations_id}`);
}

function editLocation(req, res) {
  const location = res.locals.location;
  res.render(`locations/edit`, {
    location: res.locals.location
  })
}

function redirectToLocation(req, res) {
  // console.log('redirecting to /locations/' + res.locals.locations_id);
  res.json(res.locals);
 
  // res.render('locations', {
  //   locations: res.locals.locations_id
  // });
  res.render('locations', {
    locations: res.locals.locations_id
  });
}

function sendNewLocation(req, res) {
  res.render('locations/newLocation');
}

function destroyLocation(req, res) {
  res.redirect('locations/index');
}

module.exports = {
  // showApiCountries,
  sendLocations,
  sendOneLocation,
  sendCreateLocation,
  sendNewLocation,
  editLocation,
  redirectToLocation,
  destroyLocation
};