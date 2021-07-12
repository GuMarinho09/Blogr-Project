const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

const collapsiblesHamburger = document.querySelectorAll(".hamburger");
collapsiblesHamburger.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("hamburger--closed");
  })
);

const navItemOne = document.getElementById("nav__item-one");
const navItemTwo = document.getElementById("nav__item-two");
const navItemThree = document.getElementById("nav__item-three");
navItemOne.addEventListener("click", function () {
    if (navItemTwo.classList.contains("collapsible--expanded")) {
      navItemTwo.classList.remove("collapsible--expanded");
    }

    if (navItemThree.classList.contains("collapsible--expanded")) {
      navItemThree.classList.remove("collapsible--expanded");
    }
});
navItemTwo.addEventListener("click", function () {
    if (navItemOne.classList.contains("collapsible--expanded")) {
      navItemOne.classList.remove("collapsible--expanded");
    }

    if (navItemThree.classList.contains("collapsible--expanded")) {
      navItemThree.classList.remove("collapsible--expanded");
    }
});
navItemThree.addEventListener("click", function () {
    if (navItemOne.classList.contains("collapsible--expanded")) {
      navItemOne.classList.remove("collapsible--expanded");
    }

    if (navItemTwo.classList.contains("collapsible--expanded")) {
      navItemTwo.classList.remove("collapsible--expanded");
    }
});