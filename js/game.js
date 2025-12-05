export class Game {
  constructor() {
    // Player choices
    this.playerRock = document.getElementById("player-rock");
    this.playerPaper = document.getElementById("player-paper");
    this.playerScissors = document.getElementById("player-scissors");

    // Computer choices
    this.computerRock = document.getElementById("computer-rock");
    this.computerPaper = document.getElementById("computer-paper");
    this.computerScissors = document.getElementById("computer-scissors");

    // The choice:
    this.choicePlayerGame =
      document.getElementsByClassName("choice-player-game");
    this.choiceComputerGame = document.getElementsByClassName(
      "choice-computer-game"
    );

    // Score:
    this.choicePlayerGame = document.getElementById("choice-player-game");
    this.choiceComputerGame = document.getElementById("choice-computer-game");

    // Winners and losers:
    this.winnerLoser = document.getElementById("winner");
    this.playerChoiceElement = null;
    this.computerChoiceElement = null;

    this.init();
  }

  init() {
    // Add event listeners to player choices
    this.playerChoice();
    this.computerChoice();
  }

  playerChoice() {
    this.playerRock.addEventListener("click", () => {
      this.getPlayerChoice("rock");
      setTimeout(() => {
        this.getComputerChoice();
      }, 1000);
      setTimeout(() => {
        this.winner();
      }, 1200);
    });

    this.playerPaper.addEventListener("click", () => {
      this.getPlayerChoice("paper");
      setTimeout(() => {
        this.getComputerChoice();
      }, 1000);
      setTimeout(() => {
        this.winner();
      }, 1200);
    });
    this.playerScissors.addEventListener("click", () => {
      this.getPlayerChoice("scissors");
      setTimeout(() => {
        this.getComputerChoice();
      }, 1000);
      setTimeout(() => {
        this.winner();
      }, 1200);
    });
  }

  getPlayerChoice(element) {
    this.playerChoiceElement = element;
    this.choicePlayerGame.innerHTML = `<p>Your choice is : ${element}</p>`;
  }

  computerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoose = Math.floor(Math.random() * choices.length);
    console.log("computerChoice", choices[randomChoose]);
    return choices[randomChoose];
  }

  getComputerChoice() {
    this.computerChoiceElement = this.computerChoice();
    this.choiceComputerGame.innerHTML = `<p>The computer choice is : ${this.computerChoiceElement}</p>`;
  }

  winner() {
    const playerChoiceElement = this.playerChoiceElement;
    const computerChoiceElement = this.computerChoiceElement;

    if (playerChoiceElement === computerChoiceElement) {
      return (this.winnerLoser.textContent = "Draw");
    } else if (
      (playerChoiceElement === "rock" &&
        computerChoiceElement === "scissors") ||
      (playerChoiceElement === "scissors" &&
        computerChoiceElement === "paper") ||
      (playerChoiceElement === "paper" && computerChoiceElement === "rock")
    ) {
      return (this.winnerLoser.textContent = "Player wins");
    } else {
      return (this.winnerLoser.textContent = "Computer wins");
    }
  }
}
