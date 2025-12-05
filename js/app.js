/**
 * App class manages the application flow and page transitions.
 * Handles welcome page, loading screen, and game page navigation.
 *
 * @class App
 */
export class App {
  /**
   * Creates an instance of App.
   * Initializes DOM elements and sets up event listeners.
   *
   * @constructor
   */
  constructor() {
    // DOM elements
    this.welcomePage = document.getElementById("welcome-page");
    this.playButton = document.getElementById("start-game-btn");
    this.replayButton = document.getElementById("restart-game-btn");
    this.loadingPage = document.getElementById("loading-page");
    this.waittingTime = document.getElementById("waitting-time");
    this.gamePage = document.getElementById("game-page");
    // Sound
    this.playTheGameSound = new Audio("./assets/sound/game-start.mp3");
    this.replayTheGameSound = new Audio("./assets/sound/rewind.mp3");

    this.init();
  }

  /**
   * Initializes event listeners for play and replay buttons.
   *
   * @method init
   */
  init() {
    this.playButton.addEventListener("click", (e) => this.startGame());
    this.replayButton.addEventListener("click", (e) => this.restartGame());
  }

  /**
   * Starts the game by hiding welcome page and showing loading screen.
   *
   * @method startGame
   */
  startGame() {
    this.playTheGameSound.play();
    this.hiddenWelcomePage();
    this.loadingTime();
  }

  /**
   * Restarts the game by reloading the page.
   *
   * @method restartGame
   */
  restartGame() {
    this.replayTheGameSound.play();
    setTimeout(() => {
      location.reload();
    }, 1000);
  }

  /**
   * Shows the loading page by adding CSS class.
   *
   * @method showLoadingPage
   */
  showLoadingPage() {
    this.loadingPage.classList.add("loading-page-show");
  }

  /**
   * Hides the loading page by adding CSS class.
   *
   * @method hiddenLoadingPage
   */
  hiddenLoadingPage() {
    this.loadingPage.classList.add("welcome-page-hidden");
  }

  /**
   * Hides the welcome page by adding CSS class.
   *
   * @method hiddenWelcomePage
   */
  hiddenWelcomePage() {
    this.welcomePage.classList.add("welcome-page-hidden");
  }

  /**
   * Removes the loading page by removing CSS class.
   *
   * @method removeLoadingPage
   */
  removeLoadingPage() {
    this.loadingPage.classList.remove("loading-page-show");
  }

  /**
   * Shows the game page by adding CSS class.
   *
   * @method showGamePage
   */
  showGamePage() {
    this.gamePage.classList.add("game-page-show");
  }

  /**
   * Removes game page hidden state by removing CSS class.
   *
   * @method removeGamePage
   */
  removeGamePage() {
    this.gamePage.classList.remove("game-page-hidden");
  }

  /**
   * Hides the game page by removing CSS class.
   *
   * @method hiddenGamePage
   */
  hiddenGamePage() {
    this.gamePage.classList.remove("game-page-hidden");
  }

  /**
   * Displays loading countdown timer (3 seconds) before game starts.
   * Updates the UI every second and transitions to game page when complete.
   *
   * @method loadingTime
   */
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

  /**
   * Transitions from loading page to game page.
   * Removes loading screen and displays the game interface.
   *
   * @method transitionToGamePage
   */
  transitionToGamePage() {
    this.removeLoadingPage();
    this.hiddenGamePage();
    this.showGamePage();
  }
}
