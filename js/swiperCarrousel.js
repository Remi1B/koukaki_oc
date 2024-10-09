const swiper = new Swiper(".swiper", {
    autoplay:{
        delay:1000,
    },
    speed: 2000,
    effect:"coverflow",
    loop: true,
    coverflowEffect:{
        rotate: 60,
        slideShadows:false,
    },
    slidesPerView: '3',
});