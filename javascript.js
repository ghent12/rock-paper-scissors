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
  //document.body.appendChild(scoreLog);
}
/*
const fragment = document.createDocumentFragment();
const li = fragment
  .appendChild(document.createElement('section'))
  .appendChild(document.createElement('ul'))
  .appendChild(document.createElement('li'));
li.textContent = 'hello world';

document.body.appendChild(fragment);
*/
function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();


/*  console.group('selections');
    console.log("Player: " + playerSelection);
    console.log("Computer:" + computerSelection);
  console.groupEnd('selections'); */ //Troubleshooting

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

/*function game() {
  let playerScore = 0
    , computerScore = 0
    , singleGameResult;


  for (i = 0; i < 5; i++) {
    singleGameResult = playRound().substring(0, 5);
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
}*/

/*
  window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return; // Stop function from running.
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(key);
    audio.currentTime = 0; // Resets time to 0 to prevent problem described in comments below
    audio.play(); // Calling .play() again does not play it until it's finished.
    key.classList.add('playing');

  });

  divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true // Will listen for a 'click', then unbind itself. Same as a .removeEventListener
  }));

*/

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