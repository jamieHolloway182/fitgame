class Car{
    #colour;
    #fuelLevel;
    #speed;
    #position;
    #lapNumber;
    #finished;
    constructor(colour, speed){
        this.#fuelLevel = 0;
        this.#speed = speed;
        this.#colour = colour;
        this.#finished = false;
    }
    setFinished(finished){
        this.#finished = finished;
    }
    getFinished(){
        return this.#finished;
    }
    getColour(){
        return this.#colour;
    }
    setColour(colour){
        this.#colour = colour;
    }
    getFuelLevel(){
        return this.#fuelLevel;
    }
    setFuelLevel(fuelLevel){
        this.#fuelLevel = fuelLevel;
    }
    getPosition(){
        return this.#position;
    }
    setPosition(position){
        this.#position = position;
    }
    increasePosition(time){
        this.#position += this.#speed * time;
    }
    getLapNumber(){
        return this.#lapNumber;
    }
    setLapNumber(lapNumber){
        this.#lapNumber = lapNumber;
    }
    increaseLapNumber(){
        this.#lapNumber++;
    }
    increaseSpeed(){
        this.#speed += 5;
    }
    increaseFuelLevel(){
        this.#fuelLevel += 10;
    }
}
