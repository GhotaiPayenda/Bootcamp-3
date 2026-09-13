const navbarToggle = document.querySelector(".navbar-toggle");
const header = document.querySelector("header");

navbarToggle.addEventListener('click', () => {
    header.classList.toggle('active');
});