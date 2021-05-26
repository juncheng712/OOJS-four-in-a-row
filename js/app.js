const beginGame = document.getElementById('begin-game')

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