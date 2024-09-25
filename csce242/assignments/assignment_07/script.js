// Select the necessary elements
const drawButton = document.getElementById('drawButton');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const starInput = document.getElementById('stars');
const errorMessage = document.getElementById('error-message');
const starMessage = document.getElementById('star-message');

let starsArray = []; // Array to store star coordinates

// Function to draw a star
function drawStar(x, y, radius, points, outerRadius) {
    const step = Math.PI / points;
    ctx.beginPath();
    for (let i = 0; i < 2 * points; i++) {
        const r = (i % 2 === 0) ? outerRadius : radius;
        const angle = i * step;
        ctx.lineTo(x + r * Math.cos(angle), y - r * Math.sin(angle));
    }
    ctx.closePath();
    ctx.strokeStyle = '#ffffff'; // Star border color
    ctx.stroke();
    ctx.fillStyle = '#ffff00';   // Star fill color
    ctx.fill();
}

// Function to clear the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Function to show an error message
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}

// Function to hide the error message
function hideError() {
    errorMessage.style.display = 'none';
}

// Function to draw stars based on user input
function drawStars() {
    const starCount = parseInt(starInput.value);
    
    if (isNaN(starCount) || starCount < 1) {
        showError('Please enter a valid number of stars.');
        return;
    }

    hideError();
    clearCanvas();
    starsArray = [];

    for (let i = 0; i < starCount; i++) {
        // Random positions within the canvas
        const x = Math.random() * (canvas.width - 30) + 15; // Adding margins to avoid edges
        const y = Math.random() * (canvas.height - 30) + 15;
        const radius = 5;
        const outerRadius = 15;
        const points = 5;

        drawStar(x, y, radius, points, outerRadius);
        starsArray.push({ x, y, index: i + 1 });
    }
}

// Function to check if a click is inside a star
function isInsideStar(xClick, yClick, star) {
    const distance = Math.sqrt((xClick - star.x) ** 2 + (yClick - star.y) ** 2);
    return distance < 20; // Assuming 20 as a reasonable click boundary for the star
}

// Function to handle canvas clicks
canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const xClick = e.clientX - rect.left;
    const yClick = e.clientY - rect.top;

    for (let i = 0; i < starsArray.length; i++) {
        if (isInsideStar(xClick, yClick, starsArray[i])) {
            starMessage.textContent = `You clicked star number ${starsArray[i].index}`;
            starMessage.style.display = 'block';
            return;
        }
    }
});

// Event listener for the draw button
drawButton.addEventListener('click', drawStars);
