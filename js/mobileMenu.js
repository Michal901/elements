const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const navElements = document.querySelectorAll(".nav");
const mobileMenu = documentconst libraryNavSpan = document.querySelector('.plus-minus');
const libraryNavList = document.querySelector('.library-list');
const navLibrary = document.querySelector('.nav-library');
const navBottomLi = document.querySelectorAll('.nav-bottom-li');

const openBtn = document.querySelector('.mobile-nav-open-btn');
const closeBtn = document.querySelector('.mobile-nav-close-btn');
const navElements = document.querySelectorAll('.mobile-nav');
const mobileMenu = document.querySelector('.mobile-menu');

const isVisible = () => {
  const innerWidth = window.innerWidth;
  const scrolled = window.scrollY;

  if (innerWidth < 768 && scrolled >= 216) {
    mobileMenu.style.display = 'flex';
  } else {
    mobileMenu.style.display = 'none';
    navElements.forEach(navEl => navEl.classList.remove('mobile-visible'));
  }
};

const isHidden = () => {
  libraryNavList.classList.toggle('nav-hidden');
  if (libraryNavList.classList.contains('nav-hidden')) {
    libraryNavSpan.innerHTML = '<i class="fa-solid fa-plus"></i>';
    navBottomLi.style.transform = 'translateY(-98px)';
  } else {
    libraryNavSpan.innerHTML = '<i class="fa-solid fa-minus"></i>';
    navBottomLi.style.transform = 'translateY(20px)';
  }
};

window.addEventListener('scroll', isVisible);
window.addEventListener('resize', isVisible);

isVisible();

openBtn.addEventListener('click', () => {
  navElements.forEach(navEl => navEl.classList.add('mobile-visible'));
});

closeBtn.addEventListener('click', () => {
  navElements.forEach(navEl => navEl.classList.remove('mobile-visible'));
});

navLibrary.addEventListener('click', e => {
  e.preventDefault();
  isHidden();
});
.querySelector(".mobile-menu");

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
