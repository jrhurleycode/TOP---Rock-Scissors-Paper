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

const playerPlay = prompt("Rock, Scissors, Paper?", "🤘 ✂ 🧻"); //Player inputs a selection via prompt

function oneRound(playerSelection, computerSelection) {
  
  const choices = ["rock", "scissors", "paper"];
  const bothSelections = [playerSelection, computerSelection];
  const input = playerSelection.toLowerCase();
  const playerWins = [["rock", "scissors"], ["scissors", "paper"], ["paper", "rock"]];
  console.log(bothSelections);
  const playerWinMatch = playerWins.find((element) => {bothSelections === element});   //DEBUG.  
  console.log(playerWinMatch);
  const checkPlayerInput = choices.find((element) => input === element); 

  //Check if player input is valid.  
  if (checkPlayerInput === undefined) return alert("Please type rock, scissors, paper.");

  // Player and computer tie.
  if (playerSelection === computerSelection) return alert("ITS A TIE.");

  //Player wins match.  
  if (playerWinMatch !== undefined) return alert("Good job!  You beat the computer!");
  
  //Computer wins match.
  return alert("You suck computer wins.")  
}

console.log(playerPlay);
oneRound(playerPlay, computerPlay());  



