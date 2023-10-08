let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let nav = document.querySelector('.mainNav');
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('menuBack');
    nav.classList.toggle('sticky');
    nav.classList.toggle('navBorder');
    menu.classList.toggle('active');
});