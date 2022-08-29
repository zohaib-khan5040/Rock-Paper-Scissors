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

for (let i=0; i<5; i++) {
    game();
}