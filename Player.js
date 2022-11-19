class Player{
    #totalPoints;
    #car;
    #position
    constructor(){
        this.#totalPoints = 0;
        this.#car = new Car("red", 5);
        this.#position = 1;
    }
    increasePoints(){
        // call when challenge complete
        this.#totalPoints += 10;
    }
    getTotalPoints(){
        return this.#totalPoints;
    }
    getCar(){
        return this.#car;
    }
    setPosition(position){
        this.#position = position;
    }
    getPosition(){
        return this.#position;
    }
}
