const burgerMenu = document.getElementById('burgerMenu');
const dropdownMenu = document.getElementById('dropdownMenu');
const body = document.body;
burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('burger-active');
    dropdownMenu.classList.toggle('menu-open');
    body.classList.toggle('no-scroll');
});
const menuLinks = dropdownMenu.querySelectorAll('nav ul li a');
menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        burgerMenu.classList.toggle('burger-active');
        dropdownMenu.classList.toggle('menu-open');
        body.classList.toggle('no-scroll');
    });
});