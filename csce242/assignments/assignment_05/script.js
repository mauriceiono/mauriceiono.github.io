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

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('slider');
    const sliderBox = document.getElementById('slider-box');
    const sliderColumn = document.querySelector('.slider-column');

    function moveBox() {
        const maxSliderValue = slider.max;
        const sliderValue = slider.value;

        // Calculate the maximum movement allowed (slider-column width - slider-box width)
        const maxBoxWidth = sliderColumn.offsetWidth - sliderBox.offsetWidth;
        
        // Calculate the box's new position based on slider value
        // Adjust for moving left and right, centered on the initial position
        const translateX = ((sliderValue - (maxSliderValue / 2)) / (maxSliderValue / 2)) * (maxBoxWidth / 2);

        // Set the box's transform translateX position
        sliderBox.style.transform = `translateX(${translateX}px)`;
    }

    slider.addEventListener('input', moveBox);

    // Initialize position on page load
    moveBox();
});

 




