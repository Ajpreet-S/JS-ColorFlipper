function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function selectRandomElement(arr) {
    return arr[getRandomInt(arr.length)];
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


const button = document.getElementById('btn');
const background = document.getElementById('background');
const text = document.getElementById('bgcolortext');
button.addEventListener('click', () => {
    // Select a random color
    let randomColor = selectRandomElement(colors);

    // If the random color is the same as the background's current color, get another random one
    while (randomColor === background.style.backgroundColor) {
        randomColor = selectRandomElement(colors);
    }

    // Apply random color to background
    background.style.backgroundColor = randomColor;

    // Display color's name
    text.innerText = randomColor;

    // Animate the text and disable button until animations are done
    const animDurationMs = 1000;
    text.style.animation = `fadeIn ${animDurationMs}ms`;
    button.disabled = true;
    setTimeout(() => {
        text.style.animation = '';
        button.disabled = '';
    }, animDurationMs);

    // Disable the button until animations done playing
})

// Click the "Flip color" button once to give the bg a starting color
button.click();