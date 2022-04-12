function computerPlay(rps) {
    return rps[Math.floor(Math.random()*rps.length)];
}

const rps =['Rock', 'Paper', 'Scissors'];
console.log(computerPlay(rps));

function playRound(playerSelection, computerSelection) {
    if ((computerSelection === 'Rock' && playerSelection === 'paper') OR 
    (computerSelection === 'Paper' && playerSelection === 'Scissors') OR 
    (computerSelection === 'Scissors' && playerSelection === 'rock')) {
        return `Nice work! You win...this round`
    } else if ((computerSelection === 'Paper' && playerSelection === 'rock') OR
    (computerSelection === 'Rock' && playerSelection === 'Scissors') OR
    (computerSelection === 'Scissors' && playerSelection === 'paper')) {
        return `Too bad! You lose!`
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay(rps);
console.log(playRound(playerSelection, computerSelection));