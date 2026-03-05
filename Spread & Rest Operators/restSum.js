// Rest Operator Example: Function to sum an arbitrary number of arguments
// The rest operator allows us to represent an indefinite number of arguments as an array. It is denoted by three dots (...).
// In this example, we will create a function called restSum that takes any number of numerical arguments and returns their sum.

function restSum(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}
// The rest parameter 'numbers' will contain all the arguments passed to the function as an array. We then iterate over this array and calculate the sum of all the numbers. Finally, we return the sum.

// Now we can call the restSum function with any number of arguments to get their sum.
let result = restSum(10, 20, 30, 40, 50);

console.log(result);