-- \c locations_db

DROP TABLE IF EXISTS locations CASCADE;
DROP TABLE IF EXISTS favs CASCADE;

CREATE TABLE locations (
  locations_id SERIAL PRIMARY KEY,
  cname VARCHAR(80),
  region VARCHAR(80),
  currencyname VARCHAR(80),
  flag VARCHAR(200)
);

CREATE TABLE favs (
  favs_id SERIAL PRIMARY KEY,
  note VARCHAR(80),
  locations_id INT NOT NULL REFERENCES locations(locations_id)
);