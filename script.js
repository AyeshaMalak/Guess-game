let randomNumber;
let attempts = 0;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('resultMessage').textContent = '';
    document.querySelector('.restart-button').style.display = 'none';
    document.getElementById('guessInput').value = '';
}

function makeGuess() {
    const guessInput = document.getElementById('guessInput');
    const guess = parseInt(guessInput.value);
    attempts++;

    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById('resultMessage').textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    if (guess === randomNumber) {
        document.getElementById('resultMessage').textContent = `Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts!`;
        document.querySelector('.restart-button').style.display = 'block';
    } else if (guess < randomNumber) {
        document.getElementById('resultMessage').textContent = 'Too low! Try again.';
    } else {
        document.getElementById('resultMessage').textContent = 'Too high! Try again.';
    }
}

function restartGame() {
    startGame();
}

// Start the game when the page loads
window.onload = startGame;
