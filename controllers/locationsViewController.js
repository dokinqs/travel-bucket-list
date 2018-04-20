function sendLocations(req, res) {
  console.log('I send successful responses');
  res.json({
    status: 'ok',
    locations: res.locals.locations
  });
}

function sendOneLocation(req, res) {
  res.json({
    status: 'ok',
    location: res.locals.location
  });
}

function sendCreateLocation(req, res) {
  res.json({
    status: 'ok',
    location: res.locals.newLocation
  });
}

module.exports = {
  sendLocations: sendLocations,
  sendOneLocation: sendOneLocation,
  sendCreateLocation: sendCreateLocation
};