// let randomNumber=Math.floor(Math.random()*100+1);
//OR
let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber)

const submit = document.getElementById('subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remainingGuesses = document.querySelector('.lastResult');
const lowHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuesses = [];
let numGuesses = 0;
let playGame = true;
if (playGame) {
  submit.addEventListener('click', (event) => {
    event.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
//check whether user gave a valid input between 1 and 10
function validateGuess(guess) {
  if (guess < 1 || guess > 100 || isNaN(guess)) {
    alert('Please enter a valid number');
  } else {
    prevGuesses.push(guess);
    if (numGuesses >= 9) {
      displayGuess(guess);
      displayMessage(`Game Over,Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuessCorrectWrong(guess);
    }
  }
}

//check whether guess is correct or wrong,high or low
function checkGuessCorrectWrong(guess) {
  if (guess === randomNumber) {
    displayMessage(`You win! Random Number was ${randomNumber}`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low!`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high!`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuesses++;
  remainingGuesses.innerHTML = `${11 - numGuesses - 1}`;
}

function displayMessage(message) {
  //DOM Interactivity and Manipulation
  lowHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.innerHTML = `<h2 id='newGame'> Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', (event) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    userInput.value = '';
    numGuesses = 0;
    remainingGuesses.innerHTML = `${10 - numGuesses - 1}`;
    userInput.removeAttribute('disabled');
    playGame = true;
    prevGuesses = [];
    guessSlot.innerHTML = '';
  });
}
