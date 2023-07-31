'use strict';

let checkButton = document.querySelector('.check');
// document.querySelector('.message').textContent; //message
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let guessNumber = document.querySelector('.guess').value; // guessedNumber
let score = 10;

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// let highScore = document.querySelector('label-highscore').textContent; // highScore

//creatind eventLIstener to the button

checkButton.addEventListener('click', function () {
  let guessNumber = document.querySelector('.guess').value; // guessedNumber
  //message

  //  if no numbered is entered
  if (!guessNumber) {
    // document.querySelector('.message').textContent = 'NO Number Entered';
    displayMessage('NO Number Entered');
  }
  // if wrong number is entered
  else if (guessNumber != secretNumber) {
    if (score >= 1) {
      // document.querySelector('.message').textContent = (guessNumber > secretNumber) ? 'Guess too High !!' : 'Guess too Low !! ';
      displayMessage(
        guessNumber > secretNumber ? 'Guess too High !!' : 'Guess too Low !! '
      );
      score--;
    } else {
      //when score =0;
      // document.querySelector('.message').textContent = ' GAME OVER';
      displayMessage('GAME OVER');
    }
  }

  // else if (guessNumber > secretNumber) {
  //   if (score >= 1) {
  //     document.querySelector('.message').textContent = 'Guess too High !!';
  //     score--;
  //   } else {
  //     document.querySelector('.message').textContent = ' GAME OVER';
  //   }
  // } else if (guessNumber < secretNumber) {
  //   if (score >= 1) {
  //     document.querySelector('.message').textContent = 'Guess too Low !! ';
  //     score--;
  //   } else {
  //     document.querySelector('.message').textContent = ' GAME OVER';
  //   }
  // }
  //
  else {
    // correct guess
    document.querySelector('.number').textContent = secretNumber; // secretNUmber
    document.querySelector('body').style.backgroundColor = 'Green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').textContent = 'Correct !!';

    if (score > highscore) {
      max_highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  }
  document.querySelector('.score').textContent = score;
});

/////////////////////////////////////////////////////////////////////////////////////////////////
//AGAIN button
document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  document.querySelector('.score').textContent = score;

  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
