/*
With what you know about reduce, create a new collection from the sandwiches collection that only contains the names of the sandwiches.

For example:
const sandwichNames = ['Ham', 'Grilled cheese']
*/

const sandwiches = [
  {
    name: 'Ham',
    toppings: ['mustard', 'cheese']
  },
  {
    name: 'Grilled cheese',
    toppings: ['cheese', 'cheese', 'cheeeese']
  }
];


let sandwichNames = sandwiches.reduce(function(accumulator, currentValue) {
  return [...accumulator, currentValue.name];
}, []);

sandwichNames
