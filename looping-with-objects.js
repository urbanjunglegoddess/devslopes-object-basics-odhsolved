// Module 3: Looping With Objects

// Problem: Objects have keys that we set, not pre-determined indices like Arrays.
// Objects are not inherently iterable. They do not store key-values in a fixed sequence.
// We still have tools for iterating over objects, however.

const devslopesDiner = {
  name: "Devslopes Diner",
  cuisine: "American",
  address: "555 Main Street",
  avgPrice: 15,
  reviews: [{}, {}, {}],
  ratings: [9, 7, 10, 5],
  passedInspection: true,
};

// for... in
// Iterates over all the properties of the objects, include anything the object inherits.
// Use keys of an object in iteration. We do it when we want to iterate over EVERY property in an object.

// for (const key in devslopesDiner) {
//   console.log(key, devslopesDiner[key]);
// }

const fruits = ["apple", "banana", "cherry"];

for (let index in fruits) {
  console.log(index, fruits[index]);
}

// for... of
// Iterate over the values of an object, array, or other special object
// This is for when we want to iterate over just the keys/values that we placed in the object.

// for (const key of Object.keys(devslopesDiner)) {
//   console.log(key, devslopesDiner[key]);
// }

// Object.entries(), Object.values()
// More control, we get to decide what keys are used in iteration
// This is better option for iterating over complex objects and controlling
// which keys we want to look at
