function computerPlay(rps) {
    return rps[Math.floor(Math.random()*rps.length)];
}

const rps =['Rock', 'Paper', 'Scissors'];
console.log(computerPlay(rps));

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `I guess it's a tie.`
    } else if (playerSelection !== computerSelection) {
        return `who the fuck knows, man`
    }
}

const playerSelection = "Rock";
const computerSelection = computerPlay(rps);
console.log(playRound(playerSelection, computerSelection));