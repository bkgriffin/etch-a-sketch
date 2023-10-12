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

// Create the Etch-a-Sketch grid using user input values.
function createUserDefinedGrid() {
    const xAxis = document.querySelector(".x-axis");
    const yAxis = document.querySelector(".y-axis");
    
    validateInputNumericalRange(xAxis);
    validateInputNumericalRange(yAxis);
    deleteGrid();
    createGrid(xAxis.value, yAxis.value);
}

// Validate the user input numerical range.
// Input should be between 1-100.
function validateInputNumericalRange(element) { 
    if(element.value < 1)
        element.value = 1;
    else if(element.value > 100)
        element.value = 100;
}

// Set the value attribute of the x-/y-axis inputs.
function setAxisValues(x, y) {
    const xAxis = document.querySelector(".x-axis");
    const yAxis = document.querySelector(".y-axis");
    xAxis.value = x;
    yAxis.value = y;
}

// Create the Etch-a-Sketch grid using original proportions.
function resetGrid() {
    deleteGrid();
    createGrid(ORIGINAL_GRID_X_AXIS, ORIGINAL_GRID_Y_AXIS);
    setAxisValues(ORIGINAL_GRID_X_AXIS, ORIGINAL_GRID_Y_AXIS);
}

// Delete the squares inside of the Etch-a-Sketch grid.
function deleteGrid() {
    const containerDiv = document.querySelector(".container");
    containerDiv.replaceChildren();
}

// Validate the user input.  
// Input should be non-negative, integer numbers.
function validateInput(event) {
    let ASCIICode = event.which ? event.which : event.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) 
        return false;
    return true;
}

addButtonEventListeners();
createGrid(ORIGINAL_GRID_X_AXIS, ORIGINAL_GRID_Y_AXIS);