const parentButtons = document.querySelector(".buttons");
const buttonsItem = document.querySelectorAll(".button__item");
const projects = document.querySelectorAll(".my_projectsMo");
console.dir(projects);

function hideProjects() {
  projects.forEach((item) => {
    item.style.display = "none";
  });
  buttonsItem.forEach((item) => {
    item.classList.remove("active");
  });
}
function showProjects(i = 0) {
  projects[i].style.display = "flex";
  buttonsItem[i].classList.add("active");
}
parentButtons.addEventListener("click", (event) => {
  const target = event.target.id;
  console.log(target);
  projects.forEach((item, i) => {
    if (target == item.id) {
      hideProjects();
      showProjects(i);
    }
  });
});

hideProjects();
showProjects();
