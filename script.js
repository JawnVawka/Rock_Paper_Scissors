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

console.log(computerPlay())