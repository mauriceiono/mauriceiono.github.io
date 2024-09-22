document.addEventListener("DOMContentLoaded", function() {
    // Elements for Exercise 1 and 2
    const colorSlider = document.getElementById('color-slider');
    const colorMessage = document.getElementById('color-message');
    const colorSliderSection = document.getElementById('color-slider-section');
    const pictureChooserSection = document.getElementById('picture-chooser-section');
    
    // Menu Elements
    const menuToggle = document.getElementById('menu-toggle');
    const menuItems = document.getElementById('menu-items');
    const arrow = document.querySelector('.arrow-down');
    
    // Exercise Links (Main and Toggle Menu)
    const exercise1LinkMain = document.getElementById('exercise1-link');
    const exercise2LinkMain = document.getElementById('exercise2-link');
    const exercise1LinkToggle = document.querySelector('.toggle-exercise1');
    const exercise2LinkToggle = document.querySelector('.toggle-exercise2');
    
    // Function to show Exercise 1
    function showExercise1() {
        colorSliderSection.style.display = 'block';
        pictureChooserSection.style.display = 'none';
    }
    
    // Function to show Exercise 2
    function showExercise2() {
        colorSliderSection.style.display = 'none';
        pictureChooserSection.style.display = 'block';
    }
    
    // Add event listeners for both main and toggle links
    exercise1LinkMain.addEventListener('click', showExercise1);
    exercise2LinkMain.addEventListener('click', showExercise2);
    exercise1LinkToggle.addEventListener('click', showExercise1);
    exercise2LinkToggle.addEventListener('click', showExercise2);
    
    // Color Slider: Change background color and show messages
    colorSlider.addEventListener('input', function() {
        const redValue = colorSlider.value;
        colorSliderSection.style.backgroundColor = `rgb(${redValue}, 0, 0)`;

        let message = '';
        if (redValue < 85) {
            message = 'The color is a light red.';
        } else if (redValue < 170) {
            message = 'The color is medium red.';
        } else {
            message = 'The color is a dark red.';
        }
        colorMessage.textContent = message;
    });

    // Picture Chooser: Show different sized images based on the button clicked
    const imageButtons = document.querySelectorAll('.image-btn');
    const imageContainer = document.getElementById('image-container');
    imageButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const size = button.getAttribute('data-size');
            imageContainer.innerHTML = `<img src="https://picsum.photos/${size}" alt="Random Image">`;
        });
    });

    // Menu Toggle: Show/hide menu items and rotate arrow
    menuToggle.addEventListener('click', function() {
        menuItems.classList.toggle('hidden');
        arrow.classList.toggle('arrow-up'); // Toggle the arrow direction
    });

    // Reset menu items and arrow on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 600) {
            // On large screens, always show the menu items and point the arrow down
            menuItems.classList.remove('hidden');
            arrow.classList.remove('arrow-up'); // Ensure the arrow points down
        } else {
            // On small screens, hide the menu items again if they were not toggled
            menuItems.classList.add('hidden');
        }
    });
});
