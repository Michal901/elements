const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const navElements = document.querySelectorAll(".nav");

openBtn.addEventListener("click", () => {
  navElements.forEach((navEl) => navEl.classList.add("visible"));
});

closeBtn.addEventListener("click", () => {
  navElements.forEach((navEl) => navEl.classList.remove("visible"));
});
