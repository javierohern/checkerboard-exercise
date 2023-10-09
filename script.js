let container = document.createElement("div");

container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "800px";
container.style.height = "800px";

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    let tile = document.createElement("div");

    tile.style.width = "12.5%";
    tile.style.height = "12.5%";
    tile.style.backgroundColor = getRandomColor();
    container.appendChild(tile);
  }
}
document.body.append(container);

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${b}, ${g})`;
}
