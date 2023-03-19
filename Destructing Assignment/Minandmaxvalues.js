// Minandmaxvalues.js

function findMinMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return { min, max };
  }
  const numbers = [5, 2, 7, 1, 9];
const result = findMinMax(numbers);
console.log(result); // { max: 9, min: 1 }
