// Pixel density of the border around each square.
const SQUARE_BORDER_PIXEL_DENSITY = 1;

// Original grid size.
const ORIGINAL_GRID_X_AXIS = 16;
const ORIGINAL_GRID_Y_AXIS = 16;

// Create squares representing an Etch-a-Sketch grid.
function createGrid(squaresXAxis, squaresYAxis) { 
    const containerDiv = document.querySelector(".container");
    const numberOfSquaresToCreate = getSquaresToCreate(squaresXAxis, squaresYAxis);
    const squareWidth = getSquareSize(containerDiv.clientWidth, squaresXAxis, SQUARE_BORDER_PIXEL_DENSITY);
    const squareHeight = getSquareSize(containerDiv.clientHeight, squaresYAxis, SQUARE_BORDER_PIXEL_DENSITY);

    for(let i = 0; i < numberOfSquaresToCreate; i++) {
        const div = createSquare(squareWidth, squareHeight);
        containerDiv.appendChild(div);
        div.addEventListener('mouseover', function() { addHoverEffect(div); });
    }
}

// Get the total number of squares to create.
function getSquaresToCreate(x, y) { 
    return x * y;
}

// Get the width/height of the square to create.
function getSquareSize(containerSize, numberOfSquaresToCreate, squareBorderPixelDensity) { 
    return (containerSize / numberOfSquaresToCreate) - (squareBorderPixelDensity * 2);
}

// Create the square for the Etch-a-Sketch grid.
function createSquare(squareWidth, squareHeight) { 
    const div = document.createElement("div");
    div.style.backgroundColor = "white";
    div.style.border = SQUARE_BORDER_PIXEL_DENSITY + "px solid black";
    div.style.width = squareWidth.toString() + "px" ;
    div.style.height = squareHeight.toString() + "px";
    return div;
}

// Add a hover effect to the div.
function addHoverEffect(div) {
    div.style.backgroundColor = "black";
}

// Add an event listener for the 'Generate Grid' and 'Reset' buttons.
function addButtonEventListeners() {
    const generateGridButton = document.querySelector(".generate-button");
    generateGridButton.addEventListener('click', function() { createUserDefinedGrid() });

    const resetButton = document.querySelector(".reset-button");
    resetButton.addEventListener('click', function() { resetGrid() });
}

// Create the Etch-a-Sketch grid using user-defined values.
function createUserDefinedGrid() {
    const xAxis = document.querySelector(".x-axis");
    const yAxis = document.querySelector(".y-axis");
    deleteGrid();
    createGrid(xAxis.value, yAxis.value);
}

// Create the Etch-a-Sketch grid using original proportions.
function resetGrid() {
    deleteGrid();
    createGrid(ORIGINAL_GRID_X_AXIS, ORIGINAL_GRID_Y_AXIS);
}

// Delete the squares inside of the Etch-a-Sketch grid.
function deleteGrid() {
    const containerDiv = document.querySelector(".container");
    containerDiv.replaceChildren();
}

// TODO: 
// - Check x-axis and y-axis inputs for valid input (1-100, no decimal numbers)
// - Different pen color? 
// - In rare instances, the number of x/y input to generate grid will cause the squares to wrap.

addButtonEventListeners();
createGrid(ORIGINAL_GRID_X_AXIS, ORIGINAL_GRID_Y_AXIS);