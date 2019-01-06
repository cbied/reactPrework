/*
With what you have learned about using map and arrow functions, create a new array of objects with the following interface:

- sandwichName: STRING,
- timeExpires: DATE // all sandwiches expire after one day
- mostPopularTopping: STRING
- Random restaurant: STRING
*/

const sandwiches = [
  {
    name: 'Ham',
    toppings: [{ name: 'mustard', popularity: 4 }, { name: 'cheese', popularity: 3 }],
    availableResteraunts: ['Mary\s Place', 'Bob\'s BBQ'],
    made: new Date()
  },
  {
    name: 'Grilled cheese',
    toppings: [{ name: 'cheese', popularity: 4 }, { name: 'double cheese', popularity: 100 }, { name: 'tomatoe', popularity: 2 }],
    availableResteraunts: ['Bob\'s BBQ', 'John\'s best pizza'],
    made: new Date()
  }
]

const mapSandwiches = arr => {
 return arr.map(obj => {

// DONE
  // name of sandwiches
   let name = obj.name;

// DONE
  // expriation date
   let dayExpire = obj.made.getDate();
   let monthExpire = obj.made.getMonth();
   let dateExpire = `Day/Month: ${dayExpire + 1}/${monthExpire + 1}`;

// LOGIC IS NOT RIGHT
   // get name of most popular topping
  let mostPopularTopping;
  let [firstToppings, secondToppings, thirdToppings] = obj.toppings;
if (firstToppings.popularity > secondToppings.popularity) {
   mostPopularTopping = firstToppings.name
} else if (firstToppings.popularity < secondToppings.popularity) {
   mostPopularTopping = secondToppings.name
} else {
  mostPopularTopping = thirdToppings.name
}


// DONE
   // pick available resteraunts
   let resteraunts = obj.availableResteraunts;
   let randomResteraunts = Math.floor(Math.random(resteraunts) * resteraunts.length)
   let pickResteraunt;
  if(randomResteraunts > 0) {
    pickResteraunt = obj.availableResteraunts[0]
  } else {
    pickResteraunt = obj.availableResteraunts[1]
  }


   // displays each sandwich object
    let rObj = {
    name,
    dateExpire,
    mostPopularTopping,
    pickResteraunt
  };

   return rObj
})
}

mapSandwiches(sandwiches);
