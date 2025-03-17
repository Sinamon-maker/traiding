const menu = document.querySelector("#burger-menu");

window.addEventListener("click", show);

function show(event) {
  if (!burger.contains(event.target) && !menu.contains(event.target)) {
    burger.classList.remove("burger-opened");
    burger.setAttribute("aria-expanded", "false");
  } else {
    const isOpen = burger.classList.toggle("burger-opened");

    burger.setAttribute("aria-expanded", isOpen);
  }
}

const swiper = new Swiper(".testimonial-swiper", {
  loop: true,
  spaceBetween: 20, // space between slides in px
  slidesPerView: 1, // default

  // Responsive breakpoints
  breakpoints: {
    768: {
      slidesPerView: 2, // show 2 slides when width >= 768px
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".my-swiper-button-next",
    prevEl: ".my-swiper-button-prev",
  },

  autoplay: {
    delay: 3000, // autoplay delay in ms
    disableOnInteraction: false,
  },
});

$(document).ready(function () {
  if (window.location.pathname.endsWith("faqs.html")) {
    $(".accordion-header").click(function () {
      var target = $(this).data("target"); // Get the ID of the target content
      var content = $(target);

      if (content.is(":visible")) {
        content.slideUp();
        $(this).removeClass("active");
      } else {
        $(".accordion-content").slideUp(); // Hide all contents
        $(".accordion-header").removeClass("active");

        content.slideDown(); // Show clicked content
        $(this).addClass("active");
      }
    });
  }
});
