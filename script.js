// Define the grid layouts with IDs and initial rotation of 0
const layouts = {
    layout1: [
        [["  ", 0], ["C1", 0], ["C2", 0], ["C3", 0], ["C4", 0], ["  ", 0]],
        [["E3", 3], ["A1", 0], ["A3", 0], ["A5", 0], ["A7", 0], ["E4", 1]],
        [["E5", 1], ["A2", 0], ["A4", 0], ["A6", 0], ["A8", 0], ["E6", 3]],
        [["  ", 0], ["C5", 0], ["C6", 0], ["C7", 0], ["C8", 0], ["  ", 0]],
        [["E5", 3], ["B1", 0], ["B2", 0], ["B3", 0], ["B4", 0], ["E6", 1]],
        [["E3", 1], ["B5", 0], ["B6", 0], ["B7", 0], ["B8", 0], ["E4", 3]],
        [["  ", 0], ["C1", 0], ["C2", 0], ["C3", 0], ["C4", 0], ["  ", 0]]
    ],
    layout2: [
        [["  ", 0], ["B5", 0], ["B6", 0], ["B7", 0], ["B8", 0], ["  ", 0]],
        [["E3", 0], ["C1", 0], ["C2", 0], ["C3", 0], ["C4", 0], ["E4", 0]],
        [["E5", 0], ["C5", 0], ["C6", 0], ["C7", 0], ["C8", 0], ["E6", 0]],
        [["  ", 0], ["B1", 0], ["B2", 0], ["B3", 0], ["B4", 0], ["  ", 0]],
        [["E5", 2], ["D1", 0], ["D3", 0], ["D5", 0], ["D7", 0], ["E6", 2]],
        [["E3", 2], ["D2", 0], ["D4", 0], ["D6", 0], ["D8", 0], ["E4", 2]],
        [["  ", 0], ["B5", 0], ["B6", 0], ["B7", 0], ["B8", 0], ["  ", 0]]
    ],
    layout3: [
        [["  ", 0], ["  ", 0], ["B1", 1], ["B4", 3], ["  ", 0], ["  ", 0]],
        [["  ", 0], ["  ", 0], ["B2", 1], ["B3", 3], ["  ", 0], ["  ", 0]],
        [["D1", 0], ["D3", 0], ["E7", 0], ["E8", 0], ["D5", 0], ["D7", 0]],
        [["D2", 0], ["D4", 0], ["E1", 0], ["E2", 0], ["D6", 0], ["D8", 0]],
        [["  ", 0], ["  ", 0], ["B6", 3], ["B7", 1], ["  ", 0], ["  ", 0]],
        [["  ", 0], ["  ", 0], ["B5", 3], ["B8", 1], ["  ", 0], ["  ", 0]],
        [["D4", 2], ["D2", 2], ["E3", 0], ["E4", 0], ["D8", 2], ["D6", 2]],
        [["D3", 2], ["D1", 2], ["E5", 0], ["E6", 0], ["D7", 2], ["D5", 2]],
        [["  ", 0], ["  ", 0], ["B1", 1], ["B4", 3], ["  ", 0], ["  ", 0]],
        [["  ", 0], ["  ", 0], ["B2", 1], ["B3", 3], ["  ", 0], ["  ", 0]]
    ],
    layout4: [
        [["  ", 0], ["A3", 1], ["A5", 3], ["  ", 0]],
        [["D4", 0], ["E1", 0], ["E2", 0], ["D6", 0]],
        [["D2", 2], ["E3", 0], ["E4", 0], ["D8", 2]],
        [["D1", 2], ["E5", 0], ["E6", 0], ["D7", 2]],
        [["D3", 0], ["E7", 0], ["E8", 0], ["D5", 0]],
        [["  ", 0], ["A4", 3], ["A6", 1], ["  ", 0]],
        [["D3", 2], ["F1", 0], ["F2", 0], ["D5", 2]],
        [["D1", 0], ["F3", 0], ["F4", 0], ["D7", 0]],
        [["D2", 0], ["F5", 0], ["F6", 0], ["D8", 0]],
        [["D4", 2], ["F7", 0], ["F8", 0], ["D6", 2]],
        [["  ", 0], ["A3", 1], ["A5", 3], ["  ", 0]]
    ],
    layout5: [
        [["  ", 0], ["A4", 0], ["A6", 0], ["  ", 0]],
        [["F1", 0], ["C6", 0], ["C7", 0], ["F2", 0]],
        [["F3", 0], ["C5", 2], ["C8", 2], ["F4", 0]],
        [["F5", 0], ["C1", 2], ["C4", 2], ["F6", 0]],
        [["F7", 0], ["C2", 0], ["C3", 0], ["F8", 0]],
        [["  ", 0], ["A3", 0], ["A5", 0], ["  ", 0]],
        [["F7", 2], ["D4", 0], ["D6", 0], ["F8", 2]],
        [["F5", 2], ["D2", 2], ["D8", 2], ["F6", 2]],
        [["F3", 2], ["D1", 2], ["D7", 2], ["F4", 2]],
        [["F1", 2], ["D3", 0], ["D5", 0], ["F2", 2]],
        [["  ", 0], ["A4", 0], ["A6", 0], ["  ", 0]]
    ],
    layout6: [
        [["  ", 0], ["  ", 0], ["D1", 2], ["D4", 2], ["  ", 0], ["  ", 0]],
        [["  ", 0], ["  ", 0], ["D2", 0], ["D3", 0], ["  ", 0], ["  ", 0]],
        [["F5", 3], ["F7", 3], ["A3", 0], ["A5", 0], ["F8", 1], ["F6", 1]],
        [["F3", 1], ["F1", 1], ["A4", 0], ["A6", 0], ["F2", 3], ["F4", 3]],
        [["  ", 0], ["  ", 0], ["D6", 0], ["D7", 0], ["  ", 0], ["  ", 0]],
        [["  ", 0], ["  ", 0], ["D5", 2], ["D8", 2], ["  ", 0], ["  ", 0]],
        [["F1", 3], ["F3", 3], ["A2", 2], ["A8", 2], ["F4", 1], ["F2", 1]],
        [["F7", 1], ["F5", 1], ["A1", 2], ["A7", 2], ["F6", 3], ["F8", 3]],
        [["  ", 0], ["  ", 0], ["D1", 2], ["D4", 2], ["  ", 0], ["  ", 0]],
        [["  ", 0], ["  ", 0], ["D2", 0], ["D3", 0], ["  ", 0], ["  ", 0]]
    ]
};
// Get unique IDs across all layouts, ignoring rotation and filtering out empty cells ("  ")
const uniqueIds = [...new Set(
    Object.values(layouts)
        .flat()
        .flat()
        .filter(cell => cell[0] && cell[0].trim() !== "")
        .map(cell => cell[0])
)].sort();

