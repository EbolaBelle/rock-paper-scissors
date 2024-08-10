let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const outcome = document.querySelector('#outcome');
const playerScore = document.querySelector('#playerscore');
const compScore = document.querySelector('#computerscore');

rock.addEventListener("click", handleRockClick);
paper.addEventListener("click", handlePaperClick);
scissors.addEventListener('click', handleScissorsClick);

function getComputerChoice() {                
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

function handleRockClick() {
    playRound('rock', getComputerChoice());
}
function handlePaperClick() {
    playRound('paper', getComputerChoice());
}
function handleScissorsClick() {
    playRound('scissors', getComputerChoice());
}



function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === 'scissors') {
            outcome.textContent = "Rock *SMASHES* scissors! You win!";
            humanScore++;            
        } else if (humanChoice === 'rock' && computerChoice === 'paper') {
            outcome.textContent = "Paper *SMOTHERS* rock! You lose.";
            computerScore++;
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            outcome.textContent = "Paper *SMOTHERS* rock! You win!";
            humanScore++;
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            outcome.textContent = "Scissors *SLICE* paper!  You lose.";
            computerScore++;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            outcome.textContent = "Scissors *SLICE* paper! You win!";
            humanScore++;
        } else if (humanChoice === 'scissors' && computerChoice === "rock") {
            outcome.textContent = "Rock *SMASHES* scissors! You lose.";
            computerScore++;
        } else {
            outcome.textContent = 'A tie!';
        }
        playerScore.textContent =`Player: ${humanScore}`;
        compScore.textContent = `Computer: ${computerScore}`;
    isGameOver();
}

function isGameOver() {
    if (humanScore === 5 || computerScore === 5) {
        const body = document.querySelector('body');
        const winner = document.createElement('div');
        humanScore === 5 
        ? winner.textContent = "You win!"
        : winner.textContent = "Computer wins!";
        body.appendChild(winner);
        rock.removeEventListener('click', handleRockClick);
        paper.removeEventListener('click', handlePaperClick);
        scissors.removeEventListener('click', handleScissorsClick);
    } else {
        return false;
    }
}