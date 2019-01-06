// For maximum flexibility and convenience, we are allowed to write arrow functions
// in various ways.  As engineers become more comfortable with the arrow function
// they use the difference styles to help keep their code concise and simpler to reason about.
//
// In this exercise spend some time writing arrow functions in various ways.  You
// are welcome to write as many examples as you like, but at least complete this list.
//
// (1x) Arrow function with no arguments
// (2x) Arrow function with a single argument
// (2x) Arrow function that returns an object

const firstFunc = () => 'hello'
firstFunc()

const secondFunc = arg => arg
secondFunc(2)

const thirdFunc = arg1 => arg1
thirdFunc(3)

const fourthFunc = (arg1, arg2) => arg1 + arg2
fourthFunc(2,2)

const fifthFunc = (arg3, arg4) => arg3 * arg4
fifthFunc(2,3)

// Using an arrow function, refactor the code to fix the console logged value of `otherBits`, fixing the TypeError.
// const example = {
//   stuff: [12, 3, 4, 5, 6, 7],
//   otherBits: [],
//   addStuff: function() {
//
//     this.stuff.forEach(function(thing) {
//       this.otherBits.push(thing)
//     })
//
//
//   }
// }
//
// example.addStuff()
// console.log(example.otherBits)

const example = {
  stuff: [12, 3, 4, 5, 6, 7],
  otherBits: [],
  addStuff: () => {

    this.stuff.forEach(thing => {
      this.otherBits.push(thing)
    })


  }
}

example.addStuff()
console.log(example.otherBits)
