console.log('DreamTales GitHub Pages app loaded');

function displayWelcomeMessage() {
    console.log('Welcome to DreamTales!');
}

displayWelcomeMessage();

// Custom carousel functionality
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');
let currentIndex = 0;

function showCarouselItem(index) {
    carouselItems.forEach((item, i) => {
        item.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showCarouselItem(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showCarouselItem(currentIndex);
});

showCarouselItem(currentIndex);

// JavaScript animations for more complex effects
const newImages = document.querySelectorAll('.new-image img');

newImages.forEach((img) => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 0.3s ease-in-out';
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});

// Lazy loading for images
const images = document.querySelectorAll('img');
images.forEach((img) => {
    img.setAttribute('loading', 'lazy');
});
