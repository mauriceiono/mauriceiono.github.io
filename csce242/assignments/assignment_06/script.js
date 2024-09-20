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

function moveBox() {
    const slider = document.getElementById('slider');
    const sliderBox = document.getElementById('slider-box');
    const sliderColumn = document.querySelector('.slider-column');

    const maxSliderValue = slider.max;
    const sliderValue = slider.value;

    // Calculate the maximum movement allowed (slider-column width - slider-box width)
    const maxBoxWidth = sliderColumn.offsetWidth - sliderBox.offsetWidth;
    const translateX = (sliderValue / maxSliderValue) * maxBoxWidth;

    // Set the box's transform translateX position
    sliderBox.style.transform = `translateX(${translateX}px)`;
}
