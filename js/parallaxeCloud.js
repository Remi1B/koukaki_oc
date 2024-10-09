document.addEventListener('DOMContentLoaded', () => {
    const placeSection = document.querySelector('#place');
    const bigCloud = document.querySelector('.big_cloud');
    const littleCloud = document.querySelector('.little_cloud');

    let isVisible = false;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    // Fonction pour gérer le défilement
    function handleScroll(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                isVisible = true;
            } else {
                isVisible = false;
            }
        });
    }
    const observer = new IntersectionObserver(handleScroll, observerOptions);
    observer.observe(placeSection);

    document.addEventListener('scroll', function() {
        if (isVisible) {
            const sectionRect = placeSection.getBoundingClientRect();
            const offset = Math.min(Math.max(0, sectionRect.top), 300);
            const translateValue = 300 - offset;
            bigCloud.style.transform = `translateX(-${translateValue}px)`; 
            littleCloud.style.transform = `translateX(-${translateValue}px)`; 
        }
    });
});