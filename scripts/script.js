let hamburger = document.querySelector(".hamburger-menu");
let menuContainer = document.querySelector(".nav-mobile-container")
let closeHamburgerMenu = document.querySelector(".close-hamburger-menu")

hamburger.addEventListener('click', () =>{
    menuContainer.style.display = "block"
    closeHamburgerMenu.style.display = "block"
})

closeHamburgerMenu.addEventListener('click', () =>{
    menuContainer.style.display = "none"
    closeHamburgerMenu.style.display = "none"
})