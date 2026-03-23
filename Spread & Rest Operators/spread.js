// Spread Operator  
// The spread operator allows an iterable such as an array or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. It is denoted by three dots (...).
// The spread operator can be used in various contexts, such as function calls, array literals, and object literals.
// Example 1: Using spread operator in function calls
function sum(a, b, c) {
    return a + b + c;
}
let numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6