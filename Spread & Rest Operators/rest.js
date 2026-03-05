// Rest operator allows us to represent an indefinite number of arguments as an array. It is denoted by three dots (...).
// The rest operator is used in function parameters to gather all remaining arguments into an array.

function showNumbers(...rest) {

    // The rest parameter 'rest' will contain all the arguments passed to the function as an array.
    // For example, if we call showNumbers(1, 2, 3), the rest parameter will be an array [1, 2, 3].

    console.log(rest);
}
// In this example, the showNumbers function takes any number of arguments and gathers them into an array called rest. When we call showNumbers with multiple arguments, it will log the array of those arguments to the console.
showNumbers(1, 2, 3, 4, 5);

// The rest operator can also be used in destructuring assignments to gather the remaining elements of an array or properties of an object into a new array or object.

