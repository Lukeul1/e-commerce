// JavaScript

window.onload = function() {
  const slides = document.querySelectorAll('.image-slide');
  const numSlides = document.querySelectorAll('.image-slide').length;
  const numVisibleSlides = 3; // Number of slides to display at a time
  let currentSlide = 0;
  const slideInterval = 5000; // Change slide every 5 seconds

  function displaySlides() {
    for (let i = 0; i < numSlides; i++) {
      slides[i].classList.remove('active');
    }

    for (let i = 0; i < numVisibleSlides; i++) {
      let slideIndex = (currentSlide + i) % numSlides;
      slides[slideIndex].classList.add('active');
    }
  }

  function nextSlide() {
    currentSlide = (currentSlide + numVisibleSlides) % numSlides;
    displaySlides();
    setTimeout(replaceSlideImages, slideInterval); // Replace slide images after 5 seconds
  }

  function replaceSlideImages() {
    const activeSlides = document.querySelectorAll('.image-slide.active');
    const usedIndices = []; // Track used indices to ensure uniqueness
    activeSlides.forEach(slide => {
      const image = slide.querySelector('img');
      const collectionFolder = 'images/Collection/';
      let randomImageIndex;
      
      do {
        randomImageIndex = Math.floor(Math.random() * numSlides);
      } while (usedIndices.includes(randomImageIndex));
  
      usedIndices.push(randomImageIndex);
      
      const randomImagePath = collectionFolder + 'collection-' + (randomImageIndex + 1) + '.jpeg';
      image.src = randomImagePath;
      slide.classList.remove('active');
    });
  }

  function startSlideshow() {
    displaySlides();
    setInterval(nextSlide, slideInterval);
  }

  startSlideshow();
};
