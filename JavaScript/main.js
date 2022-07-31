const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLinkUL = document.querySelector(".nav_links");
  const navLinks = document.querySelectorAll(".nav_links ul li");

  burger.addEventListener("click", () => {
    //TOGGLE NAV
    navLinkUL.classList.toggle("nav-active");

    // ANIMATE LINKS
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.8
        }s`;
      }
    });

    // ANIMATE BURGER X
    burger.classList.toggle("toggle");
  });
};
navSlide();

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
