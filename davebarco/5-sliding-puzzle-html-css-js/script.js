// Select the puzzle table and the empty cell
const puzzle = document.getElementById("puzzle");
const emptyCell = document.getElementById("puzzle-empty");
const shuffleButton = document.getElementById("shuffle-button");
const resetButton = document.getElementById("reset-button");
let moveCounter = document.getElementById("move-counter");
let timeCounter = document.getElementById("time-counter");

// Add event listeners to the puzzle numbers
for (let i = 1; i <= 8; i++) {
  const puzzleNumber = document.getElementById(`puzzle-${i}`);
  puzzleNumber.addEventListener("click", moveNumber);
}
shuffleButton.addEventListener("click", shufflePuzzle);
resetButton.addEventListener("click", resetPuzzle);

// Function to move a number
function moveNumber(event) {
  // Get the clicked cell and its position
  const clickedCell = event.target;
  const clickedRow = clickedCell.parentNode.rowIndex;
  const clickedCol = clickedCell.cellIndex;

  // Get the empty cell's position
  const emptyRow = emptyCell.parentNode.rowIndex;
  const emptyCol = emptyCell.cellIndex;

  // Check if the clicked cell is adjacent to the empty cell
  if (clickedRow === emptyRow && (clickedCol === emptyCol + 1 || clickedCol === emptyCol - 1)) {
    // Swap the empty cell and the clicked cell
    swapCells(emptyCell, clickedCell);
  } else if (clickedCol === emptyCol && (clickedRow === emptyRow + 1 || clickedRow === emptyRow - 1)) {
    swapCells(emptyCell, clickedCell);
  }
}

// Function to shuffle the puzzle
function shufflePuzzle() {
  // Code to shuffle the puzzle
  //...
}

// Function to reset the puzzle
function resetPuzzle(){
  //Code to reset the puzzle
  //...
}

// function to swap cells 
function swapCells(cell1, cell2) {
  const temp = cell1.innerHTML;
  cell1.innerHTML = cell2.innerHTML;
  cell2.innerHTML = temp;
}


// This JavaScript uses some basic DOM manipulation methods to select the elements from the HTML and add event listeners to the numbers in the puzzle. The moveNumber function is called when a number is clicked, it checks if the clicked number is adjacent to the empty cell and if it is, it swaps the empty cell and the clicked cell. shufflePuzzle function shuffles the puzzle by randomly swapping the numbers until the puzzle is in a solved state. resetPuzzle function
// resetPuzzle function will be responsible for reseting the game to its initial state, It can accomplish this task by either re-rendering the initial state of the puzzle via javascript or by refreshing the page, whichever way you prefer.
// The function swapCells will be responsible for swapping the clicked cell with the empty cell.
// This is an example, and you should adjust it to fit the specific needs of your game, you'll probably need to add some other functionalities like, keeping track of the number of moves and time, handling the win condition and so on.
// Please let me know if you have any questions about this javascript or if you need help with any specific part of the implementation, I'll be glad to help you.

