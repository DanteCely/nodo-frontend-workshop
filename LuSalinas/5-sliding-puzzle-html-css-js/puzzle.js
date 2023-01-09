let rows = 3;
let columns = 3;

let currentSpace;
let otherBlank;  //blank

let turns = 0;

//let imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];

window.onload = function(){
  for (let r = 0; r<rows; r++){
    for(let c=0; c<columns; c++){
      //img id="0-0" src="1.jpg"
      let tile = document.createElement("img");
      tile.id = r.toString() + '-' + c.toString();
      tile.src = "./Assests/" + imgOrder.shift() + ".png"; 
      
      //DRAGSTART
      tile.addEventListener("First", First); //movimiento inicial
      tile.addEventListener("overimage", overimage);  //imagen en movimiento
      tile.addEventListener("imgswap", imgswap);  //imagen swap otra imagen
      tile.addEventListener("imgleave", imgleave);  //dejando la imagen sobre otra
      tile.addEventListener("leave", leave);  //dejando la imagen
      tile.addEventListener("final", final);//movimientofinal



      document.getElementById("board").append(tile);
    }
  }
}

//  FUNCTIONS 
function First(){
  currentSpace = this;   //This refers to the img tile being dragged;
}
function overimage(e){
  e.preventDefault();
}
function imgswap(e){
  e.preventDefault();
}
function imgleave(e){
}
function leave(){
  otherBlank = this; //This referes to the img tile being dropped on
}
function final(){
  if(!otherBlank.src.includes("9.png")){
    return;   //sino es la imagen blanca no retorna nada
  }

  let currentCoords = currentSpace.id.split("-");   //e.g "0-0" => ["0", "0"];
  let r = parseInt(currentCoords[0]);
  let c = parseInt(currentCoords[1]);

  let otherCoords = otherBlank.id.split("-");
  let r2 = parseInt(otherCoords[0]);
  let c2 = parseInt(otherCoords[1]);

  let moveLeft = r == r2 && c2 == c-1;
  let moveRight = r == r2 && c2 == c+1;

  let moveUp = c == c2 && r2 == r-1;
  let moveDown = c == c2 && r2 == r+1;

  let isAdjacent = moveLeft || moveRight || moveUp || moveDown;
  
  if(isAdjacent){
    let currentImg = currentSpace.src;
    let otherImg = otherBlank.src;
  
    currentSpace.src = otherImg;
    otherBlank.src = currentImg;

    turns += 1;
    document.getElementById("turns").innerText = turns;
  }
}