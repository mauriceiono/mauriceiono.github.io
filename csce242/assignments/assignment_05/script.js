let count = 0;

function incrementCount() {
    count++;
    document.getElementById('count').textContent = count;
}

function refreshImage() {
    setTimeout(function () {
        location.reload();
    }, 500); // Timeout is optional for smoother transition
}

function moveSquare() {
    const slider = document.getElementById('slider');
    const square = document.getElementById('square');
    const maxSliderValue = slider.max;
    const sliderValue = slider.value;

    // Calculate the proportional left value
    const maxBoxWidth = 200 - 50; // slider-box width (200px) - square width (50px)
    const leftValue = (sliderValue / maxSliderValue) * maxBoxWidth;

    // Set the square's left position
    square.style.left = `${leftValue}px`;
}
