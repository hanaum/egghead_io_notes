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

// Array.prototype.indexOf();

var family = ['Shane', 'Sally', 'Isaac', 'Kittie'];
console.log(family.indexOf('Kittie')); // 3 -> the index of the array
// when search fails, always returns -1;

var family2 = ['Shane', 'Kittie', 'Sally', 'Isaac'];
console.log(family.indexOf('Kittie', 2)); // returns -1
// the second parameter states which index the indexOf function should start searching from. Kittie is in index 1

// Realistic example.
var whitelist = ['.css', '.js'];
var events = [
  {
    file: 'css/core.css'
  }, 
  {
    file: 'js/app.js'
  },
  {
    file: 'index.html'
  }
];
var filtered = events.filter(event => { // filter will return an array that matches the requirements
  var ext = require('path').extname(event.file); // grab ext of each object
  return whitelist.indexOf(ext) > -1; // return if the ext exists in whitelist (> -1)
})
console.log(filtered); // [ {file: 'css/core.css'}, {file: 'js/app.js'}]

