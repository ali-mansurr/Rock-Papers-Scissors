function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice () {
    let randomInt = getRandomInt(3);
    let computerChoice = undefined;
    switch (randomInt) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
        default:
            break;
    }
    return computerChoice;
}
