
let answer;
let guessCount = 0;


function startGame() {
  
  answer = parseInt(prompt("Enter a number between 1 and 100:"));
  guessCount = 0;
  document.getElementById("result").innerHTML = "";


  if (isNaN(answer) || answer < 1 || answer > 100) {
    document.getElementById("result").innerHTML = "Invalid input. Please enter a number between 1 and 100.";
    return;
  }

  
  computerGuess();
}


function computerGuess() {
  guessCount++;
  let guess = Math.floor(Math.random() * 100) + 1;

  
  if (guess === answer) {
    document.getElementById("result").innerHTML = "Computer wins! It took " + guessCount + " guesses.";
    return;
  }

  
  if (guessCount >= 5) {
    document.getElementById("result").innerHTML = "You win! The answer was " + answer + ".";
    return;
  }

  
  computerGuess();
}