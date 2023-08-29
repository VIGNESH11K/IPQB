const thumbnails = document.querySelectorAll('.thumbnails img');
const overlay = document.querySelector('.overlay');
const largeImage = document.querySelector('.large-image');
const closeButton = document.querySelector('.close');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

let currentIndex = 0;

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        currentIndex = index;
        showOverlay(index);
    });
});

closeButton.addEventListener('click', hideOverlay);
prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

function showOverlay(index) {
    overlay.style.display = 'block';
    loadLargeImage(index);
}

function hideOverlay() {
    overlay.style.display = 'none';
}

function loadLargeImage(index) {
    largeImage.src = thumbnails[index].getAttribute('data-large');
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    loadLargeImage(currentIndex);
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    loadLargeImage(currentIndex);
}
