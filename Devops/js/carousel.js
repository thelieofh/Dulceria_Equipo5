let currentIndex = 0;
const carouselInner = document.querySelector('.carousel-inner');
const totalItems = document.querySelectorAll('.carousel-item').length;

function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

function moveToPrevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

// Navegación automática
setInterval(moveToNextSlide, 5000); // Cambia de imagen cada 5 segundos

// Navegación con flechas
document.querySelector('.carousel-control.next').addEventListener('click', moveToNextSlide);
document.querySelector('.carousel-control.prev').addEventListener('click', moveToPrevSlide);