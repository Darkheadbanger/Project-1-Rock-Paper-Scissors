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
    this.hiddenWelcomePage();
    this.showLoadingPage();
    this.loadingTime();
  }
  showLoadingPage() {
    this.loadingPage.classList.add("loading-page-show");
  }

  hiddenWelcomePage() {
    this.welcomePage.classList.add("welcome-page-hidden");
  }

  loadingTime() {
    let countSecond = 3;
    this.waittingTime.textContent = countSecond;
    let setIntervalId = setInterval(() => {
      countSecond--;
      this.waittingTime.textContent = countSecond;

      if (countSecond <= 0) {
        clearInterval(setIntervalId);
        this.showGamePage();
      }
    }, 1000);
  }

  showGamePage() {
    // this.welcomePage.classList.remove("welcome-page-hidden");
    this.welcomePage.classList.add("game-page-show");
  }
}
