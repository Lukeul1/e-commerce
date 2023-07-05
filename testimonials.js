// JavaScript code to handle the testimonial slideshow

// Get all testimonial slides
const slides = document.querySelectorAll('.testimonial-slide');

// Set the index of the current slide
let currentSlide = 0;

// Function to show the next slide
function showNextSlide() {
  // Fade out the current slide
  slides[currentSlide].style.opacity = 0;

  // Increment the current slide index
  currentSlide = (currentSlide + 1) % slides.length;

  // Fade in the next slide after a short delay
  setTimeout(() => {
    slides[currentSlide].style.opacity = 1;
  }, 500); // Adjust the delay as desired
}

// Function to start the slideshow
function startSlideshow() {
  // Show the first slide
  slides[currentSlide].style.opacity = 1;

  // Set an interval to transition to the next slide every 10 seconds
  setInterval(showNextSlide, 10000); // Adjust the time interval as desired
}

// Start the slideshow when the DOM has finished loading
document.addEventListener('DOMContentLoaded', startSlideshow);

