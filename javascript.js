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



console.group("Testing 10");
  console.log("1: " + getComputerChoice());
  console.log("2: " + getComputerChoice());
  console.log("3: " + getComputerChoice());
  console.log("4: " + getComputerChoice());
  console.log("5: " + getComputerChoice());
  console.log("6: " + getComputerChoice());
  console.log("7: " + getComputerChoice());
  console.log("8: " + getComputerChoice());
  console.log("9: " + getComputerChoice());
  console.log("10: " + getComputerChoice());
console.groupEnd("Testing 10");