const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const navElements = document.querySelectorAll(".nav");
const mobileMenu = document.querySelector(".mobile-menu");

const isVisible = () => {
  const innerWidth = window.innerWidth;
  if (innerWidth > 768) {
    mobileMenu.style.display = "none";
    navElements.forEach((navEl) => navEl.classList.remove("visible"));
  } else {
    mobileMenu.style.display = "flex";
  }
};
isVisible();

openBtn.addEventListener("click", () => {
  navElements.forEach((navEl) => navEl.classList.add("visible"));
});

closeBtn.addEventListener("click", () => {
  navElements.forEach((navEl) => navEl.classList.remove("visible"));
});
window.addEventListener("resize", isVisible);
