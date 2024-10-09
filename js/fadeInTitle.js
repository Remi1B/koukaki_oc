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