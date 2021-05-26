class Player {
    constructor(name, id, color, active = false) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);
    }

    // Creates token objects for player
    // Param {integer} number - Number of token objects to be created
    createTokens(number) {
        const tokens = [];

        for (let i = 0; i < number; i++) {
            let token = new Token(i, this);
            tokens.push(token);
        }

        return tokens;

    }

    /**
     * Check unused tokens
     */
    get unusedTokens() {
        return this.tokens.filter(token => !token.dropped);
    }

    // or 
    // get unusedTokens() {
    //     return this.tokens.filter(token => !token.dropped);
    // }

    /**
     * pull unused token as the token of next move
     */
    get activeToken() {
        let unusedTokens = this.unusedTokens;
        return unusedTokens[0];
    }
}


