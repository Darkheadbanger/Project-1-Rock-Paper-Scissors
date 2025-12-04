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

    this.init();
  }

  init() {
    // Add event listeners to player choices
    this.playerChoice();
    this.computerChoice();
    this.winner();
  }

  playerChoice() {
    this.playerRock.addEventListener("click", () => {
      this.getPlayerChoice("rock");
      setTimeout(() => {
        this.getComputerChoice();
      }, 1000);
    });

    this.playerPaper.addEventListener("click", () =>
      this.getPlayerChoice("paper")
    );
    this.playerScissors.addEventListener("click", () =>
      this.getPlayerChoice("scissors")
    );
  }

  getPlayerChoice(element) {
    this.choicePlayerGame.innerHTML = `<p>Your choice is : ${element}</p>`;
  }

  computerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomChoose = Math.floor(Math.random() * choices.length);
    console.log("computerChoice", choices[randomChoose]);
    return choices[randomChoose];
  }

  getComputerChoice() {
    this.choiceComputerGame.innerHTML = `<p>The computer choice is : ${this.computerChoice()}</p>`;
  }

  winner() {
    
  }
}
