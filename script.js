
    let currentIndex = 0;

    // Get the elements
    const slideshow = document.getElementById("slideshow");
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    // Function to update the carousel position
    function updateCarousel() {
        const offset = -currentIndex * 100; // Move slideshow based on index
        slideshow.style.transform = `translateX(${offset}%)`;
    }

    // Move to the next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides; // Loop back to first
        updateCarousel();
    }

    // Move to the previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop back to last
        updateCarousel();
    }

    // Auto-slide every 3 seconds
    setInterval(nextSlide, 3000);

