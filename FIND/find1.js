const users = [
    { name: "Rahim", age: 18 },
    { name: "Karim", age: 22 },
    { name: "Sakib", age: 25 }
];

let result = users.find(user => user.age > 20 && user.name === "Sakib");

console.log(result);
