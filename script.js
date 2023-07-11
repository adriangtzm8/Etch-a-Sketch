function changeMode(mode)
{
    currentMode = mode;
}

const container = document.querySelector('.container');
const sizeSlider = document.querySelector('.size-slider');
const colorBtn = document.querySelector('.colorBtn')
const rainbowBtn = document.querySelector('.rainbowBtn');
const eraserBtn = document.querySelector('.eraserBtn');
const resetBtn = document.querySelector('.resetBtn');
let currentMode = 'color'; 



rainbowBtn.onclick = () => changeMode('rainbow');
colorBtn.onclick = () => changeMode('color');
eraserBtn.onclick = () => changeMode('eraser');
resetBtn.onclick = () => resetGrid();

function createGrid()
{
    let size = gridSize();
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++)
    {
        let div = document.createElement('div');
        div.classList.add("square");
        div.addEventListener('mouseover', changeColor);
        container.appendChild(div);
    }
}

function resetGrid()
{
    container.innerHTML = '';
    createGrid();
}

function changeColor(e)
{
    if (currentMode === 'rainbow')
    {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    }
    else if (currentMode === 'color')
    {
        e.target.style.backgroundColor = 'black';
    }
    else if (currentMode === 'eraser')
    {
        e.target.style.backgroundColor = '#F0F0F0';
    }
}

function gridSize()
{
    let size;
    do
    {
        size = parseInt(prompt('Enter a size for the grid:'));
        if (size > 100 || size <= 0)
        {
            alert('Enter a number between 1 and 100');
        } 
    } while (size > 100 || size <= 0)
    return size;
}
createGrid();

