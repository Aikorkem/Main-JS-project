const possibleOptions = ["rock", "paper", "scissors"];
const winner = game();

function computerPlay(){
    const computerRandomSelection = possibleOptions[Math.floor(Math.random() * 3)];
    return computerRandomSelection;
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
    let playResult = "";
    let userCount = 0;
    let computerCount = 0;
    alert("Let's start a game!");

    for(let i=0; i<5; i++){
        alert(`Round ${i+1}\nPlayer = ${userCount} x Computer = ${computerCount}`);
        let playerSelection = window.prompt(`Please, type your choise:\n - Rock\n - Paper\n - Scissors`);
        let inputCheck = playerSelection.replace(/\s*/g, "");

        if(/\b(rock|paper|scissors)\b/i.test(inputCheck) && /(rock|paper|scissors)/i.test(playerSelection)){
            playerSelection = inputCheck;
            let computerSelection = computerPlay();
            console.log(`Computer chose "${computerSelection}". You chose "${playerSelection}"`);
            playResult = playRound(playerSelection, computerSelection);
            console.log(playResult);

            if( playResult.includes("You Win")){
                userCount++;
                console.log("Your score: ",userCount);
                console.log("Computer score: ",computerCount);
            }
            else if( playResult.includes("You Lose")) {
                computerCount++;
                console.log("Computer score: ",computerCount);
                console.log("Your score: ",userCount);
            }else if( playResult.includes("Draw")) {
                console.log("Computer score: ",computerCount);
                console.log("Your score: ",userCount);
            }else{
                console.log("Error");
            }
        }else{
            i--;
            alert("Invalid input");
        }
    }

    finalResult(userCount, computerCount);
}

function finalResult(playerScore, computerScore) {
    if (playerScore > computerScore) {
        alert(`Final result: You are the Winner!`);
    } else if (playerScore < computerScore ) {
        alert(`Final result: You Lost! Try again!`);
    } else {
        alert(`Final result: Draw!`);
    }
}
