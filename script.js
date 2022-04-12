function computerPlay(rps) {
    return rps[Math.floor(Math.random()*rps.length)];
}

const rps =['Rock', 'Paper', 'Scissors'];
console.log(computerPlay(rps));