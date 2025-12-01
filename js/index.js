// Rock Paper Scissors Game Logic

const welcomePage = document.getElementById("welcome-page");
const playButton = document.getElementById("start-game-btn");

playButton.addEventListener("click", (e) => {
  welcomePage.classList.add("welcome-page-hidden");
});
