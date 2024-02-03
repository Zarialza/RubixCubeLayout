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
