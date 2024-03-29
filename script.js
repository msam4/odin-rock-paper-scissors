const options = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
};

// function checkWinner(playerSelection, computerSelection) {
//   if (playerSelection == computerSelection) {
//     return "It's a tie!";
//   }
//   else if (
//     (playerSelection == "Rock" && computerSelection == "Scissors") ||
//     (playerSelection == "Paper" && computerSelection == "Rock") ||
//     (playerSelection == "Scissors" && computerSelection == "Paper")
//   ) {
//     return `You win! ${playerSelection} beats ${computerSelection}.`;
//   }
//   else {
//     return `You lose... ${computerSelection} beats ${playerSelection}.`;
//   };
// };

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a tie!";
  }
  else if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  }
  else {
    return `You lose... ${computerSelection} beats ${playerSelection}.`;
  };
};

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
