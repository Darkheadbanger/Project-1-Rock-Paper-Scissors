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

    this.init();
  }

  init() {
    // Add event listeners to player choices
    playerChoice();
    computerChoice();
    winner();
  }

  playerChoice() {
    this.playerRock.addEventListener("click", () => this.playRound("rock"));
    this.playerPaper.addEventListener("click", () => this.playRound("paper"));
    this.playerScissors.addEventListener("click", () =>
      this.playRound("scissors")
    );
  }

  playRound(playerChoice) {
    if (playerChoice === "rock") {
    } else if (playerChoice === "paper") {
    } else {
    }
  }

  computerChoice() {
    let choices = ["rock", "paper", "scissor"];
    let randomChoose = Math.floor(Math.random() * choices.length);
    return randomChoose[choices];
  }

  winner(){
    
  }
}
