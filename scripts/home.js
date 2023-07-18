// home

// function opendrop() {
//   document.getElementById("nav-drop-btn").classList.toggle("active");
//   document.getElementById("nav-dropdown").classList.toggle("active");
// }

var curr_ori = "landscape";
let menubutton = document.getElementById("navburgmenu");
let navigator = document.getElementById("navigator");

menubutton.addEventListener("click", (event) => {
  menubutton.classList.toggle("active");
  navigator.classList.toggle("active");
  if (navigator.classList.contains("active")) {
    navigator.style.setProperty("--left-offset", "0");
  } else {
    setTimeout(() => {
      navigator.style.setProperty("--left-offset", "calc(100vw - 200px)");
    }, 510);
  }
});

window.addEventListener("resize", (event) => {
  if (window.innerWidth > window.innerHeight) {
    // landscape
    if (curr_ori == "portrait") {
      console.log("landscape");
      curr_ori = "landscape";
      menubutton.classList.remove("active");
      navigator.classList.remove("active");
      navigator.style.setProperty("--left-offset", "calc(100vw - 200px)");
    }
  } else if (window.innerWidth < window.innerHeight) {
    if (curr_ori == "landscape") {
      console.log("portrait");
      curr_ori = "portrait";
    }
  }
});

// Adjust height for mobile
const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", documentHeight);
documentHeight();
