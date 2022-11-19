class Game{
    #race;
    #challenges;
    #player;
    #store;
    constructor(){
        this.challenges = []
    }
    startGame(){
        
    }
    fillChallenges(){
        challenge = new Challenge;

        for(let i = 0; i < 4; i++){
            this.challenges[i] = challenge.generateChallenge()
        }
    }

}