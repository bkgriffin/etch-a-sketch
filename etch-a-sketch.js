// Create divs representing an Etch-a-Sketch grid.
function createGrid(numberToCreate) { 
    const containerDiv = document.querySelector(".container");

    for(let i = 0; i < numberToCreate; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.width = "100px";
        div.style.height = "100px";
        containerDiv.appendChild(div);
    }
}

createGrid(16);