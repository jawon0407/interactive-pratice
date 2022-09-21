const swiper = new Swiper(".promotion", {
  // Optional parameters
  loop: true,
  width: 300,
  initialSlide: 0,
  slidesPerView: "auto",
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
