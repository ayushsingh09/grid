const open = document.getElementById("open");
const close = document.getElementById("close");

const sidebar = document.querySelector(".child-1");

open.addEventListener("click", () => {
  sidebar.style.transform = "translateX(0)";
  sidebar.style.visibility = "visible";
});

close.addEventListener("click", () => {
  sidebar.style.transform = "translateX(-100%)";
  sidebar.style.visibility = "visible";
});

function checkMediaQuery() {
  if (window.innerWidth > 700) {
    sidebar.style.transform = "translateX(0)";
    sidebar.style.visibility = "visible";
  }
  if (window.innerWidth <= 700) {
    sidebar.style.transform = "translateX(-100%)";
    sidebar.style.visibility = "hidden";
  }
}

window.addEventListener("resize", checkMediaQuery);
