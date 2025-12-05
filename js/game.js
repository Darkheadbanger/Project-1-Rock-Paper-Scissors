/**
 * Game class manages the core Rock Paper Scissors game logic.
 * Handles player input, computer choices, and winner determination.
 * 
 * @class Game
 */
export class Game {
  /**
   * Creates an instance of Game.
   * Initializes DOM elements and game state variables.
   * 
   * @constructor
   */
  constructor() {
    // Player choice elements
    this.playerRock = document.getElementById("player-rock");
    this.playerPaper = document.getElementById("player-paper");
    this.playerScissors = document.getElementById("player-scissors");

    // Computer choice elements
    this.computerRock = document.getElementById("computer-rock");
    this.computerPaper = document.getElementById("computer-paper");
    this.computerScissors = document.getElementById("computer-scissors");

    // Display elements for choices
    this.choicePlayerGame =
      document.getElementsByClassName("choice-player-game");
    this.choiceComputerGame = document.getElementsByClassName(
      "choice-computer-game"
    );

    // Display elements for game results
    this.choicePlayerGame = document.getElementById("choice-player-game");
    this.choiceComputerGame = document.getElementById("choice-computer-game");

    // Winner display element
    this.winnerLoser = document.getElementById("winner");
    
    // Game state variables
    this.playerChoiceElement = null;
    this.computerChoiceElement = null;

    this.init();
  }

  /**
   * Initializes the game by setting up event listeners.
   * 
   * @method init
   */
  init() {
    // Add event listeners to player choices
    this.playerChoice();
    this.computerChoice();
  }

  /**
   * Sets up click event listeners for player choices (rock, paper, scissors).
   * Each click triggers a 1-second delay for computer choice and 1.2-second delay for winner determination.
   * 
   * @method playerChoice
   */
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

  /**
   * Records and displays the player's choice.
   * 
   * @method getPlayerChoice
   * @param {string} element - The player's choice ("rock", "paper", or "scissors")
   */
  getPlayerChoice(element) {
    this.playerChoiceElement = element;
    this.choicePlayerGame.innerHTML = `<p>Your choice is : ${element}</p>`;
  }

  /**
   * Generates a random computer choice.
   * 
   * @method computerChoice
   * @returns {string} The computer's random choice ("rock", "paper", or "scissors")
   */
  computerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoose = Math.floor(Math.random() * choices.length);
    console.log("computerChoice", choices[randomChoose]);
    return choices[randomChoose];
  }

  /**
   * Gets and displays the computer's choice.
   * Calls computerChoice() to generate random selection.
   * 
   * @method getComputerChoice
   */
  getComputerChoice() {
    this.computerChoiceElement = this.computerChoice();
    this.choiceComputerGame.innerHTML = `<p>The computer choice is : ${this.computerChoiceElement}</p>`;
  }

  /**
   * Determines and displays the winner of the round.
   * Compares player and computer choices according to game rules:
   * - Rock beats Scissors
   * - Scissors beats Paper
   * - Paper beats Rock
   * 
   * @method winner
   * @returns {string} The winner text ("Draw", "Player wins", or "Computer wins")
   */
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
