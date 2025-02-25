// At the Beginning

const fruits = ["Apple", "Orange"];
fruits.unshift("Banana");
console.log(fruits);

// At the End

const cars = ["Maruthi", "BMW"];
cars.push("Suzuki");
console.log(cars);

// At the Given Position

const num1 = [1, 2, 3, 5, 6, 7];
const pos = 3;
const e1 = 4;

num1.splice(pos, 0, e1);
console.log(num1);