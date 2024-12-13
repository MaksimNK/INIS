const shirtInfo = JSON.parse(localStorage.getItem("shirtInfo"));
const root = document.getElementById("root");

const updateShirtImage = () => {
  document
    .querySelector(".photo")
    .setAttribute(
      "src",
      `../Lab-1/${shirtInfo.colors[pickedColor][pickedSide]}`
    );
};

let pickedColor = "white";
let pickedSide = "front";

const html = `
  <div class="container">
    <div class="header">
      <h1>${shirtInfo.name}</h1>
    </div>
    <div class="info-block">
      <div class="info-photo">
        <img src="../Lab-1/${shirtInfo.colors.white.front}" class="photo" alt="${shirtInfo.name}">
      </div>
      <div class="info-text">
        <span class="price">$${shirtInfo.price}</span>
        <p class="description">${shirtInfo.description}</p>
        <div class="mega-buttons-cont">
          <div class="buttons-cont">
            <span class="mini-info">Side:</span>
            <button class="btn" id="front">Front</button>
            <button class="btn" id="back">Back</button>
          </div>
          <div class="buttons-cont" id="color-cont">
            <span class="mini-info">Color:</span>
          </div>
        </div>
      </div>
    </div>
  </div>`;
root.innerHTML = html;

const buttonsContainer = document.querySelector("#color-cont");
Object.keys(shirtInfo.colors).forEach((color) => {
  const colorButton = document.createElement("button");
  colorButton.classList.add("btn");
  colorButton.id = color;
  colorButton.style.backgroundColor = color;
  colorButton.textContent = color;
  buttonsContainer.appendChild(colorButton);
});

buttonsContainer.addEventListener("click", (event) => {
  const selectedButton = event.target;
  if (selectedButton.classList.contains("btn")) {
    pickedColor = selectedButton.id;
    updateShirtImage();
  }
});

document.querySelector("#front").addEventListener("click", () => {
  pickedSide = "front";
  updateShirtImage();
});

document.querySelector("#back").addEventListener("click", () => {
  pickedSide = "back";
  updateShirtImage();
});
