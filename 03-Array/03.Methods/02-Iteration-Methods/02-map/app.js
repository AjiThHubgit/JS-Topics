// Creates a new array by applying a function to each element.

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

const newArr = students.map(list => list);
console.log(newArr, "newArr");

const updateArr = newArr.map(list => {
    if (list.id === 2) {
        list.name = "Ajith";
        return list;
    } else {
        return list;
    }
});

console.log(updateArr, 'updateArr');
console.log(newArr, 'newArr');
