/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //
const sushiHana = {
  name: "SushiHana",
  cuisines: ["Japanese", "Sushi"],
  numberOfStars: 3.5,
  favorited: true,
  location: "Atlanta, GA",
  type: "Restaurant",
  address: {
    street: "123 Sushi Lane",
    city: "Atlanta",
    state: "GA",
    zipCode: "30301"
  },
  acceptsReservations: true,
};

console.log(sushiHana);


sushiHana.numberOfStars = 4.5;
sushiHana.favorited = false;
sushiHana.cuisines.push("Asian Fusion");

console.log(sushiHana);

//Now, let's make sure our code can handle a request for any object key. Write a function called `retrieveProperty` that intakes an object and string key. It should return the value associated with that key. If the input property does not exist on the object, return a string that says, `"The information you requested does not exist."`
function retrieveProperty(obj, key) {
  if (obj.hasOwnProperty(key)) {
    return obj[key];
  } else {
    return "The information you requested does not exist.";
  }
}

console.log(retrieveProperty(sushiHana, "name")); 
console.log(retrieveProperty(sushiHana, "cuisines")); 
console.log(retrieveProperty(sushiHana, "reviews"));

Object.keys(sushiHana).forEach(key => {
  console.log(`${key}: ${retrieveProperty(sushiHana, key)}`);
});

console.log(sushiHana.hasOwnProperty("nickName")); 
console.log(sushiHana.hasOwnProperty("state"));