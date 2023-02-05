const possibleOptions = ["rock", "paper", "scissors"];
let playerPoints = 0,
    computerPoints = 0;

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