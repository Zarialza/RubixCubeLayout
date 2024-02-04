let selectedFace = null;

function setSelectedFace(faceColor) {
  selectedFace = faceColor;
}

function applyColor(cube, color) {
  cube.style.backgroundColor = color;
}

function getRandomColor(colors, colorCount) {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  if (colorCount[randomColor] === undefined || colorCount[randomColor] < 9) {
    colorCount[randomColor] = (colorCount[randomColor] || 0) + 1;
    return randomColor;
  } else {
    const unusedColors = colors.filter((color) => colorCount[color] < 9);
    const newRandomColor =
      unusedColors[Math.floor(Math.random() * unusedColors.length)];
    colorCount[newRandomColor] = (colorCount[newRandomColor] || 0) + 1;
    return newRandomColor;
  }
}

function resetCubeLayout() {
  const cubeFaces = document.querySelectorAll(".cubes");
  cubeFaces.forEach((face) => {
    face.style.backgroundColor = "white";
  });
}

function collectColors() {
  const faceColors = [];
  for (let i = 1; i <= 6; i++) {
    const faceCubes = document.querySelectorAll(`#face${i} .cubes`);
    const faceColor = Array.from(
      faceCubes,
      (cube) => cube.style.backgroundColor
    );
    faceColors.push(faceColor);
  }
  console.log("Face Colors:", faceColors);
}

function randomizeCubeLayout() {
  const colors = ["red", "blue", "green", "yellow", "orange", "grey"];
  const colorCount = {};

  for (let i = 1; i <= 6; i++) {
    const faceCubes = document.querySelectorAll(`#face${i} .cubes`);
    faceCubes.forEach((cube) => {
      const randomColor = getRandomColor(colors, colorCount);
      applyColor(cube, randomColor);
    });
  }
}

// Event listeners
const cubeFaces = document.querySelectorAll(".cubes");

cubeFaces.forEach((face) => {
  face.addEventListener("click", () => {
    if (selectedFace) {
      applyColor(face, selectedFace);
    }
  });
});

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", resetCubeLayout);
