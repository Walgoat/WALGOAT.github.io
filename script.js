document.addEventListener("DOMContentLoaded", () => {
    // Mode jour/nuit
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    themeToggle.addEventListener("click", () => {
        body.dataset.theme = body.dataset.theme === "dark" ? "light" : "dark";
        themeToggle.textContent = body.dataset.theme === "dark" ? "🌞" : "🌙";
    });

    // Gestion des langues
    const langFr = document.getElementById("lang-fr");
    const langEn = document.getElementById("lang-en");
    const frElements = document.querySelectorAll(".lang-fr");
    const enElements = document.querySelectorAll(".lang-en");

    langFr.addEventListener("click", () => {
        frElements.forEach(el => el.style.display = "block");
        enElements.forEach(el => el.style.display = "none");
    });

    langEn.addEventListener("click", () => {
        frElements.forEach(el => el.style.display = "none");
        enElements.forEach(el => el.style.display = "block");
    });

    // Formulaire de contact
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Merci pour votre message ! Je vous répondrai dès que possible.");
        contactForm.reset();
    });
});