let playerScore = 0;
let computerScore = 0;
let winnerMessage = "";

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getRandomChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[getRandomInt(3)]
}

function getPlayerChoice(event) {
    if (!event.target.matches("button")) return null;
    if (event.target.textContent === "I feel lucky!") return getRandomChoice();
    return event.target.textContent.toLowerCase();
}

function playRound(pChoice, cChoice) {
    winnerMessage = "";
    if (pChoice === cChoice) {
        return "Its a tie";
    } else if (
        pChoice === "rock" && cChoice === "scissors" ||
        pChoice === "paper" && cChoice === "rock" ||
        pChoice === "scissors" && cChoice === "paper"
    ) {
        playerScore += 1;
        return `You win! ${pChoice} beats ${cChoice}`;
    } else {
        computerScore += 1;
        return `Computer wins! ${cChoice} beats ${pChoice}`;
    }

}

const btn = document.querySelector("ul");
const cScore = document.querySelector(".computer-score");
const pScore = document.querySelector(".player-score");
const resultMessage = document.querySelectorAll(".result")

btn.addEventListener("click", (e) => {
    const playerChoice = getPlayerChoice(e);
    const computerChoice = getRandomChoice();
    if(playerChoice === null) return;
    const result = playRound(playerChoice, computerChoice);
    cScore.textContent = computerScore;
    pScore.textContent = playerScore;
    
    resultMessage[0].textContent = `Computer chose: ${computerChoice}`; 
    resultMessage[1].textContent = `You chose: ${playerChoice}`;
    resultMessage[2].textContent = result;
})