// random pick for computer
function computerPlay() {
    const randNum = Math.floor(Math.random() * 3 + 1);
    if (randNum == 1) {
        return 'Rock';
    } else if (randNum == 2) {
        return 'Paper';
    } else {
        return 'Scissors'
    }
}

// ask user for input (Rock, Paper, or Scissors)
function userPlay() {
    checkChoice = true;
    while (checkChoice) {
        userChoice = prompt('Choose either Rock, Paper, or Scissors');
        userChoice = userChoice.slice(0, 1).toUpperCase() + userChoice.slice(1).toLowerCase();
        if (userChoice == 'Rock' || userChoice == 'Paper' || userChoice == 'Scissors') {
            return userChoice;
        } else {
            alert('You did not enter a valid choice. Please try again.');
        }
    }
}

// Play a round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'Rock' && computerSelection == 'Scissors' ||
        playerSelection == 'Paper' && computerSelection == 'Rock' ||
        playerSelection == 'Scissors' && computerSelection == 'Paper') {
            return `You Win! ${playerSelection} beats ${computerSelection}`;
      } else if (playerSelection == computerSelection) {
        return `It's a tie! You both chose ${computerSelection}`;
      } else {
          return `You Lose! ${computerSelection} beats ${playerSelection}`;
      }
}

const playerSelection = userPlay();
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));