const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, currentItem) => {
    return total += currentItem;
  }, 0)
};

const multiply = function(array) {
  return array.reduce((total, currentItem) => {
    return total *= currentItem;
  }, 1)
};

const power = function(number, power) {
  let result = number;
	for (let i = 1; i < power; i++) {
    result *= number;
  }
  return result;
};

const factorial = function(number) {
	let result = 1;
  for (let i = 1; i < number + 1; i++) {
    result *= i;
  }
  return result;
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
