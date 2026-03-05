// Variable declaration using var (hoisting)
// Variables declared with var are hoisted to the top of their scope and initialized with undefined.

// ** In this example, we can access the variables before they are declared, but they will have the value of undefined until they are assigned a value.

// Accessing variables before declaration
console.log(name); // Output: undefined
console.log(age); // Output: undefined
console.log(isStudent); // Output: undefined

// Variable declaration using var   

var name = "John";
var age = 30;
var isStudent = false;
console.log(name); // Output: John
console.log(age); // Output: 30
console.log(isStudent); // Output: false