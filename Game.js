class Game {
    #race;
    #challenges;
    #player;

    constructor() {
        this.#challenges = [];
        this.#player = new Player();
        this.#race = new Race(100, 100, this.#player);
    }
    play() {
        const time = 10;
        let playerPosition = this.#player.getPosition();
        while (!this.#race.checkIfFinished()) {
            playerPosition = this.#race.getPlayerPosition(playerPosition);
            setInterval(this.#race.moveCars(time), time);
        }
    }

    fillChallenges() {
        for (let i = 0; i < 4; i++) {
            this.#challenges[i] = new Challenge();
        }
    }
    challengeCompleted(challenge) {
        // if challenge is met
        // increase fuel level
        this.#player.getCar().increaseFuelLevel();
        this.#player.increasePoints();
        // set challenge to complete
        challenge.setIsCompleted();
        replaceChallenge(challenge);
    }
    replaceChallenge(challenge) {
        found = false;
        while (i < this.#challenges.length && !found == false) {
            if (this.#challenges[i] == challenge) {
                this.#challenges[i] = new Challenge();
                found = true;
            }
            i++
        }
    }
}
