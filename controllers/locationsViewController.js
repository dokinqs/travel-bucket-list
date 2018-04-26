function showApiCountries(req, res) {
  res.render('locations/mylist', {
    data: res.locals.data
  });
}

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
  location = res.locals.location;
  res.redirect(`locations/${location.locations_id}`);
}

function sendNewLocation(req, res) {
  res.render('locations/newLocation', {
    locations: res.locals.locations
  });
}

function editLocation(req, res) {
  location = res.locals.location;
  res.render(`locations/edit`, {
    location: res.locals.location
  })
}

function destroyLocation(req, res) {
  res.redirect('locations/index');
}

module.exports = {
  showApiCountries,
  sendLocations,
  sendOneLocation,
  sendCreateLocation,
  sendNewLocation,
  editLocation,
  destroyLocation
};