document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.testa');
    let counter = 0;

    // Position each slide
    slides.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
    });

    const slideData = () => {
        slides.forEach((slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        });
    };

    const showNextSlide = () => {
        counter = (counter + 1) % slides.length;
        slideData();
    };

    // Start the automatic sliding
    setInterval(showNextSlide, 4000);
});