// References to HTML elements
const gridElement = document.getElementById('grid');
const controlsElement = document.getElementById('controls');
const layoutSelect = document.getElementById('layoutSelect');

// Function to render the selected grid layout with rotation
function renderGrid(layout) {
    gridElement.innerHTML = '';
    gridElement.style.gridTemplateColumns = `repeat(${layout[0].length}, 50px)`;

    layout.forEach(row => {
        row.forEach(cell => {
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('grid-cell');
            
            if (cell[0] && cell[0].trim() !== "") {
                cellDiv.dataset.id = cell[0];
                cellDiv.innerText = cell[0];
                cellDiv.style.transform = `rotate(${cell[1] * 90}deg)`; // Apply rotation
            } else {
                cellDiv.classList.add('empty');
            }
            
            gridElement.appendChild(cellDiv);
        });
    });
}

// Function to create text boxes for each unique ID
function createTextControls() {
    controlsElement.innerHTML = '';
    
    uniqueIds.forEach(id => {
        const controlDiv = document.createElement('div');
        controlDiv.classList.add('control');

        const label = document.createElement('label');
        label.setAttribute('for', id);
        label.innerText = `${id}:`;

        const input = document.createElement('input');
        input.type = 'text';
        input.id = id;
        input.classList.add('text-input');
        input.placeholder = `Enter text for ${id}`;

        // Add an event listener for each input box
        input.addEventListener('input', (event) => {
            const value = event.target.value;
            const cells = document.querySelectorAll(`[data-id="${id}"]`);
            cells.forEach(cell => {
                cell.innerText = value;
            });
        });

        controlDiv.appendChild(label);
        controlDiv.appendChild(input);
        controlsElement.appendChild(controlDiv);
    });
}

// Event listener to change layout based on selection
layoutSelect.addEventListener('change', () => {
    const selectedLayout = layoutSelect.value;
    renderGrid(layouts[selectedLayout]);
});

// Initial setup
createTextControls();
renderGrid(layouts.layout1);