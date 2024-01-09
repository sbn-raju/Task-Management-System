const { default: axios } = require("axios");

let buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Find the parent element of the clicked button
    let task = btn.closest(".tasks");
    if (task) {
      let title = task.querySelector(".head-title");
      if (title) {
        title.style.textDecoration = "line-through";
      }
    }
  });
});

