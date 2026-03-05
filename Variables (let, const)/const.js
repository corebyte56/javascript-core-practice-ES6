// console.log(PI); // Uncaught ReferenceError: PI is not defined
// Variable declaration using const (temporal dead zone)
// Variables declared with const are also in a temporal dead zone until their declaration is processed. Accessing them before declaration will result in a ReferenceError.
// console.log(PI); // Uncaught ReferenceError: PI is not defined

// * In this example, trying to access the constant variable PI before its declaration will throw a ReferenceError because it is in the temporal dead zone until its declaration is processed.

const PI = 3.1416;
console.log(PI);
// PI = 3.14; // Uncaught TypeError: Assignment to constant variable.
// Variable declaration using const (block scope)
if (true) {
    const country = "USA";
    console.log(country); // Output: USA
}
// console.log(country); // Uncaught ReferenceError: country is not defined
// * In this example, trying to reassign a value to the constant variable PI will throw a TypeError because constants cannot be reassigned. Additionally, the variable country is block-scoped and cannot be accessed outside of the block it was declared in, resulting in a ReferenceError if we try to access it. */