function computerPlay(rps) {
    return rps[Math.floor(Math.random()*rps.length)];
}

const rps =['Rock', 'Paper', 'Scissors'];
console.log(computerPlay(rps));

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie!`
    } else if (playerSelection == "rock" && computerSelection == "Paper") {
        return 'You Lose! Paper beats rock!' 
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        return `You win! Paper beats rock!`
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay(rps);
console.log(playRound(playerSelection, computerSelection));