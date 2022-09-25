
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
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        console.log("Rock beats scissors! You win!");
        playerScore++;
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        console.log("Paper beats rock! You win!");
        playerScore++;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        console.log("Scissors beats paper! You win!");
        playerScore++;
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        console.log("Paper beats rock! You lose!");
        computerScore++;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        console.log("Scissors beats paper! You lose!");
        computerScore++;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        console.log("Rock beats scissors! You lose!");
        computerScore++;
    }
    else {
        console.log("You didn't choose rock, paper, or scissors");
    }
  }

function game() {
    let playerSelection = prompt("Choose your weapon! (rock, paper, or scissors)");
    playerSelection = playerSelection.toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}   

let playerScore = 0;
let computerScore = 0;

for (let i=0; i < 5; i++) {

    game();
    console.log(`Score:  You: ${playerScore}  Computer: ${computerScore}`);

}

