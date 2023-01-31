function computerPlay(){
    //randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
    let randomNumber = Math.floor(Math.random()*10/4);
    switch(randomNumber){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
        default:
            return "Something went wrong";
    }
}

const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(computerResult);

function playRound(playerSelection, computerSelection){

    //return a string that declares the winner
}

//console.log(playRound(playerSelection,computerSelection));