function removeDuplicates(arr) {
    return new Set(arr);
  }
  const numbers = [1, 2, 3, 4, 5, 1, 2, 3];
  const uniqueNumbers = [...removeDuplicates(numbers)];
  console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
    