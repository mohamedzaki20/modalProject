"use strict";

const showModel = document.querySelectorAll(".show-model");
const closeModel = document.querySelector(".close-model");
//const hidden = document.querySelectorAll(".hidden");
const model = document.querySelector(".model");
const overlay = document.querySelector(".overlay");

// function to show model
const show = function () {
  model.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// function to hide model
const hideModel = function () {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < showModel.length; i++) {
  showModel[i].addEventListener("click", show);
}

closeModel.addEventListener("click", hideModel);
overlay.addEventListener("click", hideModel);

document.addEventListener("keydown", (event) => {
  if (event.key == "Escape") {
    hideModel();
    console.log(event);
  }
});
