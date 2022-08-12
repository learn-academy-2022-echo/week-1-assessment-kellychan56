// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: My answer was correct. The variable named cohort is assigned with the string "LEARN 2022". By using the length property on cohort, it counts all the characters within the string and logs a value of 10. When counting the length of a string, spaces are counted as part of the length.


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: My answer was correct. The variable named greeting is assigned the string "Hello World!" When using the number 4 within brackets after greeting, it indicates the index of 4. Indexes start counting from 0. Since greeting is a string, it will log the character of the 5th character of the string, which is o.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: My answer was correct. Two variables are assigned here: languages to an array and index to the number 1. In arrays, the indexes refer to each value in the array rather than characters with strings. Counting from 0, the value at index 1 of the array would be Ruby.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: an error would occur
// b) Verify and explain: "weekendDays.toUpperCase() is not a function" appeared. The built-in method .toUpperCase() is used for strings. Since weekendDays is an array, the method could not be applied to it, and an error occurred. One way to make the values in weekendDays upper case is to use an index: weekendDays[0].toUpperCase() or weekendDays[1].toUpperCase().


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: My answer was correct. The operator typeof tells us what data type the following input is. By applying the length property to dataTypes, the value of 3 is returned. Since 3 is a number, that is what typeof tells us.
