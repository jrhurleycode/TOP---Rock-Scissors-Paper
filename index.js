//Computer selects rock, paper, scissors
//Player types rock, paper, scissors.  Word is made lowerCase
//Compare selections
//Rock > scissors,  Scissors > paper,  Paper > rock
//Show winner

//Computer makes a random selection
function computerPlay() {
  const pcChoices = ["rock", "scissors", "paper"];
  return pcChoices[Math.floor(Math.random() * pcChoices.length)];
}

const computerSelection = computerPlay();

function oneRound(playerSelection, computerSelection) {
  let choices = ["rock" || "scissors" || "paper"];
  let input = playerSelection.toLowerCase();

  if (playerSelection != choices)
    return 'Please type "rock", "scissors", or "paper"';
  else if (
    (playerSelection,
    computerSelection === ["rock", "scissors"] || ["scissors", "paper"] || [
        "paper",
        "rock",
      ])
  )
    return "Good job!  You beat the computer!";
  else if (
    (playerSelection,
    computerSelection === ["rock", "paper"] || ["scissors", "rock"] || [
        "paper",
        "scissors",
      ])
  )
    return "You lost!  Try again!";
  else
    playerSelection,
      computerSelection === ["rock", "rock"] || ["scissors", "scissors"] || [
          "paper",
          "papers",
        ];
  return "You tied! Try again!";
}
