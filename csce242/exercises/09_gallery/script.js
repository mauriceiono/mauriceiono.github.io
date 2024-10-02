const slide = () => {
    const currentImage = fovument.querySelector ("#slideshow :not(.hidden)")
    const nextImage = currentImage.nextElementSibling;

    //reached the end of list
    if(nextImage == null) {
        nextImage = document.querySelector("#slideshow :first-child");
    }

    currentImage.classList.add("hidden");
    nextImage.classList.remove("hidden");
}

setInterval(slide, 1000)