/*================================ Nav__Toggle ========================================= */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};

showMenu("nav__toggle", "nav__menu");
/**==================================== REMOVE MENU ================================= */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav__menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((item) => item.addEventListener("click", linkAction));

/**=========================== PAGE CAROUSEL JS===================== */
$(".owl-one").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplaySpeed: 2000,
  slideTransition: "linear",
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
      nav: false,
    },
  },
});
$(".owl-two").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplaySpeed: 5000,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
      nav: false,
    },
  },
});
