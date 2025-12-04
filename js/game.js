export class Game {
  constructor() {
    // DOM
    this.welcomePage = document.getElementById("welcome-page");
    this.playButton = document.getElementById("start-game-btn");
    this.loadingPage = document.getElementById("loading-page");
    this.waittingTime = document.getElementById("waitting-time");

    this.init();
  }

  init() {
    this.playButton.addEventListener("click", (e) => this.startGame());
  }

  startGame() {
    this.welcomePage.classList.add("welcome-page-hidden");
    this.loadingPage.classList.add("loading-page-show");
  }
}
