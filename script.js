function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

// Ask user for their choice
function userChoice() {
    return prompt('Choose Rock, Paper, or Scissors');
}

// Ask user for their choice
function errorChoice() {
    return prompt('You entered an invalid choice. Choose Rock, Paper, or Scissors');
}

// Capitalize user choice
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

// Check to make sure they entered a valid choice
function validateChoice() {
    let choice = capitalize(userChoice());
    let repeat = true;
    while (repeat) {
        if (choice == 'Rock' || choice == 'Paper' || choice == 'Scissors') {
            repeat = false;
            return choice;
        } else {
            choice = capitalize(errorChoice());
        }
    }
}

function playRound (playerSeleciton, computerSelection) {
    // create game to check who won
    if ((playerSeleciton == 'Rock' && computerSelection == 'Scissors') || (playerSeleciton == 'Paper' && computerSelection == 'Rock') || (playerSeleciton == 'Scissors' && computerSelection == 'Paper')) {
        return `You Win! ${playerSeleciton} beats ${computerSelection}`;
    } else if ((playerSeleciton == 'Rock' && computerSelection == 'Paper') || (playerSeleciton == 'Paper' && computerSelection == 'Scissors') || (playerSeleciton == 'Scissors' && computerSelection == 'Rock')) {
        return `You Lose! ${computerSelection} beats ${playerSeleciton}`;
    } else {
        return `It's a Tie! You both chose ${playerSeleciton}`;
    }
}

let playerSeleciton = validateChoice();
let computerSelection = computerPlay();

console.log(playRound(playerSeleciton, computerSelection));