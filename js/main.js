// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);



function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}

const info = document.querySelector(".info-box");
const studies = document.querySelectorAll(".studies");

// const text1 = document.querySelector(".text1");

studies.forEach((item) => item.addEventListener("click", displayInfo));


let showInfo = false;

function displayInfo() {
  if(!showInfo) {
    info.classList.add("showInfo");
    showInfo = true;
  } else {
    info.classList.remove("showInfo");
    showInfo = false;
  }

//  text1.innerHTML = "whatever";
//  text1.classList.add("showInfo");
}





