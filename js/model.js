'use strict';

class Model{
    constructor() {
        this.currentFace = 1;
    }
    getCurrentFace(){
        return this.currentFace;
    }
    setCurrentFaceRandomly(){
        this.currentFace = Math.floor(Math.random() * 6 + 1);
    }
}
