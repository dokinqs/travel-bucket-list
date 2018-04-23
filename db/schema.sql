\c locations_db

DROP TABLE IF EXISTS locations;

-- CREATE TABLE locations (
--   location_id SERIAL PRIMARY KEY,
--   content TEXT NOT NULL,
--   username VARCHAR(255)
-- );

CREATE TABLE locations (
id SERIAL PRIMARY KEY,
CName VARCHAR(80),
Alpha2Code VARCHAR(80),
Alpha3Code VARCHAR(80),
NativeName VARCHAR(80),
Region VARCHAR(80),
SubRegion VARCHAR(80),
Latitude VARCHAR(80),
Longitude VARCHAR(80),
Area INTEGER,
NumericCode INTEGER,
NativeLanguage VARCHAR(80),
CurrencyCode VARCHAR(80),
CurrencyName VARCHAR(80),
CurrencySymbol VARCHAR(80),
Flag VARCHAR(200),
FlagPng VARCHAR(200)
);