function isMobile() {
  return window.innerWidth < 576;
}

const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
searchBtn.addEventListener("click", () => {
  if (!isMobile()) return;
  searchInput.classList.toggle("active");
});
