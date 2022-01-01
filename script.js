const OPTIONS = ["rock", "paper", "scissors"];
const PLAYER_ONE = "user";
const PLAYER_TWO = "computer";
const score = { user: 0, computer: 0 };
let roundNum = 1;

const resultsEl = document.querySelector('#results');
const buttons = document.querySelectorAll('button');
document.querySelectorAll("button").forEach((item) => {
  item.addEventListener("click", (event) => {
    console.log(event.target.id);
    const playerSelection = event.target.id.toLowerCase();
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  });
});


function playRound(playerSelection, computerSelection) {
  const roundEl = document.createElement("div");
  roundEl.className = "round";
  roundEl.textContent = `Round ${roundNum++} `;
  roundEl.textContent += `player: ${playerSelection} computer: ${computerSelection}`;
  resultsEl.appendChild(roundEl);

  switch (playerSelection) {
    case computerSelection:
      console.log("tie");
      break;
    case "rock":
      if (computerSelection === "paper") {
        roundWon(PLAYER_TWO);
      } else {
        roundWon(PLAYER_ONE);
      }
      break;
    case "paper":
      if (computerSelection === "scissors") {
        roundWon(PLAYER_TWO);
      } else {
        roundWon(PLAYER_ONE);
      }
      break;
    case "scissors":
      if (computerSelection === "rock") {
        roundWon(PLAYER_TWO);
      } else {
        roundWon(PLAYER_ONE);
      }
      break;
  }
}

function computerPlay() {
  const randomIndex = Math.floor(Math.random() * 3);
  return OPTIONS[randomIndex];
}

function roundWon(winner) {
  score[winner] += 1;
  console.log(`${winner} won round.`);
  if (score.user + score.computer === 3) {
    showResults();
  }
}

function showResults() {
  const resultEl = document.createElement("div");
  resultEl.className = "result";
 
  console.log("results are:");
  console.log({ score });
  if (score.user > score.computer) {
    resultEl.textContent = `${PLAYER_ONE} won the game.`;
  } else {
    resultEl.textContent = `${PLAYER_TWO} won the game.`;
  }
   resultsEl.appendChild(resultEl);
}



