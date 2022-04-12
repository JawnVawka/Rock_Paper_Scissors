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
            console.log();
            return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == computerSelection) {
        console.log();
        return `It's a tie! You both chose ${computerSelection}`;
    } else {
        console.log();
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}
// calculate points and declare winner
function calcPoints(playerPoints, computerPoints) {
    if (playerPoints > computerPoints) {
        return `You Win! You: ${playerPoints} Computer: ${computerPoints}`;
    } else if (playerPoints < computerPoints) {
        return `You Lose! You: ${playerPoints} Computer: ${computerPoints}`;
    } else {
        return `You Tied! You: ${playerPoints} Computer: ${computerPoints}`;
    }
}
// play 5 rounds of rock, paper, scissors
function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = userPlay();
        const computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);

        console.log(result);

        if (result.slice(0, result.indexOf('!')) == 'You Win') {
            playerPoints += 1;
        } else if (result.slice(0, result.indexOf('!')) == 'You Lose') {
            computerPoints += 1;
        }
    }

    console.log(calcPoints(playerPoints, computerPoints));
}

console.log(game());