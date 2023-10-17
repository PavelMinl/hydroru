const swiper = new Swiper('.swiper_main', {
    direction: 'horizontal',
    speed: 800,
    slidesPerView: 1,
    autoplay: {
        delay: 15000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
            if (window.innerWidth <= 1100) {
                return '<span class="' + className + '"></span>'; // Пустой span для скрытия номера слайда
            } else {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            }
        },
    },
});
