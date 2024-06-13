const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropdownMenu = document.querySelector(".dropdown_menu");
const links = document.querySelectorAll(".link");

toggleBtn.onclick = function () {
  const isOpen = dropdownMenu.classList.toggle("open");
  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

links.forEach((link) => {
  link.addEventListener("click", function () {
    dropdownMenu.classList.remove("open");
    toggleBtnIcon.className = "fa-solid fa-bars";
  });
});

window.addEventListener("scroll", function () {
  var element = document.querySelector("header");
  var scrollPosition = window.scrollY;
  const navbar = this.document.getElementById("navbar");
  if (scrollPosition > 200) {
    element.style.backgroundColor = "#a83c32";
    element.style.transition = "1s";
  } else {
    element.style.backgroundColor = "";
  }
});
