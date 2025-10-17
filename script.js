// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// Page 4 Hover Animation
function page4Animation() {
    const elemC = document.querySelector("#elem-container");
    const fixed = document.querySelector("#fixed-image");

    if (!elemC || !fixed) return; // safety check

    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block";
    });

    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none";
    });

    const elems = document.querySelectorAll(".elem");
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            const image = e.getAttribute("data-image");
            fixed.style.backgroundImage = `url(${image})`;
        });
    });
}

// Initialize Swiper
const swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 15 },
        600: { slidesPerView: 2, spaceBetween: 20 },
        900: { slidesPerView: 3, spaceBetween: 30 },
    },
});

// Menu Toggle Animation
function menuAnimation() {
    const menu = document.querySelector("nav h3");
    const full = document.querySelector("#full-scr");
    const navimg = document.querySelector("nav img");

    if (!menu || !full || !navimg) return;

    let flag = 0;

    menu.addEventListener("click", function () {
        if (flag === 0) {
            full.style.top = "0";
            navimg.style.opacity = "0";
            flag = 1;
        } else {
            full.style.top = "-100%";
            navimg.style.opacity = "1";
            flag = 0;
        }
    });

    // Close menu if user clicks overlay (full screen area)
    full.addEventListener("click", function(e) {
        // Prevent closing if inner div is clicked
        if (e.target.id === "full-scr") {
            full.style.top = "-100%";
            navimg.style.opacity = "1";
            flag = 0;
        }
    });
}

// Loader Animation
function loaderAnimation() {
    const loader = document.querySelector("#loader");
    if (!loader) return;

    setTimeout(function () {
        loader.style.top = "-100%";
    }, 4200);
}

// Call Functions
document.addEventListener("DOMContentLoaded", () => {
    page4Animation();
    menuAnimation();
    loaderAnimation();
});
