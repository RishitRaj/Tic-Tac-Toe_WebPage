let boxes = document.querySelectorAll(".innerbox");
let turn = "playerX";

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText !== "") return;

    if (turn === "playerX") {
      box.innerText = "X";
      box.style.color = "#FF4C4C";
      turn = "playerO";
    } else {
      box.innerText = "O";
      box.style.color = "#00FF99";
      turn = "playerX";
    }

    checkwin(boxes);
  });
});

function checkwin(boxes) {
  for (let i = 0; i < 7; i += 3) {
    if (
      boxes[i].innerText !== "" &&
      boxes[i].innerText === boxes[i + 1].innerText &&
      boxes[i + 1].innerText === boxes[i + 2].innerText
    ) {
      alert(`Player ${boxes[i].innerText} wins!`);
      return;
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      boxes[i].innerText !== "" &&
      boxes[i].innerText === boxes[i + 3].innerText &&
      boxes[i + 3].innerText === boxes[i + 6].innerText
    ) {
      alert(`Player ${boxes[i].innerText} wins!`);
      return;
    }
  }

  if (
    boxes[0].innerText !== "" &&
    boxes[0].innerText === boxes[4].innerText &&
    boxes[4].innerText === boxes[8].innerText
  ) {
    alert(`Player ${boxes[0].innerText} wins!`);
    return;
  }

  if (
    boxes[2].innerText !== "" &&
    boxes[2].innerText === boxes[4].innerText &&
    boxes[4].innerText === boxes[6].innerText
  ) {
    alert(`Player ${boxes[2].innerText} wins!`);
    return;
  }
}
