/* ===============================================================================
Filename:        app.js
Date Created:    2025-03-23
Author:          Li Yang

Purpose:
    This code implements a player scorekeeper for a simple game. It allows two players to click buttons to increment their score, 
    tracks the score, and ends the game when one player reaches the predefined winning score. 
    The game features a reset button, and a selector to change the winning score.

Technologies and Methods:
    - HTML (for structure)
    - JavaScript (for logic and event handling)
    - Bulma (for styling classes like "has-text-success" and "has-text-danger")
===============================================================================*/
const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");

let winningScore = 2;
let isGameOver = false;

function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score += 1;

    if (player.score === winningScore) {
      isGameOver = true;
      console.log("player win");
      //class="has-text-success" is the Bulma's text color
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener("click", function () {
  updateScore(p1, p2);
});
p2.button.addEventListener("click", function () {
  updateScore(p2, p1);
});

resetButton.addEventListener("click", reset);

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}
