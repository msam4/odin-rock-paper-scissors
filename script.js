const options = ["rock", "paper", "scissors"];

function getComputerChoice () {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
};

// function checkWinner(playerSelection, computerSelection) {
//   if (playerSelection == computerSelection) {
//     return "It's a tie!";
//   }
//   else if (
//     (playerSelection == "rock" && computerSelection == "scissors") ||
//     (playerSelection == "paper" && computerSelection == "rock") ||
//     (playerSelection == "scissors" && computerSelection == "paper")
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
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  }
  else {
    return `You lose... ${computerSelection} beats ${playerSelection}.`;
  };
};

function playerChoice() {
  let validatedInput = false;
  while (validatedInput == false) {
    const choice = prompt("Rock, Paper, or Scissors");
    if (choice == null) {
      continue;
    };
    const choiceInLower = choice.toLowerCase();
    if (options.includes(choiceInLower)) {
      validatedInput = true;
      return choiceInLower;
    };
  };
};

function playGame() {
  console.log("Welcome!");
  for (let i = 0; i < 5; i ++) {
    const playerSelection = playerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  };
  console.log("Game over.");
};

playGame();
