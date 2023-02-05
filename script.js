//rock beats scissors
//scissors beats paper
//paper beats rock
const computerPlay = () => {
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return "Something went wrong";
    }
};
const getPlayerChoice = () => {
    let userInput = prompt("Enter Rock, Paper and Scissors");
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    }
    else {
        console.log("Error, please type: rock, paper and scissors");
    }
};
const game= () =>{
    let playerScore = 0;
    let computerScore = 0;
  

    for(let i = 0; i<5; i++){
        const playRound = (playerSelection, computerSelection) => {
            if (playerSelection === computerSelection) {
                return "tie the game";
            }
            else if (playerSelection == "rock") {
                if (computerSelection == "Scissors") {
                    playerScore++;
                    return "You win! Rock beats Scissors";
                }
                else {
                    computerScore++;
                    return "You lose! Paper beats Rock";
                }
            }
            else if (playerSelection == "scissors") {
                if (computerSelection == "Paper") {
                    playerScore++;
                    return "You win! Scissors beats Paper";
                }
                else {
                    computerScore++;
                    return "You lose! Rock beats Scissors";
                }
            }
            else if (playerSelection == "paper") {
                if (computerSelection == "Rock") {
                    playerScore++;
                    return "You win! Paper beats Rock";
                }
                else {
                    computerScore++;
                    return "You lose! Scissors beats Paper";
                }
            }
        };  
        const playerChoice = getPlayerChoice();
        const computerChoice = computerPlay(); 
        console.log(playRound(playerChoice, computerChoice));
    }
    let playerScoreBoard=playerScore;
    let computerScoreBoard = computerScore;
    console.log(playerScoreBoard,computerScoreBoard);
    if(playerScoreBoard > computerScoreBoard){
        alert("You won the game");
    }
    else if(playerScoreBoard < computerScoreBoard){
        alert("You lose the game");
    }
    else{
        alert("Tie the game");
    }

};
game();