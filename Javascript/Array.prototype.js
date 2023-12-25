// map
Array.prototype.customMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

// reduce
Array.prototype.customReduce = function (callback, initialValue) {
  let accumulator = initialValue === undefined ? this[0] : initialValue;
  const startIndex = initialValue === undefined ? 1 : 0;
  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

// filter
Array.prototype.customFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// sort
Array.prototype.customSort = function (compareFunction) {
  const arrayCopy = [...this];
  return arrayCopy.sort(compareFunction);
};


// Application of Custom Methods:
// Using Custom Methods on an Array of Fruits:
const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

const fruitLengths = fruits.customMap((fruit) => fruit.length);
console.log("Fruit Lengths:", fruitLengths);

const concatenatedFruits = fruits.customReduce(
  (acc, fruit) => acc + ", " + fruit
);
console.log("Concatenated Fruits:", concatenatedFruits);

const longFruits = fruits.customFilter((fruit) => fruit.length > 6);
console.log("Long Fruits:", longFruits);

const sortedFruits = fruits.customSort((a, b) => a.localeCompare(b));
console.log("Sorted Fruits:", sortedFruits);
