// Pixel density of the border around each square.
const SQUARE_BORDER_PIXEL_DENSITY = 1;

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

createGrid(10, 10);