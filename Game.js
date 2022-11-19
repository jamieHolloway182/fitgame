class Game{
    #race;
    #challenges;
    #player;
    #store;
    constructor(){
        this.challenges = [];
        this.player = new Player;
    }
    startGame(){
        
    }
    fillChallenges(){
        challenge = new Challenge;

        for(let i = 0; i < 4; i++){
            this.challenges[i] = challenge.generateChallenge();
        }
    }
    challengeCompleted(){
        // if challenge is met
        // increase fuel level

        this.#player.increasePoints();
        // set challenge to complete
    }

}