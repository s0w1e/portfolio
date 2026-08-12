const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const currentYear = document.querySelector("#current-year");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("is-open");

    const isOpen = navLinks.classList.contains("is-open");
    menuToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

currentYear.textContent = new Date().getFullYear();
