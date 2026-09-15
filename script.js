const navbarToggle = document.querySelector(".navbar-toggle");
const header = document.querySelector("header");

navbarToggle.addEventListener('click', () => {
    header.classList.toggle('active');
});


const elements = document.querySelectorAll(
    ".scroll-reveal, .scroll-left, .scroll-right, .scroll-scale, .scroll-stagger"
);

const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });
    },
);

elements.forEach((element) => {
    observer.observe(element);
});