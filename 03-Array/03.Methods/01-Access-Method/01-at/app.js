// Returns the element at the specified index.

const arr = [10, 20, 30];
console.log(arr.at(2));

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

console.log(students.at(2));