// console.log(name); // Uncaught ReferenceError: name is not defined
// Variable declaration using let (temporal dead zone)
// Variables declared with let are not hoisted in the same way as var. They are in a "temporal dead zone" from the start of the block until the declaration is processed. Accessing them before declaration will result in a ReferenceError.
// console.log(age); // Uncaught ReferenceError: age is not defined
// console.log(isStudent); // Uncaught ReferenceError: isStudent is not defined

// * In this example, trying to access the variables before they are declared will throw a ReferenceError because they are in the temporal dead zone until their declaration is processed.

let name = "Alice";
console.log(name); // Output: Alice
name = "Bob";
console.log(name); // Output: Bob
// Variable declaration using let (block scope)
// Variables declared with let are block-scoped, meaning they are only accessible within the block they are defined in.
if (true) {
    let city = "New York";
    console.log(city); // Output: New York
}
// console.log(city); // Uncaught ReferenceError: city is not defined

