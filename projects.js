const links = [
  "https://s1dgmh.mimo.run/miniCalander.html",
  "https://s1dgmh.mimo.run/calculatorAdv.html",
  "https://hprh1m.mimo.run/ICICI.html",
  "https://hprh1m.mimo.run/Blog.html",
  "https://hprh1m.mimo.run/Friend.html",
  "https://705ydi.mimo.run/Guess.html",
  "https://705ydi.mimo.run/idCard.html",
  "https://705ydi.mimo.run/toDo.html",
  "https://714i07.mimo.run/Sage.html",
  "https://714i07.mimo.run/TimeTable.html",
  "https://hprh1m.mimo.run/gredient.html"
];

document.querySelectorAll(".project").forEach((project, index) => {
  project.addEventListener("click", () => {
    window.open(links[index], "_blank");
  });
});
