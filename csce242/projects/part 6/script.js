const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

// Toggle the menu and update aria-expanded attribute
hamburger.addEventListener('click', () => {
    const isActive = navList.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isActive);
});

// Set initial aria-expanded state
hamburger.setAttribute('aria-expanded', 'false');

// Function to fetch character details from the JSON file
function fetchCharacterDetails() {
    return fetch('characters.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch character data');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching character details:', error);
            return null; // Return null on error
        });
}


// Function to display character details
async function displayCharacterDetails() {
    // Fetch the character details from the JSON file
    const characterDetails = await fetchCharacterDetails();
    
    if (!characterDetails) {
        document.getElementById('character-info').innerHTML = `<p>Failed to load character details.</p>`;
        return;
    }

    // Get the character from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const character = urlParams.get('character')?.toLowerCase();


    // Find the character details
    const details = characterDetails[character];

    if (details) {
        const characterInfoDiv = document.getElementById('character-info');
        characterInfoDiv.innerHTML = `
            <div class="character-card">
                <div class="character-image">
                    <img src="${details.image}" alt="${details.name}">
                </div>
                <h2>${details.name}</h2>
                <p><strong>Game:</strong> ${details.game}</p>
                <p><strong>Description:</strong> ${details.description}</p>
                <p><strong>Abilities:</strong> ${details.abilities}</p>
                <p><strong>Trivia:</strong> ${details.trivia}</p>
            </div>
        `;
    } else {
        document.getElementById('character-info').innerHTML = `<p>Character not found.</p>`;
    }
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', displayCharacterDetails);