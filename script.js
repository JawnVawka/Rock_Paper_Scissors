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
        resultOutput('You have won!');
    } else if (computerChoice === playerChoice) {
        resultOutput('You have tied!');
    } else {
        computerPoints += 1;
        resultOutput('You have lost!');
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
    const result = document.getElementById('gameResult');

    if (playerPoints == 5) {
        child.src = 'images/winner.svg';
        parent.appendChild(child);
        document.body.removeChild(result);
        playAgain();
    } else if (computerPoints == 5) {
        child.src = 'images/loser.svg';
        parent.appendChild(child);
        document.body.removeChild(result);
        playAgain();
    }
}

function resultOutput(result) {
    if(document.getElementById('gameResult')) {
        const divResult =  document.getElementById('gameResult');
        divResult.textContent = `${result}`;
    } else {
        const parentDiv = document.getElementById('playerOptions');
        const newDiv = document.createElement('div');
        newDiv.setAttribute('id', 'gameResult');
        document.body.appendChild(newDiv);
        newDiv.textContent = `${result}`;
    }
}

function playAgain() {
    const parentDiv = document.createElement('div');
    const newButton = document.createElement('button');
    parentDiv.setAttribute('id', 'playAgain');
    newButton.textContent = `Play Again`;
    document.body.appendChild(parentDiv);
    parentDiv.appendChild(newButton).addEventListener("click", () => location.reload());
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