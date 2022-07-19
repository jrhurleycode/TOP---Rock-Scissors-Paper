//Setting static values
let playerScore = 0;
let computerScore = 0;
const rock = "rock";
const paper = "paper";
const scissors = "scissors";

const container = document.querySelector(".container");

// Buttons
const rockClick = document.querySelector("#rock");
const paperClick = document.querySelector("#paper");
const scissorsClick = document.querySelector("#scissors");

//Message divs
const divResultsPlayer = container.querySelector("#resultsPlayer");
const divResultsComputer = container.querySelector("#resultsComputer");
const divScorePlayer = container.querySelector("#scorePlayer");
const divScoreComputer = container.querySelector("#scoreComputer");
const divMessage = container.querySelector("#message");
const divWin = document.querySelector("#win");

//Computer makes a random selection
function computerPlay() {
  const pcChoices = [rock, paper, scissors];
  return pcChoices[Math.floor(Math.random() * pcChoices.length)];
}

function showScores() {
  divScorePlayer.textContent = "Player score: " + playerScore;
  divScoreComputer.textContent = "Computer score: " + computerScore;
}

//One round.
function oneRound(playerSelection, computerSelection) {
  //Removes default text
  divResultsPlayer.textContent = "Player selected: " + playerSelection;
  divResultsComputer.textContent = "Computer selected: " + computerSelection;

  divMessage.textContent = "";

  //Player wins round. +1 to score
  if (playerSelection === rock && computerSelection === scissors) {
    playerScore += 1;
    showScores();
    divMessage.textContent = "******Good job.  You beat the computer.******";
  }

  if (playerSelection === paper && computerSelection === rock) {
    playerScore += 1;
    showScores();
    divMessage.textContent = "******Good job.  You beat the computer.******";
  }

  if (playerSelection === scissors && computerSelection === paper) {
    playerScore += 1;
    showScores();
    divMessage.textContent = "******Good job.  You beat the computer.******";
  }

  //Computer wins round.  +1 to score.
  if (playerSelection === rock && computerSelection === paper) {
    computerScore += 1;
    showScores();
    divMessage.textContent = "******Sorry, the computer won this round.******";
  }

  if (playerSelection === paper && computerSelection === scissors) {
    computerScore += 1;
    showScores();
    divMessage.textContent = "******Sorry, the computer won this round.******";
  }

  if (playerSelection === scissors && computerSelection === rock) {
    computerScore += 1;
    showScores();
    divMessage.textContent = "******Sorry, the computer won this round.******";
  }

  //Player and Computer tie.  No points given.
  if (playerSelection === computerSelection) {
    showScores();
    divMessage.textContent = "******Its a tie! Try again.******";
  }
}

function game(playerInput) {
  oneRound(playerInput, computerPlay());

  if (playerScore == 5) {
    divWin.textContent = "PLAYER WINS THE GAME";
  }
  if (computerScore == 5) {
    divWin.textContent = "COMPUTER WINS THE GAME";
  }

  console.log("Player score: " + playerScore);
  console.log("Computer score: " + computerScore);
}

rockClick.addEventListener("click", () => {
  game(rock);
});

paperClick.addEventListener("click", () => {
  game(paper);
});

scissorsClick.addEventListener("click", () => {
  game(scissors);
});
