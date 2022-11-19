class Player{
    #totalPoints;
    #car;
    constructor(){
        this.#totalPoints = 0;
        this.#car = new Car("red", 5);
    }
    increasePoints(){
        // call when challenge complete
        this.#totalPoints += 10;
    }
    getTotalPoints(){
        return this.totalPoints;
    }
    getCar(){
        return this.car;
    }

}