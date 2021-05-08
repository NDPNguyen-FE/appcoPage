/*================================ Nav__Toggle ================================== */
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
/**=================================== REMOVE MENU ============================ */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav__menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((item) => item.addEventListener("click", linkAction));
/**=================================== SCROLL NAV ============================ */
function scrollHeader() {
  const nav = document.getElementById("header");

  if (this.scrollY >= 300) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);
/**=================================== SCROLL TOP ============================ */
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");

  if (this.scrollY >= 300) {
    scrollTop.classList.add("show-scroll");
  } else {
    scrollTop.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollTop);

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
    768: {
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
/**=========================== SCROLLREVEAL JS===================== */
const sr = ScrollReveal({
  distance: "30px",
  duration: 1800,
  reset: true,
});

sr.reveal(".home__content,.page__content, .device__download", {
  origin: "left",
  interval: 200,
});
sr.reveal(".home__img,.device__img", {
  origin: "right",
  interval: 200,
});
sr.reveal(".service__head", {
  origin: "top",
  s,
});
