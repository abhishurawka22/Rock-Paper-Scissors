let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors"
}

function win(user, computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(user)
    result_div.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord}. You Win! 🔥`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => document.getElementById(user).classList.remove('green-glow'), 300);
}

function lose(user, computer){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(user)
    result_div.innerHTML = `${convertToWord(user)}${smallUserWord} losses to ${convertToWord(computer)}${smallCompWord}. You Lost 💩`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => document.getElementById(user).classList.remove('red-glow'), 300);
}

function draw(user, computer){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(user)
    result_div.innerHTML = `${convertToWord(user)}${smallUserWord} equals ${convertToWord(computer)}${smallCompWord}. It's a Draw`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => document.getElementById(user).classList.remove('gray-glow'), 300);
}


function game(userChoice ) {
    const computerChoice = getComputerChoice()
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            // console.log("User Wins!");
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            // console.log("Computer Wins!");
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice);
            // console.log("Its a Draw")
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

main();