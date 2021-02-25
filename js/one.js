/*
This is the beginning of my one.js file
this is a multiline js comment
it stars with a forward slask, followed by an asterisk
and it is closed by an asterisk and forwards slash
*/

/***** variable declaration */
// this is a single line comment.
// cmd +  / || ctrl +/

// var myName = 'Alex';
let hisName = 'Alejandro';
const newName = 'Al'; //the preference is we will use single line comments.

// Another example of variable initialization with
// commas and semi-colons
let nameOne = 'alex'
    nameTwo = 'Anna'
    nameThree = 'Liz'

//This is my console example
console.log(hisName, newName, "My name is Merhawit");

// This is my alert example
// alert('Hey, you are awesome!');

// Testing confirm
// confirm("Are you 18 or older?");

// Prompt example
// prompt('Enter your age!');

// console.log(alert('Testing the alert value'));

// console.log(confirm('are you 18 or older?'));

// console.log(prompt('are you 18 or older?'));

/***** Arithmetic Operators */
let total = 1 + 5 - 100 * 889;

console.log('my value before increment is: ', total);
 ++total;
 ++total;

// --total;

console.log('my new total is: ', total);

// alert('my total is: ', total);

/***** Assignment Operators */
let x = 'y';
let one = 1;
// += example
one += 6;

// one = one + 6;
console.log('what is one?', one)

/***** String Operators */
let firstString = "First String";
let secondString = "Second String";

// three strings
let smushed = firstString + ' ' + secondString;
console.log('what is smushed?', smushed)

// concatenat a strig with a number?
let myString = "this is a string";
let myNumber = 100;

let concatStringNumber = myString + myNumber;
console.log(concatStringNumber);

// concat number string with regular number
let numberString = "10";
let realNumber = 10;
console.log(numberString + realNumber);

/***** comparison operators */
let value1 = 100;
let value2 = 100;

console.log('Are they equal? ', value1 == value2); // this result is true
console.log('Are they equal? ', value1 === value2); // this result is false

let value3 = 20;
let value4 = 30;
console.log('is value3 greater than value4?', value3 < value4);

