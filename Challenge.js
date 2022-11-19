class Challenge{
    #name;
    #isCompleted;
    constructor(){
        this.name = "";
        this.isCompleted = false;
        console.log("HEllo")
    }
    getName(){
        return this.name;
    }
    getIsCompleted(){
        return this.isCompleted;
    }
    setIsCompleted(isCompleted){
        this.isCompleted = isCompleted;
    }
    generateChallenge(){
        let x = Math.floor((Math.random() * 100) + 1);
        let y = Math.floor((Math.random() * 10) + 2);
        let challenges = [`Travel ${x}m in ${y} minutes`, `Take ${x} steps in ${y} minutes`];
        
        this.name = challenges[Math.floor(Math.random() * (challenges.length))];
        return this.name;
    }

}