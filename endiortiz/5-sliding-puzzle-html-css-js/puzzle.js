class Tile {
    constructor(i, img) {
        this.index = i;
        this.img = img;
    }
}


let largestImage;
let tiles = [];
let cols = 3;
let rows = 3;
let w,h;
let board = [];
let blankTile = -1;
let turns = document.querySelector('.turns');
const solvedMessage = document.querySelector('.solved');

function preload() {
    largestImage = loadImage("game.jpg");
}

function setup() {
    createCanvas(360, 360)
    w = width / cols;
    h = height / rows;
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * w;
            let y = j * h;
            let img = createGraphics(w, h);
            img.copy(largestImage, x, y, w, h, 0, 0, w, h);
            let index = i + j * cols;
            board.push(index);
            let tile = new Tile(index, img);
            tiles.push(tile);
        }
    }
    
    tiles.pop();
    board.pop();
    board.push(-1);
    
    simpleShuffle(board);
}

function swap(i,j,arr) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function randomMove (arr) {
    let r1 = floor(random(cols));
    let r2 = floor(random(rows));
    moveTile(r1,r2,arr);
}
function simpleShuffle(arr) {
    for (let i = 0; i < 1000; i++) {
    randomMove(arr);
    turns.innerText = 0;
    }
}

function mousePressed() {
    let i = floor(mouseX / w);
    let j = floor(mouseY / h);
    moveTile(i,j,board);
}

function draw() {
    background(0);
  //randomMove(board);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let index = i + j * cols;
            let x = i * w;
            let y = j * h;
            let tileIndex = board[index];
            if (tileIndex > -1) {
                let img = tiles[tileIndex].img;
                image(img, x, y, w, h);
            }
            
        }
    }
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          let x = i * w;
          let y = j * h;
            strokeWeight(3);
            noFill();
            rect(x,y,w,h);
        }
    }
    if (isSolved()) {
    console.log('solved')
    solvedMessage.innerText = '¡Lo lograste!';
    } else {
        solvedMessage.innerText = '';
    }
}

function isSolved() {
    for (let i = 0; i < board.length-1; i++) {
    if (board[i] !== tiles[i].index) {
        return false
    }
    }
    return true;
}

function moveTile(i, j, arr) {
    let blank = findBlank();
    let blankCol = blank % cols;
    let blankRow = floor(blank / rows);

    if (isNeighbor(i,j,blankCol,blankRow)) {
    swap(blank, i + j * cols, arr);
    turns.innerText++;
    }
}

function isNeighbor(i,j,x,y) {
    if(i !== x && j !== y) {
    return false;
    }
    if (abs(i-x) == 1 || abs(j-y) == 1) {
    return true;
    }
    return false;
}

function findBlank() {
    for (let i = 0; i < board.length; i++) {
    if (board[i] == -1) return i;
    }
}
