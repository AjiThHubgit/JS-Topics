// Reduces the array to a single value using an accumulator.

const numArr = [1, 3, 5, 7, 8, 3];
const total = numArr.reduce((acc, curr) => acc + curr, 0);
console.log(total);