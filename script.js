let container = document.createElement("div");

container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "800px";
container.style.height = "800px";
container.style.background = "linear-gradient(135deg, blue, green)";

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    let tile = document.createElement("div");

    tile.style.width = "12.5%";
    tile.style.height = "12.5%";
    if ((i+j) % 2 === 0) {
        tile.style.background = "rgba(0, 0, 255," + (.02 * i) + ")";
    } else {
        tile.style.background = "rgba(0, 102, 0," + (.02 * i) + ")";
    }
    container.appendChild(tile);
  }
}
document.body.append(container);
