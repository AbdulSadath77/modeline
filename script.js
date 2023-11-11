let body = document.getElementsByTagName("body");
let menuicon = document.getElementById("menuicon");
let cloesicon = document.getElementById("closeicon");
let navbar_ul = document.getElementById("navbar-ul");
//  INDEX
let loginBtn = document.getElementById("btn-login");
let createBtn = document.getElementById("btn-signup");
let mainCtaBtn = document.getElementById("btn-signup-cta");
let ctaBtn = document.getElementById("ctaBtn");
loginBtn.addEventListener("click", () => {
  window.location.href = "login.html";
});
createBtn.addEventListener("click", signUpPage);
mainCtaBtn.addEventListener("click", signUpPage);
ctaBtn.addEventListener("click", signUpPage);
function signUpPage() {
  window.location.href = "./signUp.html";
}
// SPLASH SCREEN

// NAVBAR MANU OPEN ICON
menuicon.addEventListener("click", () => {
  navbar_ul.style.top = "0";
  navbar_ul.style.transition = "all 550ms ease";
});
// NAVBAR CLOSE ICON
cloesicon.addEventListener("click", () => {
  navbar_ul.style.top = "-100%";
});
// NAVBAR CLOSING ON LIST-ITEM CLICK
let clo = document.querySelectorAll("li");
for (let i = 0; i < clo.length; i++) {
  clo[i].addEventListener("click", () => {
    navbar_ul.style.top = "-100%";
  });
}

// NAVBAR MOUSEOVER AND MOUSEOUT
// let font_color = "var(--font-color)";
// let gray_color = "var(--gray-color)";
// let secondary_color = "var(--secondary-color)";
// let transparent_color = "transparent";
// let zoom_in = "var(--transform-zoom-in)";
// let zoom_out = "var(--transform-zoom-out)";
// let border_all = `2px solid ${secondary_color}`;
// let border_top = border_all;
// let border_bottom = border_all;

// // HOME PAGE NAVBAR &  NAV PAGES TABS
// let homePageNav = document.querySelectorAll(".homepage-navbar-ul > li a");
// let page_section = document.querySelectorAll(".tabs-container > section");
// for (let i = 0; i < homePageNav.length; i++) {
//   homePageNav[0].style.color = secondary_color;
//   homePageNav[0].style.borderBottom = border_bottom;
//   for (let j = 0; j < homePageNav.length; j++) {
//     page_section[j].style.display = "none";
//     page_section[0].style.display = "grid";
//     homePageNav[i].addEventListener("click", () => {
//       homePageNav[j].style.color = font_color;
//       homePageNav[j].style.borderBottom = `1px solid ${gray_color}`;
//       page_section[j].style.display = "none";
//       const pageBtnClickedSection = page_section[i];
//       pageBtnClickedSection.style.display = "grid";
//       const selectedBtn = homePageNav[i];
//       selectedBtn.style.color = secondary_color;
//       selectedBtn.style.borderBottom = border_bottom;
//     });
//   }
// }

// === HOME EVENTS TABS ===


// // SHOP FILTER AND PRODUCT ITMES
// let productCategories = document.getElementById("productCategories");
// let category = document.querySelectorAll(".filters select > option");


// let productTitle = ["first", "second", "three", "four"];
// // PRODUCT ITEMS CONTAINER
// let productItems = document.getElementById("productItems");
// for (let i = 0; i < productLinks.length; i++) {
//   let item = document.createElement("div");
//   item.className = "item";
//   function product_title() {
//     item.title = productTitle[i];
//   }

//   item.addEventListener("mouseover", product_title);
//   let productTitleCard = document.createElement("small");
//   productTitleCard.className = "product-title-card";
//   productTitleCard.innerHTML = `${productTitle[i]}`;
//   item.appendChild(productTitleCard);
//   item.innerHTML += `${productLinks[i]}`;
//   productItems.appendChild(item);
// }
