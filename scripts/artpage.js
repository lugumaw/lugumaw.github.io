let popcov = document.getElementById("popcov");
var active_popup = null;

// Utilities
function getNumChildren(parentElement) {
  let num_children = 0;
  const children = parentElement.children;
  const childrenArray = Array.from(children);
  return childrenArray.length;
  return totalHeight;
}

// Popups
function openpopup(ele) {
  active_popup = ele.cloneNode(true);

  active_popup.classList.add("modal");
  active_popup.classList.remove("popup");

  document.body.style.overflowY = "hidden";
  popcov.classList.add("pop");

  popcov.appendChild(active_popup);

  // console.log(active_popup);
  // console.log(active_popup.offsetHeight);
  // console.log(getNumChildren(active_popup));
  if (getNumChildren(active_popup) - 2 >= 2) {
    active_popup.style.justifyContent = "start";
    console.log(active_popup.children[0].innerHeight);
    active_popup.style.setProperty("padding-top", "15vh");
    active_popup.style.setProperty("padding-bottom", "15vh");
  }
}

function closepopup() {
  active_popup.parentNode.removeChild(active_popup);
  popcov.classList.remove("pop");
  document.body.style.overflowY = "auto";
  active_popup = null;
}

// add event listener for click on displays
Array.from(document.getElementsByClassName("art-display popup")).forEach(
  function (ele) {
    ele.addEventListener("click", (event) => {
      openpopup(event.target);
    });
  }
);

// handle scroll events on popups
popcov.addEventListener(
  "wheel",
  (event) => {
    var deltaY = event.deltaY;
    active_popup.scrollBy(0, Math.sign(deltaY) * 10);
  },
  { passive: true }
);

// General
// Adjust height for mobile
const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", documentHeight);
documentHeight();
