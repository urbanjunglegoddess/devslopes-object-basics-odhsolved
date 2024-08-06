const pizzaPlacesObject = require("./pizzaPlaces");

/*
Exercise Three: Looping with Objects! 
*/

function getFavoritePlaces(pizzaPlaces) {
  const favePlaces = [];

  for (pizzaPlace in pizzaPlaces) {
    const current = pizzaPlaces[pizzaPlace];
    if (current.favorited) {
      favePlaces.push(pizzaPlace);
    }
  }
  return favePlaces;
}

// console.log(getFavoritePlaces(pizzaPlaceObject));

function cheapestTopping(pizzaPlaces, topping) {
  let cheapestPlace = null;
  let cheapestPrice = Infinity;

  for (const [placeName, placeDetails] of Object.entries(pizzaPlaces)) {
    const currentPrice = placeDetails.pizzaToppings[topping];

    if (currentPrice !== undefined && currentPrice < cheapestPrice) {
      cheapestPlace = placeName;
      cheapestPrice = currentPrice;
    }
  }

  return cheapestPlace;
}

// console.log(cheapestTopping(pizzaPlacesObject, "pepperoni"));

function averageStarRating(pizzaPlaces) {
  let totalStars = 0;
  let numberOfPlaces = 0;

  for (const placeName in pizzaPlaces) {
    if (pizzaPlaces[placeName]) {
      totalStars += pizzaPlaces[placeName].numberOfStars;
      numberOfPlaces++;
    }
  }

  return (totalStars / numberOfPlaces).toFixed(1);
}

// console.log(averageStarRating(pizzaPlacesObject));

function getMostCommonCuisine(pizzaPlaces) {
  const cuisineCounts = {};

  for (const placeDetails of Object.values(pizzaPlaces)) {
    for (const cuisine of placeDetails.cuisines) {
      cuisineCounts[cuisine] = (cuisineCounts[cuisine] || 0) + 1;
    }
  }

  let mostCommonCuisine = null;
  let maxCount = 0;

  for (const [cuisine, count] of Object.entries(cuisineCounts)) {
    if (count > maxCount) {
      mostCommonCuisine = cuisine;
      maxCount = count;
    }
  }

  return mostCommonCuisine;
}

// console.log(getMostCommonCuisine(pizzaPlacesObject));
