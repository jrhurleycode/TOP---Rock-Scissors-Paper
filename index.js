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

const playerPlay = prompt("Rock, Scissors, Paper?", "🤘 ✂ 🧻"); //Player inputs a selection via prompt

console.log(computerPlay);
console.log(playerPlay);

function oneRound(playerSelection, computerSelection) {
  playerSelection = playerPlay;
  const input = playerSelection.toLowerCase();
  const choices = ["rock" || "scissors" || "paper"];

  if (input !== choices) {
    return alert('Please type "rock", "scissors", or "paper"');
  } else if (
    (playerSelection,
    computerSelection === ["rock", "scissors"] || ["scissors", "paper"] || [
        "paper",
        "rock",
      ])
  ) {
    return alert("Good job!  You beat the computer!");
  } else if (
    (playerSelection,
    computerSelection === ["rock", "paper"] || ["scissors", "rock"] || [
        "paper",
        "scissors",
      ])
  ) {
    return alert("You lost!  Try again!");
  } else
    playerSelection,
      computerSelection === ["rock", "rock"] || ["scissors", "scissors"] || [
          "paper",
          "paper",
        ];
  return alert("You tied! Try again!");
}

console.log(oneRound("", computerSelection));
