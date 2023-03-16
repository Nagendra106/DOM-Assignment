// 1 changing logo 
let a = document.querySelector(".logo");
a.src="./assets/ineuron-logo.png";

// 2 changing Premium price
const cost = document.querySelector(".app_price span");
cost.textContent = "$10";

// 3 adding Linkedin icon in footer
const linkedin = document.querySelector(".footer_social");

// creating new div
let newdiv = document.createElement("div");
newdiv.classList.add("footer_social_ico");
newdiv.innerHTML = `<i class="fa-brands fa-linkedin"></i>`;
// appending
linkedin.appendChild(newdiv);