function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
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

function getHumanChoice() {
    let input = prompt("Choose your move: \n1. Rock \n2. Paper \n3. Sciccors \nEnter the number of your choice:")
    let humanChoice = undefined;
    switch (Number(input)) {
        case 1:
            humanChoice = "rock";
            break;
        case 2:
            humanChoice = "paper";
            break;
        case 3:
            humanChoice = "scissors";
            break;
        default:
            alert("Invalid Input");
            break;
    }
    return humanChoice;
}

console.log(getHumanChoice())

// function playRound (humanChoice, computerChoice) {
//     if(humanChoice === computerChoice) {

//     }
// }

// let humanScore = 0;
// let computerScore = 0;

