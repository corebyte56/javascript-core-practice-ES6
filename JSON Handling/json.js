obj = { name: "John", age: 30, city: "New York" };
// Convert JavaScript object to JSON string
jsonString = JSON.stringify(obj);
console.log(jsonString);

// Convert JSON string back to JavaScript object
jsonString = '{"name":"John","age":30,"city":"New York"}';
obj = JSON.parse(jsonString);
console.log(obj);

// Example of using JSON with an array of objects
let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 28 },
  { name: "Charlie", age: 32 }
];
// Convert array of objects to JSON string
jsonString = JSON.stringify(people);
console.log(jsonString);