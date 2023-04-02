function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Valid CSS background colors
const colors = [
    'black',
    'silver',
    'gray',
    'white',
    'maroon',
    'red',
    'purple',
    'fuchsia',
    'green',
    'lime',
    'olive',
    'yellow',
    'navy',
    'blue',
    'teal',
    'aqua',
];

// The button that will
const button = document.getElementById('btn');
const background = document.getElementById('test');
let bgColorText = document.getElementById('bgcolortext');
button.addEventListener('click', () => {
    const randomColor = colors[getRandomInt(colors.length)];
    background.style.backgroundColor = randomColor;
    bgColorText.innerText = randomColor;
})