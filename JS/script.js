function randomNo() {
  return Math.floor(Math.random() * 255);
}
const divContainer = document.getElementById("outter");

divContainer.addEventListener("click", () => {
  divContainer.style.backgroundColor =
    "rgb(" + randomNo() + "," + randomNo() + "," + randomNo() + ")";
});
