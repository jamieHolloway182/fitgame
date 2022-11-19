class Race {
    #lapLength;
    #numberOfLaps;
    #cars;

    constructor(lapLength, numberOfLaps, player) {
        this.#lapLength = lapLength;
        this.#numberOfLaps = numberOfLaps;
        this.#cars = [];
        this.#cars[0] = player.getCar();
        this.addComputerCars();
        for (i = 0; i < 3; i++) {
            this.#cars[i].setPosition(0);
            this.#cars[i].setLapNumber(0);
        }
    }
    addComputerCars() {
        for (i = 0; i < 2; i++) {
            const speed = Math.floor((Math.random() * 90) + 20);
            const colours = [];
            colours[0] = "red";
            colours[1] = "blue";
            colours[2] = "yellow";
            colours[3] = "purple";
            colours[4] = "green";
            colours[5] = "orange";
            colours[6] = "brown";
            const colourRandomIndex = Math.floor((Math.random() * 6));
            const colour = colours[colourRandomIndex];
            const car = newCar(speed, colour);
            this.#cars[i] = car;
        }
    }
    moveCars(time) {
        for (i = 0; i < 3; i++) {
            if (this.#cars[i].getLapNumber() < this.#numberOfLaps) {
                if (this.#cars[i].getPosition() == this.#lapLength) {
                    this.#cars[i].increaseLapNumber();
                    this.#cars[i].setPosition(0);
                    this.#cars[i].increasePosition(time);
                }
                else if (this.#cars[i].getPosition() < this.#lapLength) {
                    this.#cars[i].increasePosition(time);
                    if (this.#cars[i].getPosition() > this.#lapLength) {
                        this.#cars[i].setPosition(this.#cars[i].getPosition() - this.#lapLength);
                        this.#cars[i].increaseLapNumber();
                    }
                }
            }
            else if (this.#cars[i].getLapNumber() == this.#numberOfLaps) {

            }
        }
    }
    getPlayerPosition(playerPosition) {
        let add = 0;
        if (!this.#cars[0].getFinished()) {
            for (i = 1; i < 3; i++) {
                if (this.#cars[i].getFinished()) {
                    add++;
                } else if (this.#cars[i].getLapNumber() > this.#cars[0].getLapNumber()) {
                    add++;
                } else if (this.#cars[i].getLapNumber() == this.#cars[0].getLapNumber()) {
                    if (this.#cars[i].getPosition() > this.#cars[0].getPosition()){
                        add++;
                    }
                }
            }
            return 1 + add;
        }
        return playerPosition;
    }
    getCars() {
        return this.#cars;
    }
    checkIfFinished() {
        for (i = 0; i < this.#cars.length; i++) {
            if (!cars[i].getFinished()) {
                return false;
            }
        }
        return true;
    }
}
