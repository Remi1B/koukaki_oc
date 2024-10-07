//SWIPER
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  console.log(swiper);
// FADE IN SECTION
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
 
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.fade-in-section, .fade-in-section-down');

    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('visible');
        }, index * 500); // 500ms entre chaque apparition
    });
});

//FADE IN TITLE
function checkVisibility() {
    const titres = document.querySelectorAll('.fade-in-title');
    titres.forEach(titre => {
      const rect = titre.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        titre.classList.add('visible');
      }else {
        titre.classList.remove('visible');
      }
    });
  }
  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);
  checkVisibility();
// Appel initial pour vérifier la visibilité des titres lors du chargement
document.addEventListener('DOMContentLoaded', checkVisibility);
window.addEventListener('load', checkVisibility);

// PARALLAXE LOGO
document.addEventListener('scroll', function() {
    const banner = document.querySelector('.banner');
    const logo = document.querySelector('.logo img');
    const bannerHeight = banner.offsetHeight;
    const scrollY = window.scrollY;
    // Calcule le pourcentage de défilement de la bannière
    const scrollProgress = Math.min(scrollY / bannerHeight, 1); // Limite entre 0 et 1
    if (scrollY < bannerHeight) {
        logo.style.transform = `translate(0, ${Math.min(scrollProgress * (250 - 10) * 2, 250)}px)`; // Ajuste pour centrer et descendre
    }
    if (scrollY >= bannerHeight) {
        logo.style.transform = 'translate(0, 250px)';
    }
});
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