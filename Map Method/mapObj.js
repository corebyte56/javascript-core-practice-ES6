// Example with objects
let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 28 },
    { name: "Charlie", age: 32 }
];
let userNames = users.map(user => user.name);
console.log(userNames); // Output: ["Alice", "Bob", "Charlie"]