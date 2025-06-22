const input = document.getElementById("password");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  if (input.type == "text") {
    input.type = "password";
    btn.innerHTML = `<img class="h-[24px] w-[24px]" src="https://img.icons8.com/?size=100&id=85137&format=png&color=000000">`;
  } else {
    input.type = "text";
    btn.innerHTML = `<img class="h-[24px] w-[24px]" src="https://img.icons8.com/?size=100&id=60022&format=png&color=000000">`;
  }
});
