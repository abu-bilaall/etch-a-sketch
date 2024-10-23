// body
const body = document.querySelector('body');

// Grid generator button
const btn = document.createElement('button');
btn.classList.add('generate-button');
btn.textContent = 'Generate a new grid';
body.appendChild(btn);

// default container
const container = document.createElement('div');
container.classList.add('grid-container');
body.appendChild(container);

// default grid generator
let grid = 16 * 16;
while (grid > 0) {
    const div = document.createElement('div');
    div.classList.add('grid');
    container.append(div);
    grid--;
};

// etchy etch
container.addEventListener('mouseover', (event) => {
    event.target.classList.add('hover');
});