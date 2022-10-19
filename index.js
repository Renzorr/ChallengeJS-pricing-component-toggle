const topitem = document.querySelector(".top");
const cardContainer = document.querySelector(".cards-container");
const toggle = document.querySelector("#toggle");
const annual = document.querySelectorAll(".ann");
const month = document.querySelectorAll(".mon");

setTimeout(() => {
  topitem.classList.add("appear");
  cardContainer.classList.add("appear");
}, 1000);

toggle.addEventListener("change", () => {
  month.forEach((element) => {
    element.classList.toggle("hide");
  });
  annual.forEach((element) => {
    element.classList.toggle("hide");
  });
});
