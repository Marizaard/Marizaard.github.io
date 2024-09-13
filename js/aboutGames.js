// Array of images to switch between
const images = [
    'img/game_files/quinta_do_vale_logo.PNG',
    'img/game_files/all_sustainable.PNG',
    'img/game_files/another_image2.PNG'
];

// Index of the currently displayed image
let currentIndex = 0;

// Function to change the image
function changeImage(direction) {
    currentIndex += direction;

    // Wrap around the image array if it exceeds the bounds
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    // Change the src of the image element to the new image
    document.getElementById('slider-image').src = images[currentIndex];
}
