const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    speed: 800,
    slidesPerView: 2.5,
    spaceBetween: 20,
    centeredSlides:true,
    initialSlide:1,
    slidesPerGroup:1,
    autoplay: {
        delay: 15000,
    },
});