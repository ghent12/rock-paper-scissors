function getComputerChoice() {
  randomNumber = Math.random()*3;

  switch (Math.trunc(randomNumber)) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";    
  }
}

function singleGame(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  playerSelection = prompt("Rock, Paper, or Scissors? (Don't misspell it please)").toLowerCase()
  // console.log(computerSelection + " : " + playerSelection); // troubleshooting
  if (computerSelection === "Rock") {
    switch (playerSelection) {
      case "rock":
        return "Tie! Rock ties rock"
      case "paper":
        return "You win! Paper beats rock"
      case "scissors":
        return "You lose! Rock beats scissors"
    }
  } else if (computerSelection === "Paper") {
    switch (playerSelection) {
      case "rock":
        return "You lose! Paper beats rock"
      case "paper":
        return "Tie! Paper ties paper"
      case "scissors":
        return "You win! Scissors beats paper"
    }
  } else if (computerSelection === "Scissors") {
    switch (playerSelection) {
      case "rock":
        return "You win! Rock beats scissors"
      case "paper":
        return "You lose! Scissors beats paper"
      case "scissors":
        return "Tie! Scissors ties paper"
    }
  }
}

function game() {
  let playerScore = 0
    , computerScore = 0
    , singleGameResult;


  for (i = 0; i < 5; i++) {
    singleGameResult = singleGame().substring(0, 5);
    if (singleGameResult === "You w") {
      playerScore++;
    } else if (singleGameResult === "You l") {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    return `You won the best-of-5 with a score of ${playerScore} to ${computerScore}! (${5 - playerScore - computerScore} tied games.)`;
  } else if (playerScore = computerScore) {
    return `You tied the best-of-5 with a score of ${playerScore} to ${computerScore}! (${5 - playerScore - computerScore} tied games.)`;
  } else {
    return `You lost the best-of-5 with a score of ${playerScore} to ${computerScore}! (${5 - playerScore - computerScore} tied games.)`;
  }
}

console.group("Testing 10");
  console.log("1: " + game());
  /*console.log("2: " + singleGame());
  console.log("3: " + singleGame());
  console.log("4: " + singleGame());
  console.log("5: " + singleGame());
  console.log("6: " + singleGame());
  console.log("7: " + singleGame());
  console.log("8: " + singleGame());
  console.log("9: " + singleGame());
  console.log("10: " + singleGame());*/
console.groupEnd("Testing 10");

