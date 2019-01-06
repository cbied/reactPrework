/* Use what you have learned about arrow functions and array extra methods to parse out the name fields of all of the sandwiches in the collection.

For this task please console log the result before submitting.

TIP:
You will need to use map, bonus points for using an arrow function.
*/

const sandwiches = [
  { name: 'Ham', toppings: ['mustard'] },
  { name: 'Grilled cheese', toppings: ['cheese', 'cheese', 'cheeeeese'] }
];

const sandwichNames = arr => arr.map(obj => obj.name);

console.log(sandwichNames(sandwiches));
