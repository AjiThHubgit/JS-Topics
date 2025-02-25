var x = 7;
function getName() {
    console.log("Namastae Javascript....!");
}
getName();

console.log(x);

console.log(a); // Uncaught ReferenceError: Cannot access 'a' before initialization
let a;
console.log('a is = ', a); //undefined

const age = 24;
console.log('age is = ', age); //undefined

console.log('addNumber', addNumber);
const addNumber = (x, y) => {
    const ans = x + y;
    return ans;
}

const addNum = addNumber(10, 25);
console.log('addNum', addNum);

