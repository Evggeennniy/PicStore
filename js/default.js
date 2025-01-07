const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
searchBtn.addEventListener("click", () => {
  searchInput.classList.toggle("active");
});
