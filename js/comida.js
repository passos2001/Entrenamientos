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

const navToggle = document.getElementById('navToggle');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
    sidebarOverlay.classList.toggle('active');
}); 

sidebarOverlay.addEventListener('click', () => {
    navToggle.classList.remove('active');
    sidebar.classList.remove('active'); 
    sidebarOverlay.classList.remove('active');
}); 

const navLinks = document.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if(window.innerWidth <= 768){
            navToggle.classList.remove('active')
        }
    })
});