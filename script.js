function computerPlay(options) {
    return (options)[Math.floor(Math.random()*(options).length)];
}
const options = ['Rock', 'Paper', 'Scissors']

function playRound(playerSelection, computerSelection) {
    if (computerSelection === 'Rock') {
        return `Computer played ${computerSelection}. It's a tie!`
    } else if (computerSelection === 'Paper'){
        return `You lose! Computer played ${computerSelection}`
    } else if (computerSelection === 'Scissors') {
        return `You win! Computer played ${computerSelection}`
    }
}

const playerSelection = "Rock";
const computerSelection = computerPlay(options);
console.log(playRound(playerSelection, computerSelection));

function game(playRound) {
    for (let i = 0; i < 5; i++) {
        
     }
}