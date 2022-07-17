let playerScore = 0;
let computerScore = 0;
let input = "";
const rock = "rock";
const paper = "paper";
const scissors = "scissors";

//Computer makes a random selection
function computerPlay() {
  const pcChoices = [rock, paper, scissors];
  return pcChoices[Math.floor(Math.random() * pcChoices.length)];
}

//One round.
function oneRound(playerSelection, computerSelection) {
  playerSelection = input;
  computerSelection = computerPlay();
  let selections = [playerSelection, computerSelection];

  //New lines
  const container = document.querySelector(".container");
  let lineOne = container.querySelector("#resultsPlayer");
  let lineTwo = container.querySelector("#resultsComputer");
  let lineThree = container.querySelector("#scorePlayer");
  let lineFour = container.querySelector("#scoreComputer");
  let lineFive = container.querySelector("#message");

  //Removes default text
  lineOne.textContent = "Player selected: " + playerSelection;
  lineTwo.textContent = "Computer selected: " + computerSelection;

  function showScores() {
    lineThree.textContent = "Player score: " + playerScore;
    lineFour.textContent = "Computer score: " + computerScore;
  }
  lineFive.textContent = "";

  //Player wins round. +1 to score
  if (selections.at(0) === "rock" && selections.at(1) === "scissors") {
    playerScore += 1;
    showScores();
    lineFive.textContent = "******Good job.  You beat the computer.******";
  }

  if (selections.at(0) === "paper" && selections.at(1) === "rock") {
    playerScore += 1;
    showScores();
    lineFive.textContent = "******Good job.  You beat the computer.******";
  }

  if (selections.at(0) === "scissors" && selections.at(1) === "paper") {
    playerScore += 1;
    showScores();
    lineFive.textContent = "******Good job.  You beat the computer.******";
  }

  //Computer wins round.  +1 to score.
  if (selections.at(0) === "rock" && selections.at(1) === "paper") {
    computerScore += 1;
    showScores();
    lineFive.textContent = "******Sorry, the computer won this round.******";
  }

  if (selections.at(0) === "paper" && selections.at(1) === "scissors") {
    computerScore += 1;
    showScores();
    lineFive.textContent = "******Sorry, the computer won this round.******";
  }

  if (selections.at(0) === "scissors" && selections.at(1) === "rock") {
    computerScore += 1;
    showScores();
    lineFive.textContent = "******Sorry, the computer won this round.******";
  }

  //Player and Computer tie.  No points given.
  if (playerSelection === computerSelection) {
    showScores();
    lineFive.textContent = "******Its a tie! Try again.******";
  }
}

function game(playScore, pcScore) {
  const win = document.querySelector("#win");
  const playerWin = (win.textContent = "PLAYER WINS THE GAME");
  const pcWin = (win.textContent = "COMPUTER WINS THE GAME");

  //check win
  if (playScore !== 5 || pcScore !== 5) {
    oneRound;
  } else if (playScore == 5) {
    playerWin;
  } else if (pcScore == 5) {
    pcWin;
  }
  console.log("Player score: " + playerScore);
  console.log("Computer score: " + computerScore);
}

const rockClick = document.querySelector("#rock");
const paperClick = document.querySelector("#paper");
const scissorsClick = document.querySelector("#scissors");

rockClick.addEventListener("click", () => {
  input = rock;
  game(playerScore, computerScore);
});

paperClick.addEventListener("click", () => {
  input = paper;
  game(playerScore, computerScore);
});

scissorsClick.addEventListener("click", () => {
  input = scissors;
  game(playerScore, computerScore);
});
