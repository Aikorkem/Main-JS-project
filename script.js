let userCount = 0;
let computerCount = 0;
const winner = game();
const possibleOptions = ["rock", "paper", "scissors"];

function computerPlay(){
    const randomNumber = Math.floor(Math.random()*3);
    return possibleOptions[randomNumber];
}

function playRound(playerSelection, computerSelection){
    
    const resultOptions = [
        ["draw", "player", "computer"],
        ["computer", "draw", "player"],
        ["player", "computer", "draw"]
    ];

    let playerChoice = playerSelection.toLowerCase();
    let computerIndex = possibleOptions.indexOf(computerSelection);
    let playerIndex = possibleOptions.indexOf(playerChoice);
    let roundResult = resultOptions[computerIndex][playerIndex];

    switch(roundResult){
        case "player":
            playerPoints++;
            return `You Win! ${playerChoice} beats ${computerSelection}!`;
        case "computer":
            computerPoints++;
            return `You Lose! ${computerSelection} beats ${playerChoice}!`;
        case "draw":
            return "Draw";
        default:
            return "Error occurred";
    }  
}

function game(){
    let playResult = "";
    for(let i=0; i<5; i++){
        const playerSelection = window.prompt("To start the play please enter 'rock' or 'paper' or 'scissors'");
        const computerSelection = computerPlay();
        playResult = playRound(playerSelection, computerSelection);
        console.log(playResult)
        if( playResult.includes("You Win")){
            userCount = userCount + 1;
            console.log("Your score: ",userCount);
            console.log("Computer score: ",computerCount);
        }
        else if( playResult.includes("You Lose")) {
            computerCount = computerCount + 1;
            console.log("Computer score: ",computerCount);
            console.log("Your score: ",userCount);
        }
        else {
              i == i-1;
              console.log("Invalid input");
        }
    }
   
    if(userCount > computerCount){
        console.log("You Won the Game!");
    }
    else if(userCount < computerCount) {
        console.log("Computer Won the Game!");
    }
    else if (userCount === computerCount){
        console.log("Game draw!");
    }

}
