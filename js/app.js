const beginGame = document.getElementById('begin-game');

// Create a new game object
const game = new Game();


/** 
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
beginGame.addEventListener('click', function() {
    game.startGame();
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
});

/**
 * Branches code, depending on what key player presses
 * @param   {Object}    e - Keydown event object
 */
document.addEventListener('keydown', function(event) {
    game.handleKeydown(event);
});