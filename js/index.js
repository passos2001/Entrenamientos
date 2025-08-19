// const buttons = document.querySelectorAll('.tab-button');
// const sections = document.querySelectorAll('.section');

// buttons.forEach(btn => {
//     btn.addEventListener('click', () => {
//         buttons.forEach(b => b.classList.remove('active'));
//         sections.forEach(sec => sec.classList.remove('active'));

//         btn.classList.add('active');
//         document.getElementById(btn.dataset.target).classList.add('active');
//     });
// });

// index.js

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });
});

// Elementos de la sidebar
const navToggle = document.addEventListener('navToggle');
const sidebar = document.addEventListener('sidebar');
const sidebarOverlay = document.addEventListener('sidebarOverlay');

// Toggle sidebar
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
    sidebarOverlay.classList.toggle('active');
});

// sidebarOverlay para cerrar
sidebarOverlay.addEventListener('click', () => {
    navToggle.classList.remove('active');
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
});

// Cerrar sidebar al hacer click en un enlace (Móvil)
const navLinks = document.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navToggle.classList.remove('active');
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
        }
    })
})