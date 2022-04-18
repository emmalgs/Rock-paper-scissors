const buttons = document.querySelectorAll('input');
const result = document.querySelector('div#result');
const score = document.querySelector('div.score');

let userScore = 0;
let compScore = 0;

function computerPlay() {
    let choices = [`Rock`, `Paper`, `Scissors`]
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
//for a tie
    if (computerSelection === playerSelection) {
        return `Computer played ${computerSelection}. It's a tie!`
        //user wins
    } else if ((computerSelection === 'Paper' && (playerSelection === `Scissors`)) || 
            (computerSelection === 'Rock' && (playerSelection === `Paper`)) ||
            (computerSelection === 'Scissors' && (playerSelection === `Rock`))) { 
        userScore++;
        return `Computer played ${computerSelection}. YOU WIN!`

        if (userScore == 5) {
            score.textContent = `You won the game!`
        }
        //comp wins
} else {
    compScore++;
    return `You lose! Computer played ${computerSelection}.`

    if (compScore == 5) {
        score.textContent = `Computer won the game! Reload the page to play again.`
    }
}
}

buttons.forEach(button =>{
    button.addEventListener('click', () => {
        result.textContent = `${playRound(button.value)}`
        score.textContent = `You have ${userScore}, Computer has ${compScore}`;
    })
})

