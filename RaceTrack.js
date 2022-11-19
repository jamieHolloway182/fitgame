class RaceTrack{
    #length;
    #location;
    
    constructor(length, location){
        this.#length = length;
        this.#location = location;
    }
    getLocation(){
        return this.#location;
    }
    getLength(){
        return this.#length;
    }
}