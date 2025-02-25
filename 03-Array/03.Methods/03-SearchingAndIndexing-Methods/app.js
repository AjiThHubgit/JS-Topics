// find(): Returns the first element that satisfies the condition.

const students = [
    {
        id: 1,
        name: "John Doe",
        standard: "10th",
        marks: [85, 90, 78, 92, 88],
    },
    {
        id: 2,
        name: "Emma Smith",
        standard: "9th",
        marks: [75, 80, 82, 89, 85],
    },
    {
        id: 3,
        name: "Liam Johnson",
        standard: "11th",
        marks: [95, 87, 91, 88, 94],
    },
    {
        id: 4,
        name: "Sophia Brown",
        standard: "10th",
        marks: [70, 68, 75, 80, 72],
    },
    {
        id: 5,
        name: "Noah Davis",
        standard: "12th",
        marks: [88, 92, 85, 90, 87],
    },
];
const getId = 3;
const result = students.find(list => list.id === getId);
console.log(result, "find Method");

// findIndex(): Returns the index of the first element that satisfies the condition.

const getId1 = 3;
const result1 = students.findIndex(list => list.id === getId1);
console.log(result1, "findIndex Method");

// includes(): Checks if an array includes a certain value.

const getId2 = 3;
const result2 = students.includes(list => list.id === getId2);
console.log(result2, "includes Method");

// indexOf(): Returns the first index of a value.
const numArr = [1, 5, 6, 8, 10];
const result3 = numArr.indexOf(8);
console.log(result3, "indexOf Method");

// lastIndexOf(): Returns the last index of a value.

const numArr1 = [1, 5, 6, 8, 10, 2, 8];
const result4 = numArr1.lastIndexOf(8);
console.log(result4, "lastIndexOf Method");