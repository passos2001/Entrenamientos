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
