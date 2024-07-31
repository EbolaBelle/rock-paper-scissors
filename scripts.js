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

function getHumanChoice () {
    let humanChoice = prompt("Rock, paper, or scissors?", "");
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock"){
        return humanOuput = "rock";
    } else if (humanChoice === "paper") {
        humanOuput = "paper";
    } else if (humanChoice === "scissors") {
        humanOuput = "scissors";
    } else {
        alert("Invalid input; refresh page.");
    }
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === 'scissors') {
            console.log("Rock beats scissors! You win!");
            humanScore++;
        } else if (humanChoice === 'rock' && computerChoice === 'paper') {
            console.log("Paper beats rock! You lose.");
            computerScore++;
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log("Paper beats rock! You win!");
            humanScore++;
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            console.log("Scissors beat paper!  You lose.");
            computerScore++;
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            console.log("Scissors beat paper! You win!");
            humanScore++;
        } else if (humanChoice === 'scissors' && computerChoice === "rock") {
            console.log("Rock beats scissors! You lose.")
        } else {
            console.log('A tie! Try again.')
        }
    }
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())

    if (humanScore > computerScore) {
        console.log('You win!');
    } else if (humanScore < computerScore) {
        console.log('Computer wins.');
    } else {
        console.log('A tie! Refresh page and try again.');
    }
}
playGame();