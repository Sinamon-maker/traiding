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

$(document).ready(function () {
  if (window.location.pathname === "/faqs.html") {
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
