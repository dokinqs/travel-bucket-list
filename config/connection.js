// require pg-promise
const pgp = require('pg-promise')();

// require object, pass to pgp to connect to db
// Check export properties
const config = require('./dbConfig');
// Connect to database
const db = pgp(config);
// confirm proper configuration
console.log(db);
