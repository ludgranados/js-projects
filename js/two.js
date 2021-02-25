/***
 * JS: Part Two
 * - Operators
 * - Control Flow
 * - Functions
 */
// Comparison Operators
// let value1 = 35;
// let value2 = '35';
// let value3 = 500;

// console.log('Does Value 1 not equal value 2? ', value1 !== value2); //true

// console.log('is value 1 greater than or equal to value 2? ', value1 >= value2); //false

// Logical &&
//in order for the result to be true, all conditions must be met with true
// console.log(
//     'are my two conditions true or false ',
//     value1 > value2 && value1 !== value2
// );

// Logical ||
//in order for the result to be true, all conditions must be met with true
// console.log(
//     'Logical ||: Are my two conditions true or false ',
//     value1 > value2 || value1 !== value2
// );

// Combining Logical || and Logical &&
// console.log(
//     'Combining ||: &&:" What is the result ',
//     (value1 > value2 || value1 !== value2) && value2 > value3
// );

/***** Control Structures */

// If/Else

// let numberOne = 100;
// let numberTwo = 445;
// let numberThree = 200;

// if (numberOne > numberTwo) {
//     alert('You are correct');
// }
/*if (numberTwo > numberOne) */

// else if (numberOne === numberTwo) {
//     alert('These match!')
// } else {
//     alert('Sorry its not greater than :(');
// }

// If, Else If, Else

// When first condition is met, the code pulls out and return

// ig (numberOne < numberTwo && numberOne !== numberThree) {
//     alert('You are Baws!');
// } else if (numberTwo > numberOne) {
//     alert('Two for two');
// }
// else {
//     alert('You are still Baws!');
// }


// ===== Loops

// Count up
// for (let i = 0; i < 10; i++) {
//     console.log('my conter: ', i);
// }

// for (let i = 0; i < 20; i++) {
//     // Render the number 10
//     if (i === 10) {
//     console.log('THE NUMBER: ', i);
//     }
// }



/***** create a for loop that counts by 10 up to 100 */

// for (let i = 10; i > 0; i--) {
//     console.log('my downward counter: ', i * 10)
// }



// for (let i = 0; i < 101; i += 10) {
//     console.log('Pravalika says: ', i)
// }

// for (let i = 0; i < 101; i++) {
//     if(i === 10 || i === 20 || i === 30){
//         console.log('Britt says', i);
//     }
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(i *10)
// }


// count Down
// for (let i = 20; i > 0; i--) {
//     console.log('my downward counter: ', i);
// }


// Loop

// for (let i = 0; i <= 100; i++) {
//     if (i === 50) {
//         // end the loop !!
//         break;
//     } else {
//         console.log(i);
//     }
// }

// let i = 0;

// while (i < 10) {
//     console.log(i);
//     i++;
// }

// // Do While
// let j = 0;

// do {
//     console.log('this is j ', j);
// } while (j < 10);


/***** Ternary */



/*===== Switch Statements =====*/

// let animal = 'cow';

// switch (animal) {
//     case 'dog';
//      alert("It's a dog!"); // my code
//     break;
//     case 'cat';
//      alert("It's a cat!");
//     break;
//     case 'monkey';
//      alert("It's a monkey!");
//       break;
//     case 'cow';
//      alert("It's a cow!");
//       break;
//     default;
//         alert("Doesn't match :/");
// }




/*===== Functions =====*/
// function firstFunction() {
//     console.log('this is my first function');
//     return;
// }

// firstFunction();

// let i = 0;
// function countDown() {
//     for (i = 10; i >= 0; i--) {
//         console.log('counting from inside my function!', i)
//     }
// }
// countDown();

// Arrow Function Expressions (will be used in React) 1 same as 2 both are acceptable

//1
// let num1 = 10;
// let num2 = 24;

// const doMath = () => {
//     console.log("my sum of nums: ", num1 + num2);
// };
// doMath();


//2
// const doMath = () => {
//     let num1 = 10;
//     let num2 = 24;

//     console.log("my sum of nums: ", num1 + num2);
// };
// doMath();

// debugger;
// const startMath = () => {
    // debugger;
//     let firstNum = 20;
//     let secondNum = 30;
//   //  debugger;
//     sumNumbers(firstNum, secondNum);
// };
// debugger;


const sumNumbers = (arg1, arg2) => {
    console.log('sum of numbers: ', arg1 + arg2);
};

sumNumbers(100, 300);

// startMath();


// [if condition is true] ? (run this code()) : (run this code())
// [condition] ? statement : statement2;

// var age = 20;

// age >= 21
//     ? alert("Have fun, be safe!")
//     : alert("Sorry come back whe you're 21")



// Figure out props.content

// function ReactComponent(props) {
//     return <h1>{props.content}</h1>
// }
