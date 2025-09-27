let lastScroll = 0;
let lastScrolltp = 0;
const navbar = document.getElementById("navbar");
const topheader = document.getElementById("topheader");

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll < 0) {

        navbar.classList.remove("hide");
    }
    if (currentScroll > lastScroll) {

        navbar.classList.add("hide");
    } else {
        navbar.classList.remove("hide");
    }

    lastScroll = currentScroll;
});

window.addEventListener("scroll", () => {
    const currentScrolltp = window.scrollY;

    if (currentScrolltp < 0) {

        topheader.classList.remove("hide");
    }
    if (currentScrolltp > lastScrolltp) {

        topheader.classList.add("hide");
    } else {
        topheader.classList.remove("hide");
    }

    lastScrolltp = currentScrolltp;
});
