// Guess the Number

const guessTheNumber = () => {
    let correctAnswer = 7;
    //   debugger;
    for (let i = 0; i <= 2; i++) {
      let userAnswer = prompt(
        'Guess a number between 1 and 10: you get 3 guesses!'
      );
      let verified = verifyNumber(userAnswer);
      if (verified) {
        alert('That is not a number, try again!');
      } else if (userAnswer == correctAnswer) {
        alert('Good guess! You win!');
        break;
      } else {
        alert('That is not the number, try again!');
      }
  
      if (i === 2) alert('You are out of guesses. You lose!');
    }
  };
  
  const verifyNumber = userInput => {
    return isNaN(userInput);
  };
  
// guessTheNumber();


// function answerNumber() {

//     // generating a random integer from 1 to 10
//     const random = Math.floor(Math.random() * 10) + 1;

//     // take input from the user
//     let number = parseInt(prompt('Guess a number from 1 to 10: '));

//     // take the input until the guess is correct
//     while(number !== random) {
//         number = parseInt(prompt('Good try, guess again from 1 to 10: '));
//     }

//     // check if the guess is correct
//     if(number == random) {
//         alert('Congratulations, you guessed the right number!!!');
//     }
//   }


//functions and arrays