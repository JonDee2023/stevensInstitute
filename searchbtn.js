let searchBtn = document.getElementById("searchBtn");
let searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", function () {

    searchInput.classList.toggle("active");

    if (searchInput.classList.contains("active")) {
        searchInput.focus();
    }

});