const swiper = new Swiper(".header-content-right", {
    loop: true,
    slidePerView: 1,
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
    
})

const swiper2 = new Swiper(".prod", {
    loop: true,
    slidesPerView: 3.3,
    breakpoints: {
        1180: {
            slidesPerView: 3.3,
        },
        
        850: {
            slidesPerView: 2.3,
        },
        600: {
            slidesPerView: 1.3,
        },
        0: {
            slidesPerView: 1
        }
    }
    
})

const swiper3 = new Swiper(".partners-slider-container", {
    loop: true,
    slidesPerView: 4,
    breakpoints: {
        1300: {
            slidesPerView: 3.5,
        },
        991: {
            slidesPerView: 2.5,
        },
        768: {
            slidesPerView: 2.5,
        },
        576: {
            slidesPerView: 2,
        },
        330: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    }
})


let menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener("click", function() {
    document.querySelector('.burger-menu').style.display = "flex";
    menuBtn.style.display = "none"
})
const closeBtn = document.querySelector('.close-btn').addEventListener("click", function() {
    document.querySelector('.burger-menu').style.display = "none";
    menuBtn.style.display = "flex"
})