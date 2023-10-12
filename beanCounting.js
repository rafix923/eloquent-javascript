// Bean Counting
/*
You can get the Nth character, or letter, from a string by writing "string"[N]. 
The returned value will be a string containing only one character (for example, "b"). 
The first character has position 0, which causes the last one to be found at position string.length - 1. 
In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number 
that indicates how many uppercase “B” characters there are in the string.
*/
const countBs = (string) => {
    if (string.includes("B")) {
        return string.split('').filter((char) => char === 'B').length;
    }
}
console.log("A letra 'B' aparece:", countBs("BBC"), "vezes.");
// -> A letra 'B' aparece 2 vezes.

/*
Next, write a function called countChar that behaves like countBs, except it takes a second argument 
that indicates the character that is to be counted (rather than counting only uppercase “B” characters). 
Rewrite countBs to make use of this new function.
*/
let char = "k";
const countChar = (string, char) => {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == char) {
            count++;
        }
    }
    return count;
}

const countBsUpdated = (string) => {
    return countChar(string, "B");
}

console.log("A letra 'B' aparece", countBsUpdated("BBC"), "vezes.");
// -> A letra 'B' aparece 2 vezes.
console.log(`A letra ${char} aparece`, countChar("kakkerlak", "k"), "vezes.");
// -> A letra k aparece 4 vezes.