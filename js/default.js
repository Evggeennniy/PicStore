function isMobile() {
  return window.innerWidth < 1100;
}

const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
searchBtn.addEventListener("click", () => {
  if (!isMobile()) return;
  searchInput.classList.toggle("active");
});

const mobileNavBtn = document.getElementById("mobile-nav-btn");
const navMenu = document.getElementById("nav-menu");
mobileNavBtn.addEventListener("click", () => {
  mobileNavBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
});
