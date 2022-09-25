
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
        return "It's a tie!";
    else if (playerSelection === "rock" && computerSelection === "scissors")
        return "Rock beats scissors! You win!";
    else if (playerSelection === "paper" && computerSelection === "rock")
        return "Paper beats rock! You win!";
    else if (playerSelection === "scissors" && computerSelection === "paper")
        return "Scissors beats paper! You win!";
    else if (playerSelection === "rock" && computerSelection === "paper")
        return "Rock beats paper! You lose!";
    else if (playerSelection === "paper" && computerSelection === "scissors")
        return "Paper beats rock! You lose!";
    else if (playerSelection === "scissors" && computerSelection === "rock")
        return "Scissors beats paper! You win!";
    else {
        console.log("You didn't choose rock, paper, or scissors");
        return undefined;
    }
  }

function game() {
    let playerSelection = prompt("Choose your weapon! (rock, paper, or scissors)");
    playerSelection = playerSelection.toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

}   

for (let i=0; i < 5; i++) {

    game();
    
}
