// function showApiCountries(req, res) {
//   res.render('locations/mylist', {
//     data: res.locals.data
//   });
// }

function sendLocations(req, res) {
  res.render('locations/index', {
    locations: res.locals.locations
  });
}

function sendOneLocation(req, res) {
  res.render('locations/location', {
    location: res.locals.location
  });
}

function sendCreateLocation(req, res) {
  let location = res.locals.newLocation;
  res.redirect(`locations/${location.locations_id}`);
}

function sendNewLocation(req, res) {
  res.render('locations/newLocation');
}

function editLocation(req, res) {
  let location = res.locals.location;
  res.render(`locations/edit`, {
    location: res.locals.location
  })
}

function redirectToLocation(req, res) {
  console.log('redirecting to /locations/' + res.locals.locations_id);
  res.render('locations', {
    locations: res.locals.locations
  });
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