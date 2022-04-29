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

function checkWinner() {
    if (playerChoice === 'Rock' && computerChoice === 'Scissors' ||
        playerChoice === 'Paper' && computerChoice === 'Rock' ||
        playerChoice === 'Scissors' && computerChoice === 'Paper') {
        playerPoints += 1;
    } else if (computerChoice === playerChoice) {
        return;
    } else {
        computerPoints += 1;
    };
}

function removeImages() {
    const parent = document.getElementById('playerOptions');
    const child = document.getElementsByTagName('img');
    if (playerPoints == 5 || computerPoints == 5) {
        for (let i = 0; i < child.length; i) {
            parent.removeChild(child[i]);
        }
    }
}

function declareWinner() {
    removeImages();
    const parent = document.getElementById('playerOptions');
    const child = document.createElement('img')

    if (playerPoints == 5) {
        child.src = 'images/winner.svg';
        parent.appendChild(child);
    } else if (computerPoints == 5) {
        child.src = 'images/loser.svg';
        parent.appendChild(child);
    }
}

function playRound(choice) {
    computerChoice = computerPlay();
    playerChoice = choice.target.className;

    checkWinner();

    playerPointDisplay.textContent = `Player: ${playerPoints}`;
    computerPointDisplay.textContent = `Computer: ${computerPoints}`;

    declareWinner();
}

let playerPoints = 0;
let computerPoints = 0;

const choiceId = document.getElementById('playerOptions');
const choiceArray = choiceId.getElementsByTagName('img');

let playerPointDisplay = document.querySelector(".userScore");
let computerPointDisplay = document.querySelector(".computerScore");

for (i = 0; i < choiceArray.length; i++) {
    choiceArray[i].addEventListener("click", playRound);
}