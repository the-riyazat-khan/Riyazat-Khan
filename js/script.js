const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 130);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.menulist');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};

var typed = new Typed(".input",{
    strings: ["Web Designer...", "Web Developer...", "Graphic Designer..."],
    typeSpeed: 120,
    backSpeed: 70,
    loop: true
})