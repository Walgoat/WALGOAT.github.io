// Animation d'apparition des éléments
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".hero h2, .hero p, .hero .btn");
    elements.forEach((el, index) => {
        el.style.opacity = 0;
        el.style.transform = "translateY(50px)";
        setTimeout(() => {
            el.style.transition = "all 0.6s ease";
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }, index * 200);
    });
});
