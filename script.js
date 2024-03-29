const options = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice () {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
};

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "It's a tie!";
  }
  else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    playerScore++
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  }
  else {
    computerScore++
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
    console.log("------------");
  };
  console.log("Game over.");
  if (playerScore == computerScore) {
    console.log("It's a draw");
  }
  else if (playerScore > computerScore) {
    console.log("You are the winner!");
  }
  else {
    console.log("You lose against the computer...");
  }
};

playGame();
