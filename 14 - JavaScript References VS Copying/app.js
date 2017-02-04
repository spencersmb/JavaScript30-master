// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);

age = 200;
console.log(age, age2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;

// You might think we can just do something like this:
team[3] = 'Lux';

// however what happens when we update that array?
// now here is the problem!
console.log(players);
console.log(team);


// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
// one day
// or create a new array and concat the old one in
const team2 = [].concat(players);
team2[3] = 'spencer';
console.log(team2);
console.log(players);

// or use the new ES6 Spread
const team3 = [...players];
// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};
// and think we make a copy:
const captain = person;
captain.number = 99;
console.log(person);

// how do we take a copy instead?
//Works only one level deep
const capt2 = Object.assign({}, person, {number: 109});
console.log(person);
console.log(capt2);

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
