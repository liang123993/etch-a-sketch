const container = document.getElementById('container');
const containerSize = 400;
const newGridBtn = document.getElementById('grid-btn');

newGridBtn.addEventListener('click', () => {
    const gridSize = parseInt(prompt('Enter grid size: '))
    if (!isNaN(gridSize) && gridSize > 0) {
        createGrid(gridSize);
    } else {
        alert("Please enter a valid positive number.");
    }
})

function createGrid(size) {
    container.innerHTML = ''; // Clears any existing grid
    const boxSize = containerSize / size;
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.className = 'gridBox';
        div.style.width = `${boxSize}px`;
        div.style.height = `${boxSize}px`;
        container.appendChild(div)
    }
}
