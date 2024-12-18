// Hamburger menu toggle for mobile view
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

// Toggle the menu and update aria-expanded attribute
hamburger.addEventListener('click', () => {
    const isActive = navList.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isActive);
});

// Set initial aria-expanded state
hamburger.setAttribute('aria-expanded', 'false');

// Asynchronous form submission for the contact form
const contactForm = document.querySelector('.contact-form form');

if (contactForm) {
    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const formData = {
            name: contactForm.querySelector('input[name="name"]').value,
            email: contactForm.querySelector('input[name="email"]').value,
            message: contactForm.querySelector('textarea[name="message"]').value,
            access_key: '1a115c8c-ffcc-41cf-973b-be26c8c56204' // Web3Forms access key
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Thank you! Your message has been sent.');
            } else {
                alert('Sorry, something went wrong. Please try again.');
            }
        } catch (error) {
            alert('Error: Please check your connection and try again.');
            console.error('Error submitting form:', error);
        }
    });
}



// Function to show success or error messages
function showFormMessage(message, type) {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageElement.className = `form-message ${type}`; // Apply success or error class

    // Insert message element after the form
    const form = document.querySelector('.contact-form form');
    form.parentNode.insertBefore(messageElement, form.nextSibling);
}

// Fetch popular characters for the main page from main-page.json
const fetchMainPageCharacters = async () => {
    try {
        const response = await fetch('main-page.json');
        if (!response.ok) {
            throw new Error('Failed to fetch main page character data');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching main page characters:', error);
        return [];
    }
};

// Display popular characters on the main page (index.html)
const displayMainPageCharacters = async () => {
    const mainPageCharacters = await fetchMainPageCharacters();
    const characterGridDiv = document.querySelector('.character-grid');
    if (!characterGridDiv) return; // Check if element exists

    characterGridDiv.innerHTML = '';

    mainPageCharacters.forEach(character => {
        const characterCard = `
            <div class="character-card" data-character="${character.id}">
                <img src="${character.image}" alt="${character.name}">
                <h3>${character.name}</h3>
                <p>${character.description}</p>
                <a href="character-details.html?character=${character.id}" class="view-details-btn">View Details</a>
            </div>
        `;
        characterGridDiv.innerHTML += characterCard;
    });
};

// Call the function to display main page characters on page load
if (window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
    document.addEventListener('DOMContentLoaded', displayMainPageCharacters);
}

// Fetch popular characters from the popular-characters JSON file
const fetchPopularCharacters = async () => {
    try {
        const response = await fetch('popular-characters.json');
        if (!response.ok) {
            throw new Error('Failed to fetch popular character data');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching popular characters:', error);
        return [];
    }
};

// Display popular characters on the characters.html page
const displayPopularCharacters = async () => {
    const popularCharacters = await fetchPopularCharacters();
    const characterListDiv = document.querySelector('.character-grid');
    if (!characterListDiv) return; // Check if element exists

    characterListDiv.innerHTML = '';

    popularCharacters.forEach(character => {
        const characterCard = `
            <div class="character-card" data-character="${character.id}">
                <img src="${character.image}" alt="${character.name}">
                <h3>${character.name}</h3>
               <p>${character.description}</p>
                <a href="character-details.html?character=${character.id}" class="view-details-btn">View Details</a>
            </div>
        `;
        characterListDiv.innerHTML += characterCard;
    });
};

// Fetch all character details from characters.json for character details page
const fetchCharacterDetails = async () => {
    try {
        const response = await fetch('characters.json');
        if (!response.ok) {
            throw new Error('Failed to fetch character data');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching character details:', error);
        return null;
    }
};

// Display character details based on the clicked character
const displayCharacterDetails = async () => {
    const characterDetails = await fetchCharacterDetails();
    const urlParams = new URLSearchParams(window.location.search);
    const characterId = urlParams.get('character')?.toLowerCase();
    const details = characterDetails?.find(character => character.id === characterId);

    const characterInfoDiv = document.getElementById('character-info');
    if (!characterInfoDiv) return; // Check if element exists

    if (details) {
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
        characterInfoDiv.innerHTML = `<p>Character not found.</p>`;
    }
};

// Call the function to display popular characters on page load
if (window.location.pathname.includes('characters.html')) {
    document.addEventListener('DOMContentLoaded', displayPopularCharacters);
}

// Call the function to display character details on character-details.html page load
if (window.location.pathname.includes('character-details.html')) {
    document.addEventListener('DOMContentLoaded', displayCharacterDetails);
}
