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

/*function getHumanChoice () {
    let humanChoice = prompt("Rock, paper, or scissors?", "");
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock"){
        return "rock";
    } else if (humanChoice === "paper") {
        return "paper";
    } else if (humanChoice === "scissors" || humanChoice === 'scissor') {
        return "scissors";
    } else {
        alert("Invalid input.");
    }
}*/
let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener("click", () => 
    playRound('rock', getComputerChoice()));
paper.addEventListener("click", () => 
    playRound('paper', getComputerChoice()));
scissors.addEventListener('click', () => 
    playRound('scissors', getComputerChoice()));

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