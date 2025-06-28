let result = document.getElementById("result");
let oprators = document.querySelectorAll(".op");
let digit = document.querySelectorAll(".digit");
let Button = document.querySelectorAll(".btn");
let decimal = document.getElementById("decimal");


//disabling each oprator initially
let op = Array.from(oprators);
op.forEach((opr) => {
  opr.disabled = true;
});
decimal.disabled=false;

let btns = Array.from(Button);
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (result.innerText == "0") {
      op.forEach((opr) => {
        opr.disabled = true;
      });
      decimal.disabled=false;
      result.innerText = "";
    }
    if (["%", "/", "*", "-", "+"].includes(e.target.innerText)) {
      result.innerText = result.innerHTML + e.target.innerText;
      op.forEach((opr) => {
        opr.disabled = true;
      });
      decimal.disabled=false;
    } else if (e.target.innerText == "AC") {
      result.innerText = "0";
      op.forEach((opr) => {
        opr.disabled = true;
      });
      decimal.disabled=false;
    } else if (e.target.innerText == "DEL") {
      result.innerText = result.innerText.slice(0, -1);
      if (result.innerText == "") {
        result.innerText = "0";
      }
    } else {
      result.innerText = result.innerHTML + e.target.innerText;
      op.forEach((opr) => {
        opr.disabled = false;
      });
      
    }
  });
});

let Equal = document.getElementById("equal");

Equal.addEventListener("click", () => {
  if (["%", "/", "*", "-", "+", "."].includes(result.innerText.slice(-1))) {
    result.innerText = result.innerText.slice(0, -1);
  }
  result.innerText = eval(result.innerText);
});
