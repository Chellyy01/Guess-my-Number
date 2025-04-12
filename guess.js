"use strict";

const box = document.querySelector(".box");
const guess = document.getElementById("guess");
const input = document.querySelector(".input");
const message = document.querySelector(".message");
const check = document.querySelector(".check");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
const again = document.querySelector(".again");

let randomNumber = Math.floor(Math.random() * 20) + 1;
//box.textContent = randomNumber;

let scoreValue = 20;
let highscore = 0;

const correctNumber = function () {
  message.textContent = `Correct number!`;
  document.body.style.backgroundColor = "green";
  box.textContent = randomNumber;

  if (scoreValue > highscore) {
    highscore = scoreValue;
    highScore.textContent = highscore;
  }
};

const reset = function () {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  box.textContent = "?";

  message.textContent = "Start guessing";
  input.value = "";
  scoreValue = 20;
  score.textContent = scoreValue;
  document.body.style.backgroundColor = "black";
  check.disabled = false;
};

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    check.click(); 
  }
});

check.addEventListener("click", function () {
  const userGuess = +input.value;
  //check valid input
  if (!userGuess) {
    return (message.textContent = `Must input a number`);
  }

  //if user wins
  if (userGuess === randomNumber) {
    correctNumber();
    

    // if user loses
    //if guess is greater
  } else {
    message.textContent = userGuess > randomNumber ? "Too high" : "Too low";
    scoreValue--;
    score.textContent = scoreValue;

    if (score.textContent <= 0) {
      message.textContent = "You lose the game";
      check.disabled = true;
    }
  }
});

again.addEventListener("click", reset);
