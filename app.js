// console.log("Hello World!")

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let choiceInd = Math.floor(Math.random() * choices.length);
    let randChoice = choices[choiceInd];

    return randChoice;
}

function playRound(playerSelection, computerSelection) {
    // Turn the parameters into lowercase
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();

    // Check the winning conditions: R-P, R-S, P-S
    if ((ps == "rock" && cs == "paper") || (ps == "paper" && cs == "rock")) {
        if (ps == "paper") 
            return ("You Win! Paper beats Rock!")
        else
            return ("You Lose! Paper beats Rock!")
    }
    else if ((ps == "rock" && cs == "scissors") || (ps == "scissors" && cs == "rock")) {
        if (ps == "rock") 
            return ("You Win! Rock beats Scissors!")
        else
            return ("You Lose! Rock beats Scissors!")
    }
    else if ((ps == "paper" && cs == "scissors") || (ps == "scissors" && cs == "paper")) {
        if (ps == "scissors") 
            return ("You Win! Scissors beats Paper!")
        else
            return ("You Lose! Scissors beats Paper!")
    }
    else {
        return (`Tie! ${ps} does not beat ${cs}`);
    }
}

function game() {
    let playerChoice = prompt("Your Move: ");
    let computerChoice = getComputerChoice();

    let result = playRound(playerChoice, computerChoice);

    console.log(result);
}

let gamesWon = 0;
let gamesPlayed = 0;
const scoreDisplay = document.querySelector('#score');

// Get the three buttons for player choice and add click listeners
const buttons = document.querySelectorAll(".selection");
buttons.forEach((button) => {
    button.addEventListener("click", function (e) {

        if (gamesPlayed == 5) {
            let winnerStatement = gamesWon >= 3 ? "You are" : "You are not";
            alert(`Match Finished! ${winnerStatement} the Winner!`);
            return;
        }
        
        let ps = button.innerText;
        let cs = getComputerChoice();

        console.log(`Player clicked ${ps}`);

        // Play a round of RPS
        let result = playRound(ps, cs);
        gamesPlayed++;
        alert(result);
        
        if (result.startsWith("You Win")) {
            scoreDisplay.innerText = `${++gamesWon}/5`;
        }

    })
})