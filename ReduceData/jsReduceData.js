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

