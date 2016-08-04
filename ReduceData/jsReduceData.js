// Tutorial example 1
var data = [15,3,20];

var reducer = function(accumulator, item) {
  return accumulator + item;
};
var initialValue = 0;

var total = data.reduce(reducer, initialValue); // takes the reduced function and an initial value.
// total = 38

// Tutorial example 2
var votes = [
  'angular',
  'angular',
  'react',
  'react',
  'angular',
  'ember',
  'react',
  'vanilla'
];

var initialValue = {};
var reducer = function(tally, vote) {
  if (!tally[vote]) {
    tally[vote] = 1;
  } else {
    tally[vote] = tally[vote] + 1;
  }
  return tally;
}

var result = votes.reduce(reducer, initialValue);
console.log(result);

// Tutorial example 3
var data = [1,2,3];
var doubled = data.reduce(function(acc, value) {
  acc.push(value * 2);
}, []);

var doubleMapped = data.map(function(item) {
  return item * 2;
})
// both of the above functions do the same thing
console.log(doubled); // [2,4,6]

// reduce is faster
var data2 = [1,2,3,4,5,6,7,8];
var evens = data2.reduce(function(acc, value) {
  if (value % 2 === 0) {
    acc.push(value * 2);
  }
  return acc;
}, []);

// Tutorial example 4

function reducer(acc, val, index, array) { // can two additional parameters. Current index of parent array and the array itself.
  var intermediaryValue = acc + value;
  if (index === array.length - 1) { // once we've reached the last element in the array, we return the mean.
    return intermediaryValue / array.length;
  }
  return intermediaryValue; // else, we just return the sum.
}

var data = [1,2,3,4,5,3,1];
var mean = data.reduce(reducer, 0);
// 2.75
console.log(mean);





