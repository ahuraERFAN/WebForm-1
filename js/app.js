// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");

// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});

// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
/* easy say of this js programm is that if you press the navbar the showNav appear in the code while the 
showNav works like a show menu and pressing it again delete the showNav and hide the menu. */