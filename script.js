const container = document.getElementById('container');
const containerSize = 400;
const newGridBtn = document.getElementById('grid-btn');
const resetGridBtn = document.getElementById('reset');
const rainbowBtn = document.getElementById('rainbow');
let rainbowMode = false

rainbowBtn.addEventListener('click', rainbowFunction)

function rainbowFunction() {
    rainbowMode = !rainbowMode
    if (rainbowMode) {
        container.classList.add('rainbowMode') 
        rainbowBtn.innerHTML = 'normal'
    } else {
        container.classList.remove('rainbowMode') 
        rainbowBtn.innerHTML = 'rainbow'
    }
}

newGridBtn.addEventListener('click', () => {
    const gridSize = parseInt(prompt('Enter grid size: '))
    if (!isNaN(gridSize) && gridSize > 0) {
        createGrid(gridSize);
    } else {
        alert("Please enter a valid positive number.");
    }
})

function resetGrid() {
    const gridSquares = document.querySelectorAll('div');
    gridSquares.forEach(square => {
        square.style.backgroundColor = '#94e2eb'
    })
}

resetGridBtn.addEventListener('click', resetGrid);

function createGrid(size) {
    container.innerHTML = ''; // Clears any existing grid
    const boxSize = Math.floor(containerSize / size);
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.className = 'gridBox';
        div.style.width = `${boxSize}px`;
        div.style.height = `${boxSize}px`;
        addHover(div);
        container.appendChild(div)
    }
}

function addHover(div) {
    div.addEventListener('mouseover', () => {
        if (rainbowMode) {
            const randomHue = Math.floor(Math.random() * 360);
            div.style.backgroundColor = `hsl(${randomHue}, 100%, 50%)`;
        } else {
            div.style.backgroundColor = 'black';
        }
    });
}
