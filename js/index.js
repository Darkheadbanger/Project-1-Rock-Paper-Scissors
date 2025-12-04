// Rock Paper Scissors Game Logic

const welcomePage = document.getElementById("welcome-page");
const playButton = document.getElementById("start-game-btn");
const loadingPage = document.getElementById("loading-page");

playButton.addEventListener("click", (e) => {
  welcomePage.classList.add("welcome-page-hidden");
  welcomePage.classList.add("loading-page-show");
});
