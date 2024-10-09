document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.fade-in-section, .fade-in-section-down');

    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('visible');
        }, index * 500); 
    });
});
/* Code fonctionnel non basé sur un délai pour l'apparition mais sur l'observation des sections
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.fade-in-section, .fade-in-section-down');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });
    sections.forEach(section => {
        observer.observe(section);
    });
});
*/