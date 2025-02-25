// 1. Basic Array Reversal  

const numbers = [1, 2, 3, 4, 5];
const reverseNumber = numbers.reverse();
console.log(reverseNumber);

// 2. Reversing a String by Converting it to an Array

const word = "hello";
const reverseWord = word.split("").reverse().join("");
console.log(reverseWord);

// 5. Reversing an Array of Objects

const users = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];

const reverseUsers = users.reverse();

console.log(reverseUsers); // Output: [ { name: 'Charlie' }, { name: 'Bob' }, { name: 'Alice' } ] 