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
let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const outcome = document.querySelector('#outcome');
const playerScore = document.querySelector('#playerscore');
const compScore = document.querySelector('#computerscore');

rock.addEventListener("click", () => 
    playRound('rock', getComputerChoice()));
paper.addEventListener("click", () => 
    playRound('paper', getComputerChoice()));
scissors.addEventListener('click', () => 
    playRound('scissors', getComputerChoice()));

function playRound(humanChoice, computerChoice) {
    if (humanScore === 5 || computerScore === 5) {
        humanScore === 5 ? outcome.textContent = "You win!"
        : outcome.textContent = "Computer wins!";
    } else {
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
    }
}



/*function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === 'scissors') {
            console.log("Rock *SMASHES* scissors! You win!");
            humanScore++;
        } else if (humanChoice === 'rock' && computerChoice === 'paper') {
            console.log("Paper *SMOTHERS* rock! You lose.");
            computerScore++;
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log("Paper *SMOTHERS* rock! You win!");
            humanScore++;
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            console.log("Scissors *SLICE* paper!  You lose.");
            computerScore++;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            console.log("Scissors *SLICE* paper! You win!");
            humanScore++;
        } else if (humanChoice === 'scissors' && computerChoice === "rock") {
            console.log("Rock *SMASHES* scissors! You lose.")
        } else {
            console.log('A tie!')
        }
    }
    alert("Open browser console (shift+ctrl+i) to play game!")

    if (humanScore > computerScore) {
        console.log(`Human score is ${humanScore} vs. a computer score of ${computerScore}. You win!`);
    } else if (humanScore < computerScore) {
        console.log(`Human score is ${humanScore} vs. a computer score of ${computerScore}. Computer wins.`);
    } else {
        console.log('A tie! Refresh page and try again.');
    }
}
playGame();*/