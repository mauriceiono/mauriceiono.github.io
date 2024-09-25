// Associative array to hold image data
const imageData = {
    'party': { 'src': 'images/birthday.jpg', 'title': 'Party Hat', 'desc': 'A fun party hat character' },
    'chef': { 'src': 'images/clown.jpg', 'title': 'Clown', 'desc': 'A funny clown character' },
    'umbrella': { 'src': 'images/rain.jpg', 'title': 'Umbrella', 'desc': 'A character under an umbrella' },
    'book': { 'src': 'images/read.jpg', 'title': 'Book Reader', 'desc': 'A character reading a book' },
    'gardener': { 'src': 'images/shovel.jpg', 'title': 'Gardener', 'desc': 'A gardener with a shovel' },
    'laptop': { 'src': 'images/work.jpg', 'title': 'Laptop User', 'desc': 'A character working on a laptop' }
  };
  
  // Function to load images dynamically
  function loadImages() {
    const imageGrid = document.getElementById('image-grid');
    for (const key in imageData) {
      const item = imageData[key];
      const div = document.createElement('div');
      div.className = 'image-item';
      div.innerHTML = `<img src="${item.src}" alt="${item.title}">`;
      div.onclick = () => showDescription(item);
      imageGrid.appendChild(div);
    }
  }
  
  // Function to display image description when clicked
  function showDescription(item) {
    const descriptionArea = document.getElementById('description-area');
    descriptionArea.innerHTML = `<strong>${item.title}</strong><br>${item.desc}`;
  }
  
  // Load images when the page loads
  window.onload = loadImages;
  