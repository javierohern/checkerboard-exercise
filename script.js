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
    if ((i + j) % 2 === 0) {
      tile.style.backgroundColor = "black";
    } else {
      tile.style.backgroundColor = "red";
    }
    container.appendChild(tile);
  }
}
document.body.append(container);
