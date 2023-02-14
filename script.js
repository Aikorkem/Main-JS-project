const possibleOptions = ["rock", "paper", "scissors"];
let playerCount = 0;
let computerCount = 0;
game();

function computerPlay(){
    const computerRandomSelection = possibleOptions[Math.floor(Math.random() * 3)];
    return computerRandomSelection;
}

function userPlay(i) {
    alert(`Round ${i+1}\nPlayer = ${playerCount} x Computer = ${computerCount}`);
    let playerInput = window.prompt("Please, type your choise:\n - Rock\n - Paper\n - Scissors");
    if (playerInput) {
        return playerInput;
    } else {
        alert("End Game");
    }
}

function inputCheck(i, playerInput) {
    let playResult = "";
    let inputCheck = playerInput.replace(/\s*/g, "");

    if(/\b(rock|paper|scissors)\b/i.test(inputCheck) && /(rock|paper|scissors)/i.test(playerInput)) {
        let playerSelection = inputCheck;
        let computerSelection = computerPlay();
        console.log(`Computer chose ${computerSelection}. You chose ${playerSelection}`);
       
        playResult = playRound(playerSelection, computerSelection);
        console.log(playResult);
        return playResult;
    } else {
        alert("Invalid input");
        return i;
    }
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
            alert(`You Win! ${playerChoice} beats ${computerSelection}!`);
            return `You Win! ${playerChoice} beats ${computerSelection}!`;
        case "computer":
            alert(`You Lose! ${computerSelection} beats ${playerChoice}!`);
            return `You Lose! ${computerSelection} beats ${playerChoice}!`;
        case "draw":
            alert(`Draw! ${playerChoice} = ${computerSelection}`);
            return "Draw";
        default:
            return "Error occurred";
    }  
}

function game(){
    alert("Let's start a game! Rock, Paper or Scissors");
    for(let i=0; i<5; i++) {
        let playerInput = userPlay(i);
        let playResult = inputCheck(i, playerInput);

        if(typeof playResult === "number") {
            i--;
        } else {
            if(playResult.includes("win")) {
                playerCount++;
                console.log(`Your score: ${playerCount}`);
                console.log(`Computer score: ${computerCount}`);
            } else if(playResult.includes("lose")) {
                computerCount++;
                console.log(`Computer score: ${computerCount}`);
                console.log(`Your score: ${playerCount}`);
            } else if(playResult.includes("draw")) {
                    console.log(`Computer score: ${computerCount}`);
                    console.log(`Your score: ${playerCount}`);
            } else {
                console.log("Error");
            }
        }
    }
    finalResult(playerCount, computerCount);
}

function finalResult(playerScore, computerScore) {
    if (playerScore > computerScore) {
        alert("Final result: You are the Winner!");
    } else if (playerScore < computerScore ) {
        alert("Final result: You Lost! Try again!");
    } else {
        alert("Final result: Draw!");
    }
}
