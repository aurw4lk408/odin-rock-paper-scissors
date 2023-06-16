function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 10) + 1;

    if (randomNumber <= 4) {
        return "Rock";
    } else if (randomNumber > 4 && randomNumber <= 7) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


//running score and check for winner//
let playerScore = 0;
let computerScore = 0;

function checkWin() {
    if (playerScore === 5) {
        alert("You won! You've reached 5 points");
        document.querySelector('.reset').style.display = 'flex';
        disableButtons();    
    }
    else if (computerScore === 5) {
        alert("You lost! The computer reached 5 points");
        document.querySelector('.reset').style.display = 'flex';
        disableButtons();
    }
    else {
        return;
    }
}

function disableButtons() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((button) => {
        button.disabled = true;
    });
    images.forEach((image) => {
        image.addEventListener('mouseover', () => {
            image.classList.remove('enlarge');
            image.classList.add('normal');
        });
    });
};


function playRoundRock() {
    let playerSelection = "rock";
    let computerSelection = getComputerChoice();

    if (playerSelection === "rock") {
        switch (computerSelection) {
            case "Rock":
                document.querySelector('.player-text').textContent =  "Player Choice: Rock";
                document.querySelector('.computer-text').textContent =  "Computer Choice: Rock";
                document.querySelector('.round').textContent = "Draw! Rock ties with Rock";
                document.querySelector('.change').src = "images/computer_rock.jpeg";
                break;
            case "Paper":
                document.querySelector('.player-text').textContent =  "Player Choice: Rock";
                document.querySelector('.computer-text').textContent =  "Computer Choice: Paper";
                document.querySelector('.round').textContent = "You lose! Paper beats Rock";
                document.querySelector('.change').src = "images/computer_paper.jpg";
                computerScore++;
                document.querySelector('.computer').textContent = `Computer Score: ${computerScore}`;
                checkWin();
                break;
            case "Scissors":
                document.querySelector('.player-text').textContent =  "Player Choice: Rock";
                document.querySelector('.computer-text').textContent =  "Computer Choice: Scissors";
                document.querySelector('.round').textContent = "You win! Rock beats Scissors";
                document.querySelector('.change').src = "images/computer_scissors.jpeg";
                playerScore++;
                document.querySelector('.player').textContent = `Player Score: ${playerScore}`;
                checkWin();
                break;
        }
    }
}

function playRoundPaper() {
    let playerSelection = "paper";
    let computerSelection = getComputerChoice();

    if (playerSelection === "paper") {
        switch (computerSelection) {
            case "Rock":
                document.querySelector('.player-text').textContent =  "Player Choice: Paper";
                document.querySelector('.computer-text').textContent =  "Computer Choice: Rock";
                document.querySelector('.round').textContent = "You win! Paper beats Rock";
                playerScore++;
                document.querySelector('.player').textContent = `Player Score: ${playerScore}`;
                document.querySelector('.change').src = "images/computer_rock.jpeg";
                checkWin();
                break;
            case "Paper":
                document.querySelector('.player-text').textContent =  "Player Choice: Paper";
                document.querySelector('.computer-text').textContent =  "Computer Choice: Paper";
                document.querySelector('.round').textContent = "Draw! Paper ties with Paper";
                document.querySelector('.change').src = "images/computer_paper.jpg";
                break;
            case "Scissors":
                document.querySelector('.player-text').textContent =  "Player Choice: Paper";
                document.querySelector('.computer-text').textContent =  "Computer Choice: Scissors";
                document.querySelector('.round').textContent = "You lose! Scissors beats Paper";
                document.querySelector('.change').src = "images/computer_scissors.jpeg";
                computerScore++;
                document.querySelector('.computer').textContent = `Computer Score: ${computerScore}`;
                checkWin();
                break;
        }
    }
}

function playRoundScissors() {
    let playerSelection = "scissors";
    let computerSelection = getComputerChoice();

    if (playerSelection === "scissors") {
        switch (computerSelection) {
            case "Rock":
                document.querySelector('.player-text').textContent =  "Player Choice: Scissors"
                document.querySelector('.computer-text').textContent =  "Computer Choice: Rock"
                document.querySelector('.round').textContent = "You lose! Rock beats Scissors";
                document.querySelector('.change').src = "images/computer_rock.jpeg";
                computerScore++;
                document.querySelector('.computer').textContent = `Computer Score: ${computerScore}`;
                checkWin();
                break;
            case "Paper":
                document.querySelector('.player-text').textContent =  "Player Choice: Scissors"
                document.querySelector('.computer-text').textContent =  "Computer Choice: Paper"
                document.querySelector('.round').textContent = "You win! Scissors beats Paper";
                document.querySelector('.change').src = "images/computer_paper.jpg";
                playerScore++;
                document.querySelector('.player').textContent = `Player Score: ${playerScore}`;
                checkWin();
                break;
            case "Scissors":
                document.querySelector('.player-text').textContent =  "Player Choice: Scissors"
                document.querySelector('.computer-text').textContent =  "Computer Choice: Scissors"
                document.querySelector('.round').textContent = "Draw! Scissors ties with Scissors";
                document.querySelector('.change').src = "images/computer_scissors.jpeg";
                break;
        }
    }
}

function resetGame() {
    window.location.reload();
}

//play a round//
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', playRoundRock);
paper.addEventListener('click', playRoundPaper);
scissors.addEventListener('click', playRoundScissors);

//reset game//
const reset = document.querySelector('.reset');
reset.addEventListener('click', resetGame);

//hover over button causes it to enlarge//
const images = document.querySelectorAll('.img');
images.forEach((image) => {
    image.addEventListener('mousemove', () => {
        image.classList.add('enlarge');
    });
    image.addEventListener('mouseleave', () => {
        image.classList.remove('enlarge');
    });
});
