// Write a function min that takes two arguments and returns their minimum.

// Your code here.
const min = (num1, num2) => {
    if (num1 < num2) {
        return num1
    } else {
        return num2;
    }
}
console.log("The minimum of the two numbers is:", min(0, 10));
// → 0
console.log("The minimum of the two numbers is:", min(0, -10));
// → -10