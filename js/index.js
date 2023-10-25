document.addEventListener('keydown', function(event) {
    if (event.keyCode === 38 || event.keyCode === 40) { // Up or down arrow key
        event.preventDefault(); // Prevent default scrolling behavior
        const sections = document.querySelectorAll('.section-scroll');
        let currentSectionIndex = 0;
        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop >= 0) {
                currentSectionIndex = i;
                break;
            }
        }
        if (event.keyCode === 38 && currentSectionIndex > 0) { // Up arrow key
            sections[currentSectionIndex - 1].scrollIntoView({ behavior: 'smooth' });
        } else if (event.keyCode === 40 && currentSectionIndex < sections.length - 1) { // Down arrow key
            sections[currentSectionIndex + 1].scrollIntoView({ behavior: 'smooth' });
        }
    } else if (event.keyCode === 37 || event.keyCode === 39) { // Left or right arrow key
        event.preventDefault(); // Prevent default scrolling behavior
        const carousel = document.querySelector('.carousel');
        const carouselWidth = carousel.offsetWidth;
        const currentScrollPosition = carousel.scrollLeft;
        const scrollAmount = carouselWidth / 2;
        if (event.keyCode === 37 && currentScrollPosition > 0) { // Left arrow key
            carousel.scrollLeft -= scrollAmount;
        } else if (event.keyCode === 39 && currentScrollPosition < carousel.scrollWidth - carouselWidth) { // Right arrow key
            carousel.scrollLeft += scrollAmount;
        }
    }
});

