const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

const collapsiblesHamburger = document.querySelectorAll(".hamburger");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("hamburger--closed");
  })
);