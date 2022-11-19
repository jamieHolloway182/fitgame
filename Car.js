class Car{
    #colour;
    #fuelLevel;
    #speed;
    #position;
    #lapNumber;
    constructor(colour, speed){
        this.#fuelLevel = 0;
        this.speed = speed;
        this.colour = colour;
    }
    getColour(){
        return this.colour;
    }
    setColour(colour){
        this.colour = colour;
    }
    getFuelLevel(){
        return this.fuelLevel;
    }
    setFuelLevel(fuelLevel){
        this.fuelLevel = fuelLevel;
    }
    getPosition(){
        return this.position;
    }
    setPosition(postion){
        this.position = position;
    }
    getLapNumber(){
        return this.lapNumber;
    }
    setLapNumber(lapNumber){
        this.lapNumber = lapNumber;
    }
    increasePosition(time){
        position += speed * time;
    }
}