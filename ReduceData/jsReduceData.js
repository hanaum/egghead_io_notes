var data = [15,3,20];

var reducer = function(accumulator, item) {
  return accumulator + item;
};
var initialValue = 0;

var total = data.reduce(reducer, initialValue); // takes the reduced function and an initial value.
// total = 38