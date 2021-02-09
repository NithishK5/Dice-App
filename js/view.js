'use strict';

class View{
    setUpRollHandler(handler){
        document.getElementById("rollbutton").addEventListener("click", handler);
    }

    showFace(faceNumber){
        const img = document.getElementById("diceimage");
        img.setAttribute("src", `images/${faceNumber}.png`);
        img.setAttribute("alt", faceNumber);
    }
}
