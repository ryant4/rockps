
function getComputerChoice(){
    let choice = Math.floor((Math.random() * 3) + 1);
    if (choice === 1)
        return "rock";
    else if (choice === 2)
        return "paper";
    else
        return "scissors";
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection)
        console.log("It's a tie!");
    else if (playerSelection === "rock" && computerSelection === "scissors")
        console.log("Rock beats scissors! You win!");
    else if (playerSelection === "paper" && computerSelection === "rock")
        console.log("Paper beats rock! You win!");
    else if (playerSelection === "scissors" && computerSelection === "paper")
        console.log("Scissors beats paper! You win!");
    else if (playerSelection === "rock" && computerSelection === "paper")
        console.log("Rock beats paper! You lose!");
    else if (playerSelection === "paper" && computerSelection === "scissors")
        console.log("Paper beats rock! You lose!");
    else if (playerSelection === "scissors" && computerSelection === "rock")
        console.log("Scissors beats paper! You win!");

  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(computerSelection);
  console.log(playRound(playerSelection, computerSelection));