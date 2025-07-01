let btns = document.querySelectorAll(".btn");
let winnerIs = document.getElementById("winnerIs");
let turn = true; // true = Human (O), false = Robot (X)
let buttons = Array.from(btns);

let winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turn && btn.innerText === "") {
      btn.innerText = "O";
      btn.disabled = true;
      styleClicked(btn);
      turn = false;
      checkWinner();

      setTimeout(() => {
        if (!turn && !isGameOver() && winnerIs.innerText === "") {
          robotMove();
        }
      }, 500);
    }
    if (buttons.every((btn) => btn.innerText !== "")) {
      NewGame.classList.remove("hidden");
    }
  });
});

function robotMove() {
  let emptyBtns = buttons.filter((b) => b.innerText === "");
  if (emptyBtns.length === 0) return;

  // Simple random move (not smart)
  let choice = emptyBtns[Math.floor(Math.random() * emptyBtns.length)];
  choice.innerText = "X";
  choice.disabled = true;
  styleClicked(choice);
  turn = true;
  checkWinner();
}

function styleClicked(btn) {
  btn.classList.remove("active:scale-95");
  btn.classList.remove("bg-[#ffe5ec]");
  btn.classList.add("bg-[wheat]");
}

function checkWinner() {
  winPattern.forEach((pattern) => {
    let [a, b, c] = pattern;
    let val1 = buttons[a].innerText;
    let val2 = buttons[b].innerText;
    let val3 = buttons[c].innerText;
    if (val1 === val2 && val2 === val3 && val1 !== "") {
      winnerIs.innerText = ${val1 === "O" ? "You" : "Computer"} Won;
      buttons.forEach((btn) => {
        btn.disabled = true;
        styleClicked(btn);
        buttons[a].classList.add("bg-green-600","text-white");
        buttons[b].classList.add("bg-green-600","text-white");
        buttons[c].classList.add("bg-green-600","text-white");
      });
      NewGame.classList.remove("hidden");
    }
  });
}

function isGameOver() {
  return buttons.every((btn) => btn.innerText !== "");
}

let NewGame = document.getElementById("new");
NewGame.addEventListener("click", () => {
  buttons.forEach((btn) => {
    btn.disabled = false;
    btn.innerText = "";
    btn.classList.add("active:scale-95");
    btn.classList.add("bg-[#ffe5ec]");
    btn.classList.remove("bg-[wheat]");
         btn.classList.remove("bg-green-600","text-white");
    
  });
  winnerIs.innerText = "";
  NewGame.classList.add("hidden");
  turn=true;
});