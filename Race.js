class Race{
    #raceTrack;
    #numberOfLaps;
    #cars;

    constructor(raceTrack, numberOfLaps){
        this.#raceTrack = raceTrack;
        this.#numberOfLaps = numberOfLaps;
        this.#cars = newArray();
        this.#cars[0]=player.getCar();
        this.addComputerCars();
        for (i = 0; i < 3; i++){
            this.#cars[i].setPosition(0);
            this.#cars[i].setLapNumber(0);
        }
    }
    addComputerCars(){
        for (i = 0; i < 2 ; i++){
            const speed = Math.floor((Math.random()*20)+5);
            const colours = [];
            colours[0] = "red";
            colours[1] = "blue";
            colours[2] = "yellow";
            colours[3] = "purple";
            colours[4] = "green";
            colours[5] = "orange";
            colours[6] = "brown";
            const colourRandomIndex = Math.floor((Math.random()*6));
            const colour = colours [colourRandomIndex];
            car = newCar(colour,speed);
            this.#cars[i] = car;
        }
    }
    moveCars(time){
        for(i = 0; i < 3; i++){
            if(this.#cars[i].getLapNumber() > this.#numberOfLaps){
                if (this.#cars[i].getPosition() >= this.#raceTrack.getLength()){
                    this.#cars[i].increasePosition(time);
                }
            }
        }
    }
    getPlayerPosition(){
        let playerPosition = 1;
        for (i = 1 ; i < 3 ; i++){
            if(this.#cars[i].getLapNumber() > this.#cars[0].getLapNumber()){
                playerPosition ++;
            } else if(this.#cars[i].getLapNumber() == this.#cars[0].getLapNumber()){
                if(this.#cars[i].getPosition > this.#cars[0].getLapNumber()){
                    playerPosition ++;
                }
            }
        }
    }
}
