let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.round(Math.random() * 9);
}

function compareGuesses(userGuess, computerGuess, targetNumber) {
    let userDifference = Math.abs(targetNumber - userGuess);
    let computerDifference = Math.abs(targetNumber - computerGuess);

    return userDifference <= computerDifference;
}

function updateScore(winner) {
    if (winner === "human") {
        humanScore++;
    } else if (winner === "computer") {
        computerScore++;
    }                 
}

function advanceRound() {
    currentRoundNumber++;
}

