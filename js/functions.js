/****
 * Fun with functions
 *
 *  ***/

 // Basic form
//  function showMyName (firstName, lastName) {
//     debugger;
//     setting my variables
//     concat my two parameters to form one new string
//     let fullName = firstName + ' ' + lastName;

//     use the console.log to render fullName
//     console.log('You are: ', fullName);
//  }
// debugger;
//  showMyName ("Ludwin", "Granados");



 //Function that multiplies two nums together
 
// function mutiplyTwoNumbers (firstNumber, secondNumber) {
    // take the passed in parameters and multiply
    // setting to a new variable

    // let multipliedNumbers = firstNumber * secondNumber;

    //console.log the result
    // console.log("these numbers are multiplied! ", multipliedNumbers);

// }

// mutiplyTwoNumbers (15, 13);


// Arrow functions Expression (does the same as
// function basicSyntaxFuntion() {}
// const countToTenFromNewStartingPoint = (startingNumber) => {
    // First check number to see if less than 10
   // If less than 10, start loop
// debugger;
//    if(startingNumber <= 10) {
//   // create a for loop that counts to 10
//   for (startingNumber; startingNumber <= 10; startingNumber++) {
//     // console.log i
//     console.log(startingNumber);
// }
//    } else {
//        alert('The number is larger than 10');
//    }



    // for (let i = 0; i <= 10; i++)
    // for (startingNumber; startingNumber <= 10; startingNumber++) {
    //     // console.log i
    //     console.log(startingNumber);
    // }
// }
// countToTen();
// countToTenFromNewStartingPoint(5);


// function that alerts user a welcome with first and last name
const welcomeNewUser = () => {
    // debugger;
    //initialize your variables
    // set name variables and welcome message
    let firstName = 'Ludwin';
    let lastName = "Granados";
    let welcomeMessage = 'Hey there, ';
    let fullMessage = welcomeMessage + firstName + ' ' + lastName;
    alert(fullMessage);
}

//  welcomeNewUser();


// Add a button to you html page
//   tied to a function
//   function alerts your user with you favorite animal


const showFa = () => {
    let animal = 'Dog';

    alert(animal);
}

//  showFa ();


const getUserName = () => {
   // prompt the user for their name
   // bind that value to a variable
   // render a welcome message

    debugger;
    let userName = prompt("Hey, what's your name?");

    alert("Welcome, " + userName + '!');
};

getUserName();