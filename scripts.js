
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// Get all icons by class name
const icons = document.querySelectorAll('.icon');
const h1 = document.getElementById('h1')
const p = document.getElementById('p')

document.getElementById('html').addEventListener('click', function () {
    h1.innerText="HTML"
})
document.getElementById('css').addEventListener('click', function () {
    h1.innerText="CSS"
})
document.getElementById('tw').addEventListener('click', function () {
    h1.innerText="Tailwind"
})
document.getElementById('js').addEventListener('click', function () {
    h1.innerText="JavaScript"
})
document.getElementById('html').addEventListener('click', function () {
    h1.innerText="HTML"
})
document.getElementById('html').addEventListener('click', function () {
    h1.innerText="HTML"
})
document.getElementById('html').addEventListener('click', function () {
    h1.innerText="HTML"
})
document.getElementById('html').addEventListener('click', function () {
    h1.innerText="HTML"
})
document.getElementById('html').addEventListener('click', function () {
    h1.innerText="HTML"
})
document.getElementById('html').addEventListener('click', function () {
    h1.innerText="HTML"
})