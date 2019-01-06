/* Using array.prototype.filter, create a new array called sandwichesWithTwoToppings that only contains
 sandwiches that have two or fewer toppings. */

 const sandwiches = [
  {
    name: 'Ham',
    toppings: [ 'mustard', 'cheese' ]
  },
  {
    name: 'Grilled cheese',
    toppings: [ 'cheese', 'tomatoe' ]
  },
  {
    name: 'Peanut butter and jelly',
    toppings: [ 'peanut butter', 'jelly', 'bananna' ]
  }
]

const sandwichesWithTwoToppingsFilter = arr => {
  return arr.filter(val => val.toppings.length < 3)
 }

sandwichesWithTwoToppingsFilter(sandwiches)
