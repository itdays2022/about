const activePage = window.location.pathname;
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.remove("active");
    link.classList.add("active");
  }
});

// scrolling page navbar
var goTop = document.querySelector(".go-up");
var lastScrollTop = 0;
navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop >= 600) {
    goTop.classList.add("active");
  } else {
    goTop.classList.remove("active");
  }
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-68px";
  } else {
    navbar.style.top = "0px";
  }
  lastScrollTop = scrollTop;
});
