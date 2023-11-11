// const variables
const home = document.querySelector(".home");
const imagesContainer = document.getElementById("imageCardsContainer");
const imageColumns = imagesContainer.querySelectorAll("[class^=column]");
const accessKey = "JOs-7or7_zENkchuJeq0sghhIV6w2miJvot_bRClYRw";
const allQueries = [
  "modeling",
  "luxury modeling brands",
  "cars",
  "pose",
  "super cars",
  "luxury",
  "model",
  "fashion",
  "stylish",
  "perfumes",
  "brand watches",
  "branded bags",
];
// dynamic variables
let searchQuery;
let isSearched = false;
let isPremiumUser = false;
let page = 1;
let perPage;
// media queries in js for spicific columns
const media300 = window.matchMedia("(width >= 300px) and (width < 400px)");
const media400 = window.matchMedia("(width >= 400px) and (width < 580px)");
const media580 = window.matchMedia("(width >= 580px) and (width < 768px)");
const media768 = window.matchMedia("(width >= 768px) and (width < 1440px");
const media1440 = window.matchMedia("(width >= 1440px) and (width <= 2560px");
// window onload event
window.addEventListener("load", () => {
  searchQuery = allQueries[Math.floor(Math.random() * allQueries.length)];
  console.log(searchQuery);
  if (navigator.onLine) {
    fetchImages(searchQuery);
    homeScroll(searchedValue);
  } else {
    setTimeout(() => {
      const loadingSpinner = document.getElementById("loadingSpinner");
      const loadingText = document.getElementById("loadingText");
      loadingSpinner.className = "spinner-offline";
      loadingSpinner.innerHTML = "ERROR_CONNECTION!!";
      loadingText.style.display = "none";
    }, 3600);
  }
});
// reload window on resize
window.onresize = () => {
  if (
    window.innerWidth > 300 ||
    window.innerWidth > 400 ||
    window.innerWidth > 580 ||
    window.innerWidth > 768 ||
    window.innerWidth > 1440
  )
    window.location.reload();
};
// funciton expression to empty the innerHTML
const clearInnerHtml = () => {
  imageColumns.forEach((column) => {
    column.innerHTML = "";
  });
};
// on search actions
function searchedValue() {
  fetchImages(searchQuery);
}
// debounce action on card revealing | debounce using javascript
let onScrollingStop;
function homeScroll(searchedValue) {
  home.onscroll = () => {
    clearInterval(onScrollingStop);
    onScrollingStop = setTimeout(() => {
      page++;
      searchedValue();
    }, 250);
  };
}
// fetching the data from the api
async function fetchImages(query) {
  perPage = isPremiumUser === false ? 10 : 20;
  const url = `https://api.unsplash.com/search/photos/?client_id=${accessKey}&query=${query}&page=${page}&per_page=${perPage}`;
  const response = await fetch(url);
  const data = await response.json();
  bindData(data.results);
}
// binding the data based on the passing parameters
function bindData(images) {
  images.forEach((image, index) => {
    const imageCardTemplate = document.querySelector(".image-card-template");
    const cardClone = imageCardTemplate.content.cloneNode(true);
    fillDataInCard(cardClone, image);
    function handleQueries(thisWidth) {
      if (thisWidth.matches && media300.matches) {
        if ((index + 1) % 5 == 0) imageColumns[0].appendChild(cardClone);
      } else if (thisWidth.matches && media400.matches) {
        if ((index + 2) % 5 == 0) imageColumns[0].appendChild(cardClone);
        else if ((index + 1) % 5 == 0) imageColumns[1].appendChild(cardClone);
      } else if (thisWidth.matches && media580.matches) {
        if ((index + 3) % 5 == 0) imageColumns[0].appendChild(cardClone);
        else if ((index + 2) % 5 == 0) imageColumns[1].appendChild(cardClone);
        else if ((index + 1) % 5 == 0) imageColumns[2].appendChild(cardClone);
      } else if (thisWidth.matches && media768.matches) {
        if ((index + 4) % 5 == 0) imageColumns[0].appendChild(cardClone);
        else if ((index + 3) % 5 == 0) imageColumns[1].appendChild(cardClone);
        else if ((index + 2) % 5 == 0) imageColumns[2].appendChild(cardClone);
        else if ((index + 1) % 5 == 0) imageColumns[3].appendChild(cardClone);
      } else if (thisWidth.matches && media1440.matches) {
        if ((index + 5) % 5 == 0) imageColumns[0].appendChild(cardClone);
        else if ((index + 4) % 5 == 0) imageColumns[1].appendChild(cardClone);
        else if ((index + 3) % 5 == 0) imageColumns[2].appendChild(cardClone);
        else if ((index + 2) % 5 == 0) imageColumns[3].appendChild(cardClone);
        else if ((index + 1) % 5 == 0) imageColumns[4].appendChild(cardClone);
      }
    }
    media1440.addEventListener("change", handleQueries);
    handleQueries(media1440);
    media768.addEventListener("change", handleQueries);
    handleQueries(media768);
    media580.addEventListener("change", handleQueries);
    handleQueries(media580);
    media400.addEventListener("change", handleQueries);
    handleQueries(media400);
    media300.addEventListener("change", handleQueries);
    handleQueries(media300);
  });
}
// filling the data into the template cloneNodes
function fillDataInCard(cardClone, image) {
  const picture = cardClone.querySelector("#picture");
  picture.src = image.urls.thumb;
  // picture.src = image.urls.regular;
  picture.alt = image.alt_description;
  picture.addEventListener(
    "click",
    () => {
      window.open(image.links.download, "_blank");
    },
    false
  );
}
