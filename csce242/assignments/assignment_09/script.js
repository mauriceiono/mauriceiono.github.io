// Bird class definition
class Bird {
    constructor(title, imageFile, description, habitat, diet, lifespan, size) {
        this.title = title;
        this.imageFile = imageFile;
        this.description = description;
        this.habitat = habitat;
        this.diet = diet;
        this.lifespan = lifespan;
        this.size = size; // New size property
    }

    // Method to return the bird card for initial display
    getCard() {
        return `
            <div class="bird-card" onclick="displayBirdModal('${this.title}')">
                <img src="images/${this.imageFile}" alt="${this.title}">
                <h3>${this.title}</h3>
            </div>
        `;
    }

    // Method to return expanded section details
    getExpandedSection() {
        return `
            <h3>${this.title}</h3>
            <img src="images/${this.imageFile}" alt="${this.title}">
            <p>${this.description}</p>
            <p><strong>Habitat:</strong> ${this.habitat}</p>
            <p><strong>Diet:</strong> ${this.diet}</p>
            <p><strong>Lifespan:</strong> ${this.lifespan}</p>
            <p><strong>Size:</strong> ${this.size}</p> <!-- Include size -->
        `;
    }
}


// Create an array of Bird objects with size data
const birds = [
    new Bird("Loirikeet", "bird 1.jpg", "Loirikeets are brightly colored parrots known for their brush-tipped tongues.", "Tropical and subtropical forests", "Nectar, fruit, pollen", "3-5 years", "7.5 - 13 cm"),
    new Bird("Parrot", "bird 2.jpg", "Parrots are known for their intelligence and ability to mimic sounds.", "Tropical rainforests", "Nuts, seeds, fruits", "7 years", "22 - 30 cm"),
    new Bird("Cardinal", "bird 3.jpg", "Cardinals are known for their bright red color and distinctive song.", "Woodlands, gardens", "Seeds, fruits, insects", "3-15 years", "21 - 23 cm"),
    new Bird("Toucan", "bird 4.jpg", "Toucans are known for their large colorful bills and vibrant plumage.", "Tropical and subtropical forests", "Fruits, insects, small reptiles", "2-3 years", "12.5 - 14 cm")
];



// Add bird cards to the DOM
const birdContainer = document.getElementById('birdContainer');
birds.forEach(bird => {
    birdContainer.innerHTML += bird.getCard();
});

// Function to display modal with bird details
function displayBirdModal(birdTitle) {
    const bird = birds.find(b => b.title === birdTitle);
    if (bird) {
        document.getElementById('birdTitle').textContent = bird.title;
        document.getElementById('birdImage').src = `images/${bird.imageFile}`;
        document.getElementById('birdDescription').textContent = bird.description;
        document.getElementById('birdHabitat').textContent = `Habitat: ${bird.habitat}`;
        document.getElementById('birdDiet').textContent = `Diet: ${bird.diet}`;
        document.getElementById('birdLifespan').textContent = `Lifespan: ${bird.lifespan}`;
        document.getElementById('birdSize').textContent = `Size: ${bird.size}`; // Add size display
        document.getElementById('birdModal').style.display = 'block';
    }
}

