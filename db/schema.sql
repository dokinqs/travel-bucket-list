-- \c locations_db

DROP TABLE IF EXISTS locations CASCADE;
DROP TABLE IF EXISTS favs CASCADE;

CREATE TABLE locations (
  locations_id SERIAL PRIMARY KEY,
  cname VARCHAR(80),
  region VARCHAR(80),
  -- CurrencyName VARCHAR(80),
  flagpng VARCHAR(200)
);

CREATE TABLE favs (
  fav_id SERIAL PRIMARY KEY,

  locations_id INT NOT NULL REFERENCES locations(locations_id)
);