const OPTIONS = ["rock", "paper", "scissors"];
const PLAYER_ONE = "user";
const PLAYER_TWO = "computer";
const TIE = "tie";
const score = { user: 0, computer: 0, tie: 0 };
let roundNum = 1;

const resultsEl = document.querySelector("#results");
const buttons = document.querySelectorAll("button");
const scoreEl = document.querySelector("#score");

document.querySelectorAll("button").forEach((item) => {
  item.addEventListener("click", (event) => {
    const playerSelection = event.target.id.toLowerCase();
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  });
});

function playRound(playerSelection, computerSelection) {
  let winner;
  switch (playerSelection) {
    case computerSelection:
      winner = TIE;
      break;
    case "rock":
      if (computerSelection === "paper") {
        winner = PLAYER_TWO;
      } else {
        winner = PLAYER_ONE;
      }
      break;
    case "paper":
      if (computerSelection === "scissors") {
        winner = PLAYER_TWO;
      } else {
        winner = PLAYER_ONE;
      }
      break;
    case "scissors":
      if (computerSelection === "rock") {
        winner = PLAYER_TWO;
      } else {
        winner = PLAYER_ONE;
      }
      break;
  }

  roundOver(winner, computerSelection, playerSelection);
}

function computerPlay() {
  const randomIndex = Math.floor(Math.random() * 3);
  return OPTIONS[randomIndex];
}

function roundOver(winner, computerSelection, playerSelection) {
  score[winner] += 1;

  const roundResultsEl = document.createElement("div");
  roundResultsEl.className = "round-results";
  roundResultsEl.innerHTML = `

<h3>Round ${roundNum++}</h3>
  <div>${PLAYER_ONE}: ${playerSelection} </div>
  <div>${PLAYER_TWO}: ${computerSelection} </div>
  <div>winner: ${winner} </div>

  `;
  resultsEl.appendChild(roundResultsEl);

  scoreEl.innerHTML = `
   <h3>Score</h3>
  <ul>
          <li>user: <span id="player-one-score">${score.user}</span></li>
          <li>computer: <span id="player-two-score">${score.computer}</span></li>
          <li>tie: <span id="tie">${score.tie}</span></li>
        </ul>
  `;

  if (score.user + score.computer === 3) {
    gameResult();
  }
}

function gameResult() {
  const gameResultsEl = document.createElement("h3");
  let winner;
  gameResultsEl.className = "game-results";

  if (score.user > score.computer) {
    winner = PLAYER_ONE;
  } else {
     winner = PLAYER_TWO;
  }
  gameResultsEl.textContent = `${winner} won the game. Refresh to play again.`;
  resultsEl.appendChild(gameResultsEl);

  document.querySelectorAll("button").forEach((item) => {
    item.disabled = true;
  });


}
