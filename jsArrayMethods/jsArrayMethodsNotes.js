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

// Array.prototype.slice()

var items = [1,2,3,4,5];
// takes a start and an end (non-including end)
var copy = items.slice(0, 1); // makes a shallow copy of items array. So objects are still referenced if in the items array
// returns the sliced array. This case returns [1]

// Array.prototype.sort()

var item = ['Shane', 'Sally', 'Isaac'];
items.sort(); // sorts alphabetically. But not numerically. Need to define sort parameters

// normal way of defining sort
items.sort((a, b) => {
  if (a -b === 0) {
    return 0;
  }
  if (a - b < 0) {
    return -1;
  }
  if (a -b > 0) {
    return 1;
  }
});
// shortened way. Exactly the same as above.
items.sort((a, b) => a - b);

// Realistic example
var lessons = [
  {
    title: 'JavaScript Array methods in depth - concat',
    views: 1000
  },
    {
    title: 'JavaScript Array methods in depth - slice',
    views: 1050
  },
    {
    title: 'JavaScript Array methods in depth - join',
    views: 1025
  }
];

var list = lessons
  .sort((a, b)) => b.views - a.views) // array sorted by views
  .map(x => '    <li>${x.title} (${x.views})</li>') // array of strings
  .join('\n'); //return a string with a new line between each
console.log(list);

// Array.prototype.filter

var items = [1,2,3,4,5,6];
var filtered = items.filter(x => x > 3);
console.log(filtered); // returns new array with items that fulfilll the parameter requirements [4,5,6];


