
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
        userScore = userScore + i;
        compScore = compScore + i;
     }
}

let computerSelection = computerPlay();
let playerSelection = prompt("Rock, Paper, or Scissors?")

function playRound(playerSelection, computerSelection) {
    if (computerSelection === 'Rock' && (playerSelection.toUpperCase() === 'ROCK')) {
        return `Computer played ${computerSelection}. It's a tie!`
    } else if (computerSelection === 'Paper' && (playerSelection.toUpperCase() === 'ROCK')) {
        compScore++;
        return `You lose! Computer played ${computerSelection}`
    } else if (computerSelection === 'Scissors' && (playerSelection.toUpperCase() === 'ROCK')) {
        userScore++;
        return `You win! Computer played ${computerSelection}`
    } else if (computerSelection === 'Rock' && (playerSelection.toUpperCase() === 'PAPER')) {
        userScore++;
        return `You win! Computer played ${computerSelection}`
    } else if (computerSelection === 'Paper' && (playerSelection.toUpperCase() === 'PAPER')) {
        return `Computer played ${computerSelection}. It's a tie!`
    } else if (computerSelection === 'Scissors' && (playerSelection.toUpperCase() === 'PAPER')) {
        compScore++;
        return `You lose! Computer played ${computerSelection}`
    } else if (computerSelection === 'Rock' && (playerSelection.toUpperCase() === 'SCISSORS')) {
        compScore++;
        return `You LOSE! Computer played ${computerSelection}`
    } else if (computerSelection === 'Paper' && (playerSelection.toUpperCase() === 'SCISSORS')) {
        userScore++;
        return `Computer played ${computerSelection}. YOU WIN!`
    } else if (computerSelection === 'Scissors' && (playerSelection.toUpperCase() === 'SCISSORS')) {
        return `It's a tie! Computer played ${computerSelection}`
    }
}
console.log(playRound(playerSelection, computerSelection));
