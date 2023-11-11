
// MORE ACTIONS

// More Actions List Items
let moreActions = document.getElementById("moreActions");
let moreActionsList = document.getElementById("moreActionsList");
moreActions.addEventListener("click", () => {
  moreActionsList.style.display = "block";
  moreActionsList.style.right = "0";
  moreActionsList.style.transition = "all 300ms ease";
});
// Close More Actions List
let closeListIcon = document.getElementById("closeListIcon");
closeListIcon.addEventListener("click", () => {
  moreActionsList.style.display = "none";
  moreActionsList.style.right = "-100%";
  moreActionsList.style.transition = "all 300ms ease";
});

// let moreBtn = document.getElementById("moreActions");
// moreBtn.addEventListener("click", () => {
//   moreItemsList.style.display = true;
// });

let collabs = document.querySelector(".collabrations");
for (let i = 0; i < 20; i++) {
  let brand = document.createElement("div");
  brand.className = "brand";
  collabs.appendChild(brand);
}

// MY PROFILE TABS
let postTab = document.querySelectorAll(
  ".post-and-shop-tabs .tab-names > li a"
);
let postSection = document.querySelectorAll(".post-tabs > section");
for (let i = 0; i < postTab.length; i++) {
  postTab[0].style.color = "var(--white-color)";
  postTab[0].style.borderBottom = "1px solid var(--white-color)";
  postSection[1].style.display = "none";
  postTab[i].addEventListener("click", () => {
    for (let j = 0; j < postSection.length; j++) {
      postTab[j].style.color = "var(--gray-color)";
      postTab[j].style.borderBottom = "1px solid transparent";
      postSection[j].style.display = "none";
      const p = postTab[i];
      p.style.color = "var(--white-color)";
      p.style.borderBottom = "1px solid var(--white-color)";
      postSection[i].style.display = "grid";
    }
  });
}

// POST CONTAINER
let postContainer = document.getElementById("myPosts");
for (let i = 1; i <= 30; i++) {
  let posts = document.createElement("div");
  posts.className = "post-item";
  posts.innerHTML = `post item-${i}`;
  postContainer.appendChild(posts);
}

// SHOP POST CONTAINER
let shopContainer = document.getElementById("myShop");
for (let i = 1; i <= 130; i++) {
  let shopItem = document.createElement("div");
  shopItem.className = "shop-item";
  shopItem.innerHTML = `shop item-${i}`;
  shopContainer.appendChild(shopItem);
}

// MY PROFILE TABS CLOSED

//
