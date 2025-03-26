// At the Beginning

const demo1 = [0, 1, 2, 3, 4];
demo1.shift();
console.log(demo1);

// At the End

const demo3 = [4, 3, 2, 1, 0];
demo3.pop();
console.log(demo3);


// At the Given Position

const demo2 = [0, 1, 2, 3, 3, 4, 5, 6];
demo2.splice(3, 1);
console.log(demo2);



const demo4 = [0, 1, 3, 2, 3, 4, 5, 6];
const pos = 3;
const indx = demo4.indexOf(pos);//2
if (indx != -1) {
    demo4.splice(indx, 1)
} else {
    console.log("Number Not Excist");

}
console.log(demo4);


let a = [10, 20, 30, 20, 40];
let x = 20;
let idx = a.lastIndexOf(x);
if (idx !== -1) {
    a.splice(idx, 1);
}
console.log(a);


let fruits = ["Apple", "Mango", "Banana", "Apple", "Kiwi"];
const result = fruits.filter((list) => list !== "Apple");
console.log(result);




// https://www.geeksforgeeks.org/javascript-array-programming-examples/
