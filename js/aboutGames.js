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
        'img/game_files/ecosphere_project_logo.png',
        'img/game_files/eco_1.png',
        'img/game_files/eco_2.png',
        'img/game_files/eco_3.png',
        'img/game_files/eco_4.png',
        'img/game_files/eco_5.png',
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
        'img/game_files/wizards_1.png',
        'img/game_files/wizards_2.png',
        'img/game_files/wizards_3.png',
        'img/game_files/wizards_4.png',
        'img/game_files/wizards_5.png',
        'img/game_files/wizards_6.png',
    ],

    'toggle-rootingforyou': [
        'img/game_files/rooting_1.png',
        'img/game_files/rooting_6.png',
        'img/game_files/rooting_10.png',
        'img/game_files/rooting_9.png',
        'img/game_files/rooting_12.png',
        'img/game_files/rooting_4.png',
        'img/game_files/rooting_2.png',
        'img/game_files/rooting_11.png',
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

function fadeInBox(boxKey) {
    boxes.forEach(box => {
        //const contentSection = document.querySelector('.section-content-games');
        
        if (box.getAttribute('data-box') === boxKey) {
            box.classList.add('active'); // Show the current box
            box.scrollIntoView();
            //contentSection.classList.add('collapsed');
        } else {
            box.classList.remove('active'); // Hide other boxes
            //contentSection.classList.remove('collapsed');
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

document.querySelectorAll('.image-button').forEach(button => {
    button.addEventListener('click', function() {
        // Add the 'fade-out' class to fade out the current section-content
        document.querySelector('.section-content-games').classList.add('fade-out');
        const openSlideLabel = this.querySelector('.open-slide');
        const toggleId = openSlideLabel.getAttribute('for'); // Get the ID from the for attribute
        fadeInBox(toggleId); // Show the corresponding sliding box
    });
});

// Close the sliding-box when the close-button is clicked
document.querySelectorAll('.close-button').forEach(button => {
    button.addEventListener('click', function() {
        // Remove the 'fade-out' class to bring back the section content
        document.querySelector('.section-content-games').classList.remove('fade-out');

        // Hide the currently active sliding box
        this.closest('.sliding-box').classList.remove('active');
    });
});





