class Challenge {
    #name;
    #isCompleted;
    constructor() {
        this.#name = this.generateChallenge();
        this.#isCompleted = false;
    }
    getName() {
        return this.#name;
    }
    getIsCompleted() {
        return this.#isCompleted;
    }
    setIsCompleted() {
        this.#isCompleted = true;
    }
    generateChallenge() {
        let x = Math.floor((Math.random() * 100) + 1);
        let y = Math.floor((Math.random() * 10) + 2);
        const challenges = [`Travel ${x}m in ${y} minutes`, `Take ${x} steps in ${y} minutes`];

        return challenges[Math.floor(Math.random() * (challenges.length))];
    }

}
