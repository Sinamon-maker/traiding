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

document.addEventListener("DOMContentLoaded", function () {
  const swiperContainer = document.querySelector(".testimonial-swiper");

  if (swiperContainer) {
    const swiper = new Swiper(".testimonial-swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
      // Optional: custom navigation
      navigation: {
        nextEl: ".my-swiper-button-next",
        prevEl: ".my-swiper-button-prev",
      },
      on: {
        init: function () {
          updateButtons();
        },
        slideChange: function () {
          updateButtons();
        },
      },
    });
  } else {
    console.log("Swiper not initialized on this page.");
  }

  const prevBtn = document.querySelector(".my-swiper-button-prev");
  const nextBtn = document.querySelector(".my-swiper-button-next");

  function updateButtons() {
    if (swiper.isBeginning) {
      prevBtn.disabled = true;
      prevBtn.classList.add("disabled");
    } else {
      prevBtn.disabled = false;
      prevBtn.classList.remove("disabled");
    }

    if (swiper.isEnd) {
      nextBtn.disabled = true;
      nextBtn.classList.add("disabled");
    } else {
      nextBtn.disabled = false;
      nextBtn.classList.remove("disabled");
    }
  }
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
