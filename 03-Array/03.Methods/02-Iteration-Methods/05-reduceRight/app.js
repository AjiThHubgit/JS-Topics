const arr = ['a', 'b', 'c'];
console.log(arr.reduceRight((acc, curr) => acc + curr, '')); // "cba"

const num = [5, 8, 9];
console.log(num.reduceRight((acc, curr) => acc + curr, 0));