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

console.log(userPlay());