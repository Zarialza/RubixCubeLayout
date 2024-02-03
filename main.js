let selectedFace = null;

function setSelectedFace(faceColor) {
  selectedFace = faceColor;
}

const cubeFaces = document.querySelectorAll(".cubes");

cubeFaces.forEach((face) => {
  face.addEventListener("click", () => {
    if (selectedFace) {
      face.style.backgroundColor = selectedFace;
    }
  });
});

//now create a reset button to reset the cube layout

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => {
  cubeFaces.forEach((face) => {
    face.style.backgroundColor = "white";
  });
});

const face1Color = [];
const face2Color = [];
const face3Color = [];
const face4Color = [];
const face5Color = [];
const face6Color = [];

function collectColors() {
  face1Color.length = 0; // Clear the array before collecting new colors
  face2Color.length = 0;
  face3Color.length = 0;
  face4Color.length = 0;
  face5Color.length = 0;
  face6Color.length = 0;

  const face1Cubes = document.querySelectorAll("#face1 .cubes");
  const face2Cubes = document.querySelectorAll("#face2 .cubes");
  const face3Cubes = document.querySelectorAll("#face3 .cubes");
  const face4Cubes = document.querySelectorAll("#face4 .cubes");
  const face5Cubes = document.querySelectorAll("#face5 .cubes");
  const face6Cubes = document.querySelectorAll("#face6 .cubes");

  face1Cubes.forEach((cube) => {
    face1Color.push(cube.style.backgroundColor);
  });

  face2Cubes.forEach((cube) => {
    face2Color.push(cube.style.backgroundColor);
  });

  face3Cubes.forEach((cube) => {
    face3Color.push(cube.style.backgroundColor);
  });

  face4Cubes.forEach((cube) => {
    face4Color.push(cube.style.backgroundColor);
  });

  face5Cubes.forEach((cube) => {
    face5Color.push(cube.style.backgroundColor);
  });

  face6Cubes.forEach((cube) => {
    face6Color.push(cube.style.backgroundColor);
  });

  console.log("Face 1 Colors:", face1Color);
  console.log("Face 2 Colors:", face2Color);
  console.log("Face 3 Colors:", face3Color);
  console.log("Face 4 Colors:", face4Color);
  console.log("Face 5 Colors:", face5Color);
  console.log("Face 6 Colors:", face6Color);
}
