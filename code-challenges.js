// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code:
    // create a function named boilingPoint that determines if a given temperature is below, at, or above boiling point
    // input will take one argument named temperature
    // boiling point is determined as 212 degrees
    // write conditional statement that contains 3 conditions:
            // temperature strictly equals boiling point, returns corresponding string
            // temperature is lower than boiling point, returns corresponding string
            // temperature is above boiling point, returns corresponding string


const temp1 = 42
const temp2 = 350
const temp3 = 212

const boilingPoint = (temp) => {
    const boiling = 212
    if (temp === boiling) {
        return `${temp} is at boiling point`
    } else if (temp < boiling) {
        return `${temp} is below boiling point`
    } else if (temp > boiling) {
        return `${temp} is above boiling point`
    }
}

console.log(boilingPoint(temp1));
console.log(boilingPoint(temp2));
console.log(boilingPoint(temp3));

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code:
    // combine two arrays using the method .concat()
    // set the combined arrays into a variable
    // get the length of the combined arrays

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

const combinedArr = myNumbers1.concat(myNumbers2)
const combinedLength = combinedArr.length

console.log(combinedArr);
console.log(combinedLength);

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ohcE"

// Pseudo code:
    // convert the string into an array using .split()
    // reverse order of values in array using .reverse()
    // convert the array back into a string using .join()
    // input: "Echo 2022"
    // expected output: "2202 ohcE"

const currentCohort = "Echo 2022"

let charArr = currentCohort.split("")
charArr.reverse()
let reversedCohort = charArr.join("")

console.log(currentCohort);
console.log(charArr);
console.log(reversedCohort);

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code:
    // create a for loop to iterate through an array
    // write if/else statements that determine if a number is even or odd
    // 1st condition: number is odd, returns "odd"
    // 2nd condition: number is even, returns "even"

const myArray = [13, 34, 5, 10, 27, 42]

 for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] % 2 === 1) {
        console.log("odd")
    } else if (myArray[i] % 2 === 0) {
        console.log("even");
    }
 }


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code:
    // create a function named findDifference that subtracts the smaller number the the larger number
    // write an if/else statement w/ 2 conditions:
        // 1st number is larger than the 2nd
        // 2nd number is larger than the 1st
        // each will return the difference of the larger number minus the smaller number

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

const findDifference = (num1, num2) => {
    if (num1 > num2) {
        return num1-num2
    } else if (num2 > num1) {
        return num2 - num1
    }
}

console.log(findDifference(number1, number2));
console.log(findDifference(number3, number4));
