# Refactoring Player Score Keeper

### Overview

This document explains the reasoning behind refactoring the player scorekeeper logic in our JavaScript codebase. The primary goal of this refactor was to improve maintainability, reduce redundancy, and enhance scalability.

### Why Refactor?

The previous implementation had the following issues:

- Code Redundancy: The code for handling player actions was duplicated for both players.

- Hard to Maintain: Any modification required changing multiple places in the code.

- Scalability Limitations: The structure did not allow easy extension for multiple players.

### What Was Changed?

✅ Introduced Player Objects

Created objects (p1 and p2) to encapsulate each player's properties (score, button, and display).

✅ Implemented a Generic updateScore Function

Removed repeated logic for handling player scores and winning conditions.

✅ Used for...of Loop for Reset

Made the reset logic more scalable by looping through players dynamically.

### Benefits of This Refactor

🚀 Less Code Duplication – Code is cleaner and easier to modify.

🔄 Better Scalability – Allows easy extension to more players in the future.

🛠 Improved Maintainability – Logic is encapsulated within functions and objects.

### Before & After Comparison

**Before (Old Code)**

```javascript
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
let p1Score = 0;
let p2Score = 0;

p1Button.addEventListener("click", function () {
if (!isGameOver) {
p1Score += 1;
p1Display.textContent = p1Score;
}
if (p1Score === winningScore) {
isGameOver = true;
p1Display.classList.add("has-text-success");
p2Display.classList.add("has-text-danger");
p1Button.disabled = true;
p2Button.disabled = true;
}
});
```

**After (Refactored Code)**

```javascript
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

function updateScore(player, opponent) {
if (!isGameOver) {
player.score += 1;
if (player.score === winningScore) {
isGameOver = true;
player.display.classList.add("has-text-success");
opponent.display.classList.add("has-text-danger");
player.button.disabled = true;
opponent.button.disabled = true;
}
player.display.textContent = player.score;
}
}

p1.button.addEventListener("click", () => updateScore(p1, p2));
p2.button.addEventListener("click", () => updateScore(p2, p1));
```

### Future Improvements

📌 Add support for multiple players dynamically.

📌 Implement a class-based structure for better modularity.

📌 Improve UI elements with animations and better styling.
