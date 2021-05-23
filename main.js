const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const computerChoice = document.getElementById("computerChoice");
const resetbtn = document.getElementById("btn");
const resetButton = document.getElementById("button");
const body = document.querySelector("body");
const newh3 = document.createElement("h3");
newh3.style.textAlign = "center";
const collection = document.querySelector("#userCollection");
body.insertBefore(newh3, collection);
computerChoice.style.height = "200px";
computerChoice.style.width = "200px";
var infinitePlay = false;
// computer random selection
computerPlay = () => {
  const game = ["Rock", "Paper", "Scissor"];
  var result = game[Math.floor(Math.random() * 3)];

  return result;
};

// score keeper
var player = 0;
var computer = 0;

// player Selection
const option1 = document.getElementById("userCollection");
option1.addEventListener("click", (e) => {
  console.log(e.target);
  round(e.target.alt, computerPlay);
  displayScore(); //displaying player and computer score on screen
});

//all display material
displayScore = () => {
  if (computerPlay().toLowerCase() == "paper") {
    computerChoice.style.backgroundImage = "url('./images/paper.png ')";
    computerChoice.style.backgroundSize = "cover";
  } else if (computerPlay().toLowerCase() == "rock") {
    computerChoice.style.backgroundImage = "url('./images/rock.png ')";
    computerChoice.style.backgroundSize = "cover";
  } else {
    computerChoice.style.backgroundImage = "url('./images/scissor.png ')";
    computerChoice.style.backgroundSize = "cover";
  }

  playerScore.innerText = "Player Score is " + player;
  computerScore.innerText = "Computer Score is " + computer;
  if (infinitePlay == false) {
    if (player == 5) {
      alert(
        "Player has won \n" +
          "Click on the Reset button to reset the score or ignore to play indefinitely"
      );
      infinitePlay = true;
      resetbtn.style.display = "flex";
    } else if (computer == 5) {
      alert(
        "Computer has won \n" +
          "Click on the Reset button to reset the score or ignore to play indefinitely"
      );
      resetbtn.style.display = "flex";
      infinitePlay = true;
    }
  }
};

// algo for checking who wins
round = (playerSelection, computerSelection) => {
  computerSelection = computerPlay().toLowerCase();

  if (
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "rock" && computerSelection == "scissor") ||
    (playerSelection == "scissor" && computerSelection == "paper")
  ) {
    newh3.textContent = "Player has won the round";

    player++;
    c;
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "scissor" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "scissor")
  ) {
    newh3.textContent = "Computer has won the round";

    computer++;
  } else if (
    playerSelection !== "paper" &&
    playerSelection !== "rock" &&
    playerSelection !== "scissor"
  ) {
    console.log(playerSelection);
    console.log("  Error:  Enter valid input");
  } else {
    console.log(computerSelection);

    newh3.textContent = "It's a draw";
  }
  return 0;
};

//Reset the scores
resetButton.addEventListener("click", () => {
  player = 0;
  computer = 0;
  playerScore.innerText = "";
  computerScore.innerText = "";
  newh3.textContent = "";
  infinitePlay = false;
  resetbtn.style.display = "none";
});
