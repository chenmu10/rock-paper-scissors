const OPTIONS = ["rock", "paper", "scissors"];
const PLAYER_ONE = "user";
const PLAYER_TWO = "computer";
const score = { user: 0, computer: 0 };

game();

function game() {
  console.log("Run 5 games");
  for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt(
      `Round ${i}: Enter Selection (rock,paper,scissors): `,
      "paper"
    );
    playerSelection = playerSelection.toLowerCase();
    while (!OPTIONS.includes(playerSelection)) {
      playerSelection = prompt(
        `Round ${i}: Text Error! Enter Selection (rock,paper,scissors): `,
        "paper"
      );
      playerSelection = playerSelection.toLowerCase();
    }

    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }
  showResults();
}


function playRound(playerSelection, computerSelection) {
  console.log({ playerSelection });
  console.log({ computerSelection });

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
}

function showResults() {
  console.log("results are:");
  console.log({ score });
  if (score.user > score.computer) {
    console.log(`${PLAYER_ONE} won the game.`);
  } else {
    console.log(`${PLAYER_TWO} won the game.`);
  }
}



