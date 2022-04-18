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
    let results = '';

    if (computerSelection === playerSelection) {
        results = `Computer played ${computerSelection}. It's a tie!`
    } else if ((computerSelection === 'Paper' && (playerSelection === `Scissors`)) || 
            (computerSelection === 'Rock' && (playerSelection === `Paper`)) ||
            (computerSelection === 'Scissors' && (playerSelection === `Rock`))) { 
        results = `Computer played ${computerSelection}. YOU WIN!`
    } else {
        results = `You lose! Computer played ${computerSelection}.`
    }
    return results
}

buttons.forEach(button =>{
    button.addEventListener('click', () => {
        result.textContent = `${playRound(button.value)}`
    })
})

function game() {
    let roundResult = playRound(button.value);

    if (roundResult.search('YOU WIN!') > -1) {
        userScore++;
    } else if (roundResult.search('You Lose!') > -1) {
        compScore++;
    }
    
    if (userScore >= 5) {
        score.textContent = `You won the game!`
    } else if (compScore == 5) {
        score.textContent = `Computer won the game! Reload the page to play again.`
    } else (compScore <5 || userScore <5); {
        score.textContent = `You have ${userScore}, Computer has ${compScore}`;
}}



