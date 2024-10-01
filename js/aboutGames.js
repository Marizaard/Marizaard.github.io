// Array of images to switch between
const imagesArray = {
    'toggle-quintadovale': [
        'img/game_files/quinta_do_vale_logo.PNG',
        'img/game_files/quinta_do_vale_1.jpg',
        'img/game_files/quinta_do_vale_2.jpg',
        'img/game_files/quinta_do_vale_4.jpg',
        'img/game_files/quinta_do_vale_6.jpg',
        'img/game_files/quinta_do_vale_7.jpg',
    ],
    'toggle-allsustainable': [
        'img/game_files/all_sustainable_logo.png',
        'img/game_files/all_sustainable_1.png',
        'img/game_files/all_sustainable_2.png',
        'img/game_files/all_sustainable_3.png',
        'img/game_files/all_sustainable_4.png',
        'img/game_files/all_sustainable_5.png',
        'img/game_files/all_sustainable_6.png',
    ],
    'toggle-ecosphereproject': [
        'img/game_files/all_sustainable_logo.png',
        'img/game_files/all_sustainable_1.png',
        'img/game_files/all_sustainable_2.png',
        'img/game_files/all_sustainable_3.png',
        'img/game_files/all_sustainable_4.png',
        'img/game_files/all_sustainable_5.png',
        'img/game_files/all_sustainable_6.png',
    ],
    'toggle-ourwill': [
        'img/game_files/our_will_logo.jpg',
        'img/game_files/our_will_1.jpg',
        'img/game_files/our_will_4.png',
        'img/game_files/our_will_2.png',
        'img/game_files/our_will_6.png',
        'img/game_files/our_will_7.png',
    ],
    'toggle-wizardsapprentice': [
        'img/game_files/all_sustainable_logo.png',
        'img/game_files/all_sustainable_1.png',
        'img/game_files/all_sustainable_2.png',
        'img/game_files/all_sustainable_3.png',
        'img/game_files/all_sustainable_4.png',
        'img/game_files/all_sustainable_5.png',
        'img/game_files/all_sustainable_6.png',
    ]
};

// Index of the currently displayed image
let currentIndex = 0;

// Function to change the image
function changeImage(direction) {
    // Find the parent sliding box
    const slidingBox = document.querySelector('.sliding-box.active'); // Ensure you have an active class for current box
    const imageElement = slidingBox.querySelector('.slider-image');

    // Get the box key for identifying the image set
    const boxKey = slidingBox.getAttribute('data-box'); // You should add data-box="sliding-box-1" or "sliding-box-2" in HTML
    const images = imagesArray[boxKey];

    // Get the current image index
    currentIndex = (currentIndex + direction + images.length) % images.length;

    // Change the image
    imageElement.src = images[currentIndex];
}

// CHANGE BETWEEN SLIDING BOXES
const boxes = document.querySelectorAll('.sliding-box');
let currentBox = 0; // Track the currently visible box

// Hide all sliding boxes except the first one
function showBox(index) {
    boxes.forEach((box, i) => {
        if (i === index) {
            box.classList.add('active');
            box.style.right = '0'; // Show the current box
        } else {
            box.classList.remove('active');
            box.style.right = '-100%'; // Hide other boxes
        }
    });
}

function showBox2(boxKey) {
    boxes.forEach(box => {
        if (box.getAttribute('data-box') === boxKey) {
            box.classList.add('active'); // Show the current box
            box.style.right = '0'; // Slide it into view
        } else {
            box.classList.remove('active'); // Hide other boxes
            box.style.right = '-100%'; // Slide out of view
        }
    });
}

// Event listener for the right arrow (to switch between sliding boxes)
document.querySelectorAll('.arrow-right-next-game').forEach(arrow => {
    arrow.addEventListener('click', () => {
        currentBox = (currentBox + 1) % boxes.length; // Move to the next box (loop around)
        showBox(currentBox);
    });
});

// Event listener for the left arrow (to switch between sliding boxes)
document.querySelectorAll('.arrow-left-next-game').forEach(arrow => {
    arrow.addEventListener('click', () => {
        currentBox = (currentBox - 1 + boxes.length) % boxes.length; // Move to the previous box (loop around)
        showBox(currentBox);
    });
});
// Add the event listener for the close button
document.querySelectorAll('.close-button').forEach(closeBtn => {
    closeBtn.addEventListener('click', function () {
        const slidingBox = this.closest('.sliding-box'); // Find the parent sliding box
        slidingBox.style.right = '-100%'; // Slide it out of view
        
        console.log("Sliding box closed");
    });
});

document.querySelectorAll('.image-button').forEach(imgBtn => {
    document.querySelectorAll('.image-button').forEach(imgBtn => {
        imgBtn.addEventListener('click', function () {
            const openSlideLabel = this.querySelector('.open-slide');
            const toggleId = openSlideLabel.getAttribute('for'); // Get the ID from the for attribute
            showBox2(toggleId); // Show the corresponding sliding box
            console.log("Continue Reading clicked! Sliding box opened for:", toggleId);
        });
    });
});




