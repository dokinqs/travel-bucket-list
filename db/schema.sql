-- \c locations_db

DROP TABLE IF EXISTS locations;

CREATE TABLE locations (
  locations_id SERIAL PRIMARY KEY,
  cname VARCHAR(80),
  region VARCHAR(80),
  -- CurrencyName VARCHAR(80),
  flagpng VARCHAR(200)
);