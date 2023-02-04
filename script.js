let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const computerOptions = ["ROCK", "PAPER", "SCISSORS"];
    const computerRandomSelection = computerOptions[Math.floor(Math.random() * 3)];
    return computerRandomSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        alert(`DRAW! ${playerSelection} = ${computerSelection}`);
    } else if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
        (playerSelection == "PAPER" && computerSelection == "ROCK") ||
        (playerSelection == "SCISSORS" && computerSelection == "PAPER")) {
        alert(`YOU WIN! ${playerSelection} BEATS ${computerSelection}`);
    } else {
        alert(`YOU LOSE! ${computerSelection} BEATS ${playerSelection}`);
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        const playerSelection = window.prompt(`Please, type your choise:\n - Rock\n - Paper\n - Scissors`).toUpperCase();
        
        playRound(playerSelection, computerSelection);

        alert(`Round ${i+1}\nPlayer = ${playerScore} x Computer = ${computerScore}`);
    }
    finalResult();
}

function finalResult() {
    if (playerScore > computerScore) {
        alert(`Final result: You are the Winner!`);
    } else if (playerScore < computerScore ) {
        alert(`Final result: You Lost! Try again!`);
    } else {
        alert(`Final result: Draw!`);
    }
}

game();