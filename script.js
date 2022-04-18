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
    score.textContent = `You: ${userScore} Computer: ${compScore}`

    if (computerSelection === playerSelection) {
        results = `You both played ${computerSelection}. It's a tie!`
    } else if ((computerSelection === 'Paper' && (playerSelection === `Scissors`)) || 
            (computerSelection === 'Rock' && (playerSelection === `Paper`)) ||
            (computerSelection === 'Scissors' && (playerSelection === `Rock`))) { 
        userScore++
        results = `${playerSelection} beats ${computerSelection}. YOU WIN!`

        if (userScore ==5) {
            results += ` You won the whole game WOW`
        }
    } else {
        compScore++
        results = `${computerSelection} beats ${playerSelection}. You lose.`

        if (compScore == 5) {
            results += `The computer won the whole game BUMMER`
        }
    }
    return results
}

buttons.forEach(button =>{
    button.addEventListener('click', () => {
        result.textContent = `${playRound(button.value)}`
    })
})





