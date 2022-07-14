let playerScore = 0;
let computerScore = 0;
const rock = "rock";
const paper = "paper";
const scissors = "scissors";

//Computer makes a random selection
function computerPlay() {
  const pcChoices = [rock, paper, scissors];
  return pcChoices[Math.floor(Math.random() * pcChoices.length)];
}

function oneRound(playerSelection, computerSelection) {
  //Player inputs a selection via prompt.
  const playerPlay = prompt("Rock, Scissors, Paper?", "🤘 ✂ 🧻");

  let input = playerPlay.toLowerCase();
  playerSelection = input;
  computerSelection = computerPlay();
  const choices = [rock, paper, scissors];
  let selections = [playerSelection, computerSelection];

  //Player wins round. +1 to score
  if (selections.at(0) === "rock" && selections.at(1) === "scissors") {
    playerScore += 1;
    console.log("Player selected: " + playerSelection);
    console.log("Computer selected: " + computerSelection);
    console.log("******Good job.  You beat the computer.******");
    console.log(
      "Player Score: " + playerScore,
      "Computer Score: " + computerScore
    );
    console.log("------------------------------------------------");
  }

  if (selections.at(0) === "paper" && selections.at(1) === "rock") {
    playerScore += 1;
    console.log("Player selected: " + playerSelection);
    console.log("Computer selected: " + computerSelection);
    console.log("******Good job.  You beat the computer.******");
    console.log(
      "Player Score: " + playerScore,
      "Computer Score: " + computerScore
    );
    console.log("------------------------------------------------");
  }

  if (selections.at(0) === "scissors" && selections.at(1) === "paper") {
    playerScore += 1;
    console.log("Player selected: " + playerSelection);
    console.log("Computer selected: " + computerSelection);
    console.log("******Good job.  You beat the computer.******");
    console.log(
      "Player Score: " + playerScore,
      "Computer Score: " + computerScore
    );
    console.log("------------------------------------------------");
  }

  //Computer wins round.  +1 to score.
  if (selections.at(0) === "rock" && selections.at(1) === "paper") {
    computerScore += 1;
    console.log("Player selected: " + playerSelection);
    console.log("Computer selected: " + computerSelection);
    console.log("******Sorry, you lost.  Try again.******");
    console.log(
      "Player Score: " + playerScore,
      "Computer Score: " + computerScore
    );
    console.log("------------------------------------------------");
  }

  if (selections.at(0) === "paper" && selections.at(1) === "scissors") {
    computerScore += 1;
    console.log("Player selected: " + playerSelection);
    console.log("Computer selected: " + computerSelection);
    console.log("******Sorry, you lost.  Try again.******");
    console.log(
      "Player Score: " + playerScore,
      "Computer Score: " + computerScore
    );
    console.log("------------------------------------------------");
  }

  if (selections.at(0) === "scissors" && selections.at(1) === "rock") {
    computerScore += 1;
    console.log("Player selected: " + playerSelection);
    console.log("Computer selected: " + computerSelection);
    console.log("******Sorry, you lost.  Try again.******");
    console.log(
      "Player Score: " + playerScore,
      "Computer Score: " + computerScore
    );
    console.log("------------------------------------------------");
  }

  //Player and Computer tie.  No points given.
  if (playerSelection === computerSelection) {
    console.log("Player selected: " + playerSelection);
    console.log("Computer selected: " + computerSelection);
    console.log("******Its a tie! Try again.******");
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
    console.log("------------------------------------------------");
  }
}

// function game () {
//   for(i = 0; i < 5; i++) {
//     oneRound();
//   }
// }

// game();

// Three butons
const btn = document.querySelector("#button");
btn.addEventListener("click", oneRound);
console.log(btn);
