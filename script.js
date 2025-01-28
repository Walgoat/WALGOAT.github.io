document.addEventListener("DOMContentLoaded", () => {
    const frBtn = document.getElementById("fr-btn");
    const enBtn = document.getElementById("en-btn");
    const frElements = document.querySelectorAll(".lang-fr");
    const enElements = document.querySelectorAll(".lang-en");

    // Fonction pour afficher le français
    const showFrench = () => {
        frElements.forEach(el => el.style.display = "block");
        enElements.forEach(el => el.style.display = "none");
    };

    // Fonction pour afficher l'anglais
    const showEnglish = () => {
        frElements.forEach(el => el.style.display = "none");
        enElements.forEach(el => el.style.display = "block");
    };

    // Ajout des événements sur les boutons
    frBtn.addEventListener("click", showFrench);
    enBtn.addEventListener("click", showEnglish);
});