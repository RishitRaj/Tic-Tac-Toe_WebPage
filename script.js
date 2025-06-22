let boxes = document.querySelectorAll(".innerbox");
let turn = "playerX";
let winnerbox = document.querySelector("#winner");
let popup = document.querySelector(".popup");
let win = false;
let yes = document.querySelector("#yes");
let no = document.querySelector("#no");
function gameon() {
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (box.innerText !== "") return;

      if (turn === "playerX") {
        box.innerText = "X";
        box.style.color = "#FF4C4C";
        turn = "playerO";
        checkwin(boxes);
        if (win === true) {
          winnerbox.innerText = "Player X wins!";
          popup.style.visibility = "visible";
          return;
        }
        checktie();
      } else {
        box.innerText = "O";
        box.style.color = "#00FF99";
        turn = "playerX";
        checkwin(boxes);
        if (win === true) {
          winnerbox.innerText = "Player O wins!";
          popup.style.visibility = "visible";
          return;
        }
        checktie();
      }
    });
  });
}
function checktie() {
  let filled = [...boxes].every(box => box.innerText !== "");
  if (filled && win === false) {
    winnerbox.innerText = "It's a tie!";
    popup.style.visibility = "visible";
  }
}
function popups() {
    yes.addEventListener("click", () => {
    popup.style.visibility = "hidden";
    boxes.forEach(box => {box.innerText=""
      });
    win=false;
    winnerbox.innerText="";
    turn="playerX";


  })
  no.addEventListener("click", () => {
    winnerbox.innerText += "- Thanks for Playing!";
     popup.style.visibility = "hidden";
  })
}




function checkwin(boxes) {
  for (let i = 0; i < 7; i += 3) {
    if (
      boxes[i].innerText !== "" &&
      boxes[i].innerText === boxes[i + 1].innerText &&
      boxes[i + 1].innerText === boxes[i + 2].innerText
    ) {
      win = true;
      return;
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      boxes[i].innerText !== "" &&
      boxes[i].innerText === boxes[i + 3].innerText &&
      boxes[i + 3].innerText === boxes[i + 6].innerText
    ) {
      win = true;
      return;
    }
  }

  if (
    boxes[0].innerText !== "" &&
    boxes[0].innerText === boxes[4].innerText &&
    boxes[4].innerText === boxes[8].innerText
  ) {
    win = true;
    return;
  }

  if (
    boxes[2].innerText !== "" &&
    boxes[2].innerText === boxes[4].innerText &&
    boxes[4].innerText === boxes[6].innerText
  ) {
    win = true;
    return;
  }
}
gameon();
popups();




