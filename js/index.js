const swiper = new Swiper(".mySwiper", {
    speed: 1500,
    allowTouchMove: false,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
            return `<span>0</span><span class="${currentClass} "></span> 
                 <span>/</span> 
                 <span>0</span><span class="${totalClass}"></span>`;
        },
    },
    loop: true,
    // autoplay: {
    //     delay: 5000,
    //     stopOnLastSlide: false,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: ".banner-slider .swiper-button-next",
        prevEl: ".banner-slider .swiper-button-prev",
        clickable: true,
    },
});

const swiperMb = new Swiper(" .mySwiper-mb", {
    speed: 1000,
    effect: "fade",
    allowTouchMove: true,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".banner-slider-mb .swiper-pagination",
        clickable: true,
    },

});

const swiper2 = new Swiper(".guideSwiper", {
    effect: "fade",
    allowTouchMove: true,
    navigation: {
        nextEl: ".guide .swiper-button-next",
        prevEl: ".guide .swiper-button-prev",
        clickable: true,
    },
    pagination: {
        el: ".guide .swiper-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
            return `<span>0</span><span class="${currentClass} "></span> 
                 <span>/</span> 
                 <span>0</span><span class="${totalClass}"></span>`;
        },
    },
});