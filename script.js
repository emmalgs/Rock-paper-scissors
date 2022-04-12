
let userScore = 0;
let compScore = 0;

function computerPlay() {
    let number = Math.floor(Math.random() * (3+1));
    if (number == 1)
        return 'Rock';
    else if(number == 2)
        return 'Paper';
    else return 'Scissors';
}

function game(playRound) {
    for (let i = 0; i < 5; i++) {
     }
}

let computerSelection = computerPlay();
let playerSelection = prompt("Rock, Paper, or Scissors?")

function playRound(playerSelection, computerSelection) {
    if (computerSelection === 'Rock' && (playerSelection.toUpperCase() === 'ROCK')) {
        return `Computer played ${computerSelection}. It's a tie!`
    } else if (computerSelection === 'Paper' && (playerSelection.toUpperCase() === 'ROCK')) {
        return `You lose! Computer played ${computerSelection}`
    } else if (computerSelection === 'Scissors' && (playerSelection.toUpperCase() === 'ROCK')) {
        return `You win! Computer played ${computerSelection}`
    } 
}

console.log(playRound(playerSelection, computerSelection));



