class Car{
    #colour;
    #fuelLevel;
    #speed;
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

}