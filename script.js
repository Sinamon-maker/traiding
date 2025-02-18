const menu = document.querySelector("#burger-menu");

window.addEventListener("click", show);

function show(event) {
  if (!burger.contains(event.target) && !menu.contains(event.target)) {
    menu.classList.remove("burger-opened");
    burger.setAttribute("aria-expanded", "false");
  } else {
    const isOpen = menu.classList.toggle("burger-opened");

    burger.setAttribute("aria-expanded", isOpen);
  }
}
