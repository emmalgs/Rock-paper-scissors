//Global variables
let userScore = 0;
let compScore = 0;

//computer selects random Rock Paper Scissors
function computerPlay() {
    let number = Math.floor(Math.random() * (3+1));
    if (number == 1)
        return 'Rock';
    else if(number == 2)
        return 'Paper';
    else return 'Scissors';
}


//Plays one round of the game
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

//This loops through 5 rounds of the playRound function.
//
function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        console.log(playRound(playerSelection, computerSelection))
        console.log(`YOU ${userScore} - COMPUTER ${compScore}`)
   }
   if (userScore < compScore) {
       console.log("Computer Wins! Better try again.")
   } else if (userScore > compScore) {
       console.log("YOU WON THE WHOLE GAME WOW!")
   } else if (userScore == compScore) {
       console.log("It's a DRAW!")
   }
}

game(playRound)