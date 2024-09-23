document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    let currentSlide = 0;

    function nextSlide() {
        currentSlide = (currentSlide + 1) % 3;
        slider.style.transform = `translateX(-${currentSlide * 33.33}%)`;
    }

    setInterval(nextSlide, 5000);  // Change slide every 5 seconds
});