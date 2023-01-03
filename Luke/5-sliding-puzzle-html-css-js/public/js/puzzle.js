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
function dragStart(){
  currentTile = this;   //This refers to the img tile being dragged;
}
function dragOver(e){
  e.preventDefault();
}
function dragEnter(e){
  e.preventDefault();
}
function dragLeave(e){
}
function dragDrop(){
  otherTile = this; //This referes to the img tile being dropped on
}
function dragEnd(){
  if(!otherTile.src.includes("3.jpg")){
    return;   //If the otherTile is not the blank one, return and stop the execution.
  }

  let currentCoords = currentTile.id.split("-");   //e.g "0-0" => ["0", "0"];
  let r = parseInt(currentCoords[0]);
  let c = parseInt(currentCoords[1]);

  let otherCoords = otherTile.id.split("-");
  let r2 = parseInt(otherCoords[0]);
  let c2 = parseInt(otherCoords[1]);

  let moveLeft = r == r2 && c2 == c-1;
  let moveRight = r == r2 && c2 == c+1;

  let moveUp = c == c2 && r2 == r-1;
  let moveDown = c == c2 && r2 == r+1;

  let isAdjacent = moveLeft || moveRight || moveUp || moveDown;
  
  if(isAdjacent){
    let currentImg = currentTile.src;
    let otherImg = otherTile.src;
  
    currentTile.src = otherImg;
    otherTile.src = currentImg;

    turns += 1;
    document.getElementById("turns").innerText = turns;
  }
}