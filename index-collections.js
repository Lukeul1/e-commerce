
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

// Function to display random image in the featured collection section
function displayRandomImage() {
  const imagePlaceholder = document.querySelector('.image-placeholder');
  const randomIndex = Math.floor(Math.random() * imageFiles.length);
  const randomImage = imageFiles[randomIndex];
  
  imagePlaceholder.style.backgroundImage = `url(${randomImage})`;
  imagePlaceholder.classList.add('fade-in');
  
  setTimeout(() => {
    imagePlaceholder.classList.remove('fade-in');
    displayRandomImage();
  }, 5000); // Display the image for 5 seconds before fading out and showing the next one
}

// Call the displayRandomImage function to display the random image
displayRandomImage();