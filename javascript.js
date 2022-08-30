let playerScoreCount = 0
  , computerScoreCount = 0;

const scoreLog = document.getElementById("scorelog")
    , playerRoundsOf5 = document.getElementById("player-score")
    , computerRoundsOf5 = document.getElementById("computer-score");

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

function firstTo5Points() {
  if (playerScoreCount === 5 || computerScoreCount === 5) {
    const scoring5 = scoreLog.appendChild(document.createElement('p'));
    scoring5.id = "scoring5";
    if (playerScoreCount === 5) {
      scoring5.textContent = "Congratulations! You win by being first to 5!";
      playerRoundsOf5.textContent++;
    } else if (computerScoreCount === 5) {
      scoring5.textContent = "Terrible! The computer wins by being first to 5!";
      computerRoundsOf5.textContent++;
    }
    computerScoreCount = 0;
    playerScoreCount = 0;
  } else if (document.getElementById('scoring5')) {
    document.getElementById('scoring5').remove();
    let listOfScores = document.querySelectorAll('li');
    listOfScores.forEach(li => li.remove())
  }
}

function buttonRound(e) {
  firstTo5Points();
  let playerSelection = this.classList.value.slice(0, 3);
  let score = playRound(playerSelection);
  const scoreEntry = scoreLog.appendChild(document.createElement("li"));
  scoreEntry.textContent = score;
  scoreEntry.classList = 'score-entry';
  firstTo5Points();
}
function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  if (computerSelection === "Rock") {
    switch (playerSelection) {
      case "roc":
        return "Tie! Rock ties rock"
      case "pap":
        playerScoreCount++;
        return "You win! Paper beats rock"
      case "sci":
        computerScoreCount++;
        return "You lose! Rock beats scissors"
    }
  } else if (computerSelection === "Paper") {
    switch (playerSelection) {
      case "roc":
        computerScoreCount++;
        return "You lose! Paper beats rock"
      case "pap":
        return "Tie! Paper ties paper"
      case "sci":
        playerScoreCount++;
        return "You win! Scissors beats paper"
    }
  } else if (computerSelection === "Scissors") {
    switch (playerSelection) {
      case "roc":
        playerScoreCount++;
        return "You win! Rock beats scissors"
      case "pap":
        computerScoreCount++;
        return "You lose! Scissors beats paper"
      case "sci":
        return "Tie! Scissors ties paper"
    }
  }
}

function actionJackson(e) {
  console.log(this.classList.value);
}

const buttons = document.querySelectorAll('button')

buttons.forEach(button => button.addEventListener('click', buttonRound, {
    capture: false
  })
);

/*console.group("Testing 10");
  console.log("1: " + playRound());
  /*console.log("2: " + playRound());
  console.log("3: " + playRound());
  console.log("4: " + playRound());
  console.log("5: " + playRound());
  console.log("6: " + playRound());
  console.log("7: " + playRound());
  console.log("8: " + playRound());
  console.log("9: " + playRound());
  console.log("10: " + playRound());
console.groupEnd("Testing 10"); */