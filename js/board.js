class Board {
    constructor () {
        this.rows = 6;
        this.columns = 7;
        this.space = this.createSpaces();
    }

    // Generates 2D array of spaces
    // @return {array} An array of space objects

    createSpaces() {
        const spaces = [];

        for (let x = 0; x < this.columns; x++) {
            const column = [];

            for (let y = 0; y < this.rows; y++) {
                let space = new Space(x, y);
                column.push(space);
            }
        
        spaces.push(column);
        }
    return spaces;
    }

    /*
     * draw associated SVG spaces for all game spaces.
    */
    drawHTMLBoard() {
        for (let column of this.space) {    // each column
            for (let space of column) {     // each space of a column
                space.drawSVGSpace();
            }
        }
    }
}