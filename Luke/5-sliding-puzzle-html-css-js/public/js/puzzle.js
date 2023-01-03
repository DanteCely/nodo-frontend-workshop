let rows = 3;
let columns = 3;

let currentTile;
let otherTile;  //blank

let turns = 0;

//let imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];

window.onload = function(){
  for (let r = 0; r<rows; r++){
    for(let c=0; c<columns; c++){
      //img id="0-0" src="1.jpg"
      let tile = document.createElement("img");
      tile.id = r.toString() + '-' + c.toString();
      tile.src = "../public/images/" + imgOrder.shift() + ".jpg"; 
      
      //DRAGSTART
      tile.addEventListener("dragstart", dragStart); //Click an image to drag
      tile.addEventListener("dragover", dragOver);  //Moving image around while clicked
      tile.addEventListener("dragenter", dragEnter);  //Dragging image onto another one
      tile.addEventListener("dragleave", dragLeave);  //Dragged image leaving another image
      tile.addEventListener("drop", dragDrop);  //Drag an image over another image, drop the image
      tile.addEventListener("dragend", dragEnd);//After drag drop, swap the two tiles



      document.getElementById("board").append(tile);
    }
  }
}

//  FUNCTIONS 
dragStart = () => {
  currentTile = this;   //This refers to the img tile being dragged;
}
dragOver = (e) => {
  e.preventDefault();
}
dragEnter = (e) => {
  e.preventDefault();
}
dragLeave = (e) => {
}
dragDrop = () => {
  otherTile = this; //This referes to the img tile being dropped on
}