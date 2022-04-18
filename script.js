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
    
    if (computerSelection === playerSelection) {
        return `Computer played ${computerSelection}. It's a tie!`
    } else if ((computerSelection === 'Paper' && (playerSelection === `Scissors`)) || 
            (computerSelection === 'Rock' && (playerSelection === `Paper`)) ||
            (computerSelection === 'Scissors' && (playerSelection === `Rock`))) { 
        userScore++;
        return `Computer played ${computerSelection}. YOU WIN!`
} else {
    compScore++;
    return `You lose! Computer played ${computerSelection}.`
}
}

buttons.forEach(button =>{
    button.addEventListener('click', () => {
        result.textContent = `${playRound(button.value)}`
    })
})

function scores() {
    if (userScore == 5) {
        return `You won the game!`
} else if (compScore == 5) {
   return `Computer won the game! Reload the page to play again.`
} else (compScore <5 || userScore <5); {
    return `You have ${userScore}, Computer has ${compScore}`;
}}
score.textContent = `${scores()}`;

