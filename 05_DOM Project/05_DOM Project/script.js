// 1 - add 'Pro Subscription Button in navbar
const target = document.querySelector(".nav-center div:last-child");
// creating new button
let newBtn = document.createElement("a");
newBtn.textContent = "Pro Subscription";
newBtn.classList.add("btn");
// appending new btn
target.appendChild(newBtn);

// 2 - add 'Chinese' tag to recipes list
const menuList = document.querySelector(".tags-container div");
// creating new tag
let b = document.createElement("a");
b.textContent = "Chinese (7)";
// appending
menuList.appendChild(b);

// 3 - adding 6th card in recipe gallery
const recipeGallery = document.querySelector(".recipe-gallery");
// // creating new card
 let newCard = document.createElement("div");
 newCard.classList.add("card");
 newCard.textContent = "6th card";
//appending
recipeGallery.appendChild(newCard);