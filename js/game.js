export class Game {
  constructor() {
    // DOM
    this.welcomePage = document.getElementById("welcome-page");
    this.playButton = document.getElementById("start-game-btn");
    this.loadingPage = document.getElementById("loading-page");
    this.waittingTime = document.getElementById("waitting-time");
    this.gamePage = document.getElementById("game-page");

    this.init();
  }

  init() {
    this.playButton.addEventListener("click", (e) => this.startGame());
  }

  startGame() {
    this.hiddenWelcomePage();
    this.loadingTime();
  }
  showLoadingPage() {
    this.loadingPage.classList.add("loading-page-show");
  }

  hiddenLoadingPage() {
    this.loadingPage.classList.add("welcome-page-hidden");
  }

  hiddenWelcomePage() {
    this.welcomePage.classList.add("welcome-page-hidden");
  }

  removeLoadingPage() {
    this.loadingPage.classList.remove("loading-page-show");
  }

  showGamePage() {
    this.gamePage.classList.add("game-page-show");
  }

  removeGamePage() {
    this.gamePage.classList.remove("game-page-hidden");
  }

  hiddenGamePage() {
    this.gamePage.classList.remove("game-page-hidden");
  }

  loadingTime() {
    this.showLoadingPage();

    let countSecond = 3;
    this.waittingTime.textContent = countSecond;
    let setIntervalId = setInterval(() => {
      countSecond--;
      this.waittingTime.textContent = countSecond;

      if (countSecond <= 0) {
        clearInterval(setIntervalId);
        this.transitionToGamePage();
      }
    }, 1000);
  }

  transitionToGamePage() {
    this.removeLoadingPage();
    this.hiddenGamePage();
    this.showGamePage();
  }
}
