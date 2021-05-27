class Game {
    constructor () {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }


    get activePlayer() {
        return this.players.find(player => player.active);   // Where player.active === true,
                                                            // only the first one will be returned
    }

    
    /** 
     * Creates two player objects
     * @return  {Array}    An array of two Player objects.
     */     
    createPlayers () {
        const players = [
                new Player('Player 1', 1, '#e15258', true),
                new Player('Player 2', 2, '#e59a13')
            ];
        return players;
    }


    /** 
     * Initializes game, render all the html elements
     */
    startGame() {
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    }

    /**
     * Branches code, depending on what player presses
     * @param {Object} e-Keydown event object 
     */
    handleKeydown(e) {
        if (this.ready) {
            if (e.key === "ArrowLeft") {
                this.activePlayer.activeToken.moveLeft();
            } else if (e.key === "ArrowRight") {
                console.log('move right')
                this.activePlayer.activeToken.moveRight(this.board.columns);
            } else if (e.key === "ArrowDown") {
                this.playToken();
            }
        }
    }
    
    /**
     * Finds Space object to drop Token into, drops Token
     */
    playToken() {
        let spaces = this.board.spaces;
        let activeToken = this.activePlayer.activeToken;
        let targetColumn = spaces[activeToken.columnLocation];
        let targetSpace = null;

        for (let space of targetColumn) {
            if (space.token === null) {
                targetSpace = space;
            }
        }

        if (targetSpace !== null) {
            game.ready = false;
            activeToken.drop(targetSpace);
            
        }
    }
}