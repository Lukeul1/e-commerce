// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the image container
    var imageContainer = document.getElementById('image-container');

    // Define the file path and pattern for the images
    var filePath = 'images/'; // Update this with the correct path to your images folder
    var filePattern = /collection/; // Regular expression to match images with 'collection' in the file name

    // Simulated JSON object with image file names
    var imageData = {
        images: [
            'collection-1.jpeg',
            'collection-2.jpeg',
            'collection-3.jpeg',
            'collection-4.jpeg',
            'collection-5.jpeg',
            'collection-6.jpeg',
            'collection-7.jpeg',
            'collection-8.jpeg',
            'collection-9.jpeg',
            'collection-10.jpeg',
            'collection-11.jpeg',
            'collection-12.jpeg',
            'collection-13.jpeg',
            'collection-14.jpeg',
            'collection-15.jpeg',
            'collection-16.jpeg',
            'collection-17.jpeg',
            'collection-18.jpeg',
            'collection-19.jpeg',
            'collection-20.jpeg',
            // Add more image file names here
        ]
    };

    // Filter the images based on the file pattern
    var images = imageData.images.filter(function(image) {
        return filePattern.test(image);
    });

    // Loop through the images and create HTML elements
    for (var i = 0; i < images.length; i++) {
        // Create an image element
        var img = document.createElement('img');
        img.src = filePath + images[i];

        // Create a div to hold the image
        var imgWrapper = document.createElement('div');
        imgWrapper.classList.add('image-wrapper');
        imgWrapper.appendChild(img);

        // Append the image wrapper to the container
        imageContainer.appendChild(imgWrapper);
    }
});