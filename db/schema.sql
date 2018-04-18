\c location_db

DROP TABLE IF EXISTS locations;

CREATE TABLE locations (
  location_id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  username VARCHAR(255)
);

