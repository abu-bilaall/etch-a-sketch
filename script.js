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

// generating user-specified grid
let userDimension;
let defaultWidth = 800;
btn.addEventListener('click', () => {
    userDimension = +prompt("Enter a grid dimension below (Max. 100)");

    if (userDimension > 100) {
        console.log("Sorry. The maximum dimension is 100.");
    } else {
        grid = userDimension * userDimension;
       
        // remove default grid
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        // create a grid w/ user-specified dimension
        while (grid > 0) {
            const div = document.createElement('div');
            div.classList.add('grid');
            div.style.height = `${defaultWidth / userDimension}px`;
            div.style.width = `${defaultWidth / userDimension}px`;
            container.append(div);
            grid--;
        };
    }
});