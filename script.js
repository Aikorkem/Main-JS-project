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
    let userInput = prompt("Enter your choice Rock, Paper and Scissors");
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    }
    else {
        console.log("Error, please type: rock, paper and scissors");
    }
};
const game = () =>{
    let playerScore = 0;
    let computerScore = 0;
    alert("Let's start the game");
    for(let i = 0; i<5; i++){
        console.log("Playing Round: ",i+1);
        const playRound = (playerSelection, computerSelection) => {
            if (playerSelection === computerSelection) {
                return "Tie the game";
            }
            else if (playerSelection == "rock") {
                if (computerSelection == "scissors") {
                    playerScore++;
                    return "You win! Rock beats Scissors";
                }
                else {
                    computerScore++;
                    return "You lose! Paper beats Rock";
                }
            }
            else if (playerSelection == "scissors") {
                if (computerSelection == "paper") {
                    playerScore++;
                    return "You win! Scissors beats Paper";
                }
                else {
                    computerScore++;
                    return "You lose! Rock beats Scissors";
                }
            }
            else if (playerSelection == "paper") {
                if (computerSelection == "rock") {
                    playerScore++;
                    return "You win! Paper beats Rock";
                }
                else {
                    computerScore++;
                    return "You lose! Scissors beats Paper";
                }
            }
            else{
                i--;
                return "Invaild Input";
            }
        };  
        const playerChoice = getPlayerChoice();
        const computerChoice = computerPlay().toLowerCase(); 
        console.log("Player choice: ", playerChoice);
        console.log("Computer choice: ", computerChoice);
        console.log(playRound(playerChoice, computerChoice));
    }
    console.log(`Total Player score: ${playerScore} and Computer score: ${computerScore}`);
    if(playerScore > computerScore){
        alert("You won the game");
    }
    else if(playerScore < computerScore){
        alert("You lose the game");
    }
    else{
        alert("Draw the game");
    }
};
game();