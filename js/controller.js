'use strict';
/*global Model, View */

const model = new Model();
const view = new View();

view.setUpRollHandler(()=>{
   model.setCurrentFaceRandomly();
   view.showFace("blur");

   window.setTimeout( function() {
      view.showFace(model.getCurrentFace());
   } , 100);
});
