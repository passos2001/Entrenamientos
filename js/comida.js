// comida.js

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.classList.remove("active");
        if (link.href.includes("comidas.html")) {
            link.classList.add("active");
        }
    });
});
