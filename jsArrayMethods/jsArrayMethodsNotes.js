// Array.prototype.concat();

var items = [1, 2];
// returns new array [1,2,3,4,5, 'string', undefined]
var newItems = items.concat(3, 4, 5, 'string', undefined);
// returns new array [1,2,3,4,5,6]. Flattens the arrays.
var newItems = items.concat([3,4], [5,6]);

// Realstic example
var people = [
  {
    name: 'Shane'
  },
  {
    name: 'Sally'
  }
];

var people2 = [
  {
    name: 'Simon'
  },
  {
    name: 'Ben'
  }
];

people
  .concat(people2) //by the time we reach here, we are acting on the flattened array of four items.
  .forEach(function (person) {
    console.log(person.name);
  })

//Array.prototype.join();

var names = ['Shane', 'Osbourne', 'Kelly'];
// returns a string separated by the argument provided to join().
console.log(names.join('.'));

// Can also chain with other array methods.
var name = 'shane osbourne';
var upper = name
  .split(' ') // [shane, osbourne]
  .map(x => x.charAt(0).toUpperCase() + x.slice(0)) // [Shane, Osbourne]
  .join(' '); // Shane Osbourne

console.log(upper);

