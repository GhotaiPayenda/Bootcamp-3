const navbarToggle = document.querySelector(".navbar-toggle");
const header = document.querySelector("header");

const star = document.querySelector(".star");


navbarToggle.addEventListener('click', () => {
    header.classList.toggle('active');
});


