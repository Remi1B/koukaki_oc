document.addEventListener('scroll', function() {
    const banner = document.querySelector('.banner');
    const logo = document.querySelector('.banner .logo img');
    const bannerHeight = banner.offsetHeight;
    const scrollY = window.scrollY;
    // Calcule le pourcentage de défilement de la bannière
    const scrollProgress = Math.min(scrollY / bannerHeight, 1); // Limite entre 0 et 1
    if (scrollY < bannerHeight) {
        logo.style.transform = `translate(0, ${Math.min(scrollProgress * (250 - 10) * 2, 250)}px)`;
    }
    if (scrollY >= bannerHeight) {
        logo.style.transform = 'translate(0, 250px)';
    }
});