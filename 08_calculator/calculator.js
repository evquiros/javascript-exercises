const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b
};

const sum = function(arr) {
	return arr.reduce((total, accum) => total + accum, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, accum) => total * accum)
};

const power = function(num, power) {
	return Math.pow(num, power)
};

const factorial = function(factorial) {
  let total = 1

  if (factorial == 0) {
    return 1
  }

  for (let i = 1; i <= factorial; i++) {
    total *= i
  }

  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
