
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

    const lastGameResult = document.querySelector("#lastgameresult");

    if (playerSelection === computerSelection) {
        lastGameResult.innerHTML = (`You played ${playerSelection} and computer played ${computerSelection}! It's a tie!`);
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        lastGameResult.innerHTML = (`You played ${playerSelection} and computer played ${computerSelection}! You win!`);
        playerScore++;
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        lastGameResult.innerHTML = ("You played paper and computer played rock! You win!");
        playerScore++;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        lastGameResult.innerHTML = ("You played scissors and computer played paper! You win!");
        playerScore++;
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        lastGameResult.innerHTML = ("You played rock and computer played paper! You lose!");
        computerScore++;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        lastGameResult.innerHTML = ("You played paper and computer played scissors! You lose!");
        computerScore++;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        lastGameResult.innerHTML = (`You played ${playerSelection} and computer played ${computerSelection}! You lose!`);
        computerScore++;
    }
  }


function updateDisplayedScore(){
    const pscore = document.querySelector("#pscore");
    const cscore = document.querySelector("#cscore");

    pscore.innerHTML = "Player Score: " + playerScore;
    cscore.innerHTML = "Computer Score: " + computerScore;
    
}

function checkForWinner() {
    if (playerScore === 5) {
        const winMsg = document.createElement('div');
        winMsg.textContent = "You won the game!";
        const results = document.querySelector('#results')
        results.appendChild(winMsg);
        const gameon = document.querySelector(".gameon");
        gameon.style.display = "none";
        const lastGameResult = document.querySelector("#lastgameresult");
        lastGameResult.style.display = "none";
        
    }
    else if (computerScore === 5) {
        const loseMsg = document.createElement('div');
        loseMsg.textContent = "You lost the game";
        const results = document.querySelector('#results')
        results.appendChild(loseMsg);
        const gameon = document.querySelector(".gameon");
        gameon.style.display = "none";
        const lastGameResult = document.querySelector("#lastgameresult");
        lastGameResult.style.display = "none";

    }
    else
        return;


}

let playerScore = 0;
let computerScore = 0;

const rockbtn = document.querySelector('#rock-btn');
const paperbtn = document.querySelector('#paper-btn');
const scissorsbtn = document.querySelector('#scissors-btn');



rockbtn.addEventListener('click', function(){
    let playerSelection = "rock";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateDisplayedScore();
    checkForWinner();
})
paperbtn.addEventListener('click', function(){
    let playerSelection = "paper";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateDisplayedScore();
    checkForWinner();


})
scissorsbtn.addEventListener('click', function(){
    let playerSelection = "scissors";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateDisplayedScore();
    checkForWinner();


})