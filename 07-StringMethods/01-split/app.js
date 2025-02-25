// 1. Basic Splitting by a Space

const str = "Mastering JavaScript Split Method";
console.log(str.split(""));
console.log(str.split(" "));

// 2. Splitting by a Comma

const csv = "apple,banana,grapes,orange";
console.log(csv.split(","));

// 3. Splitting by a Character and Limiting the Output

const sentence = "React-Redux-Toolkit-Next";
console.log(sentence.split("-", 2));