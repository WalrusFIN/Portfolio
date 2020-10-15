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


const texts = document.querySelectorAll(".text"); 

function hideAll() { 
  texts.forEach((item) => item.classList.add("hideText"));
}

document.getElementById("study1").addEventListener("click", function() {
  hideAll();
  document.getElementById("text1").classList.remove("hideText");
});

document.getElementById("study2").addEventListener("click", function() {
  hideAll();
  document.getElementById("text2").classList.remove("hideText");
});

document.getElementById("study3").addEventListener("click", function() {
  hideAll();
  document.getElementById("text3").classList.remove("hideText");
});

document.getElementById("study4").addEventListener("click", function() {
  hideAll();
  document.getElementById("text4").classList.remove("hideText");
});


/*document.getElementById("study1").addEventListener("click", displayText("text1"));
document.getElementById("study2").addEventListener("click", displayText("text2"));
document.getElementById("study3").addEventListener("click", displayText("text3"));
document.getElementById("study4").addEventListener("click", displayText("text4"));

function displayText(name) {
  hideAll();
  document.getElementById(name).classList.remove("hideText");
}*/ 
















