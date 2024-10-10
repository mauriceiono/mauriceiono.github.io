async function fetchIceCreamData() {
    try {
      const response = await fetch('https://portiaportia.github.io/json/ice-creams.json');
      const iceCreams = await response.json();
      displayIceCreams(iceCreams);
    } catch (error) {
      console.error('Error fetching the ice cream data:', error);
    }
  }
  
  function displayIceCreams(iceCreams) {
    const gridContainer = document.getElementById('ice-cream-grid');
    
    iceCreams.forEach(iceCream => {
      const iceCreamItem = document.createElement('div');
      iceCreamItem.classList.add('ice-cream-item');
  
      // Set up the image element
      const img = document.createElement('img');
      img.src = `https://portiaportia.github.io/json/images/ice-creams/${iceCream.image}`;
      img.alt = iceCream.name;
  
      // Create overlay with ice cream name
      const overlay = document.createElement('div');
      overlay.classList.add('overlay');
      overlay.innerText = iceCream.name;
  
      // Append image and overlay to the ice cream item
      iceCreamItem.appendChild(img);
      iceCreamItem.appendChild(overlay);
  
      // Append the item to the grid
      gridContainer.appendChild(iceCreamItem);
    });
  }
  
  // Fetch and display the ice cream data on page load
  fetchIceCreamData();
  