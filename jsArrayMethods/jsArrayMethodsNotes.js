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