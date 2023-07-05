// Define the imageFiles array with paths to the image files
const imageFiles = [
  'images/collection-1.jpeg',
  'images/collection-2.jpeg',
  'images/collection-3.jpeg',
  'images/collection-4.jpeg',
  'images/collection-5.jpeg',
  'images/collection-6.jpeg',
  'images/collection-7.jpeg',
  'images/collection-8.jpeg',
  'images/collection-9.jpeg',
  'images/collection-10.jpeg',
  'images/collection-11.jpeg',
  'images/collection-12.jpeg',
  'images/collection-13.jpeg',
  'images/collection-14.jpeg',
  'images/collection-15.jpeg',
  'images/collection-16.jpeg',
  'images/collection-17.jpeg',
  'images/collection-18.jpeg',
  'images/collection-19.jpeg',
  'images/collection-20.jpeg',
  // Add more image paths as desired
];

// Function to display random images in the image placeholders
function displayRandomImages() {
  const imagePlaceholders = Array.from(document.querySelectorAll('.image-placeholder'));

  const randomIndices = [];
  while (randomIndices.length < 3) {
    const randomIndex = Math.floor(Math.random() * imageFiles.length);
    if (!randomIndices.includes(randomIndex)) {
      randomIndices.push(randomIndex);
    }
  }

  imagePlaceholders.forEach((placeholder, index) => {
    if (randomIndices.includes(index)) {
      const randomImage = imageFiles[randomIndices[index]];
      placeholder.style.backgroundImage = `url(${randomImage})`;
    } else {
      placeholder.style.backgroundImage = 'none';
    }
  });
}

// Call the displayRandomImages function to display the random images
displayRandomImages();