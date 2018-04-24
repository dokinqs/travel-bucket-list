# Project name: 
Travel Bucket List
https://fierce-reaches-20888.herokuapp.com/

## Project description: 
CRUD app, wish list of popular travel locations with rating and description

## Wireframe: 
![wireframe](TravelWireframe.JPG)

## User stories: 
Overview: User wants to go on a vacation to anywhere outside the US. User wants to save a list of places they want to visit, with notes on things to do, sorted by a rating out of five stars.

C: User can add a country location to their bucket list. The database would populate the country entry with details like native language, currency name, currency symbol, and country flag image.

R: User can look at a post-it style grid view of countries they have saved on their bucket list. 

U: User can edit the rating on each country and the list would automatically and delete destinations.

D: User can remove a country that they don't want to visit anymore or have visited since putting it on the wish list. 

## Technologies: 
Javascript, PSQL, HTML, CSS

## API: 
CountryAPI

## Modules: 
Express, Nodemon, EJS, Morgan, Body-parser, Pg-promise, Method-override

## Code snippet:
function destroyLocation(id) {
  const queryPromise = db.none(`
  DELETE FROM locations 
  WHERE locations_id = $1
  `, id);
  return queryPromise;
}   

## Plan to fix/ features to add:
log in authorization and authentication
color code notes by location 
order notes by rating
add Google API

## Instructions for downloading the code and running it on localhost:
git clone ((http url here))
cd travel-bucket-list
npm run dev
