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

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const cards = document.querySelector(".testimonials-cards");
let index = 0;

function updateCarousel() {
  const cardWidth =
    document.querySelector(".testimonial-card").offsetWidth + 10; // Card width + gap
  cards.style.transform = `translateX(-${index * cardWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  if (
    index <
    cards.children.length -
      Math.floor(
        window.innerWidth /
          document.querySelector(".testimonial-card").offsetWidth
      )
  ) {
    index++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

// Update on window resize
window.addEventListener("resize", updateCarousel);
