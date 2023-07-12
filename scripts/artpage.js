let popcov = document.getElementById("popcov");
event_lis = popcov.addEventListener("wheel", (event) => {
  var deltaY = event.deltaY;
  active_popup.scrollBy(0, Math.sign(deltaY) * 50);
});
var active_ele = null;
var active_popup = null;
var event_lis = null;

function openpopup(ele) {
  active_ele = ele;
  active_popup = ele.cloneNode(true);
  active_popup.classList.add("modal");
  active_popup.classList.remove("popup");

  document.body.style.overflowY = "hidden";
  popcov.classList.add("pop");

  active_ele.insertAdjacentElement("afterend", active_popup);
}

function closepopup() {
  active_popup.parentNode.removeChild(active_popup);
  popcov.classList.remove("pop");
  document.body.style.overflowY = "auto";
  active_ele = null;
  active_popup = null;
}

Array.from(document.getElementsByClassName("art-display popup")).forEach(
  function (div) {
    div.addEventListener("click", (event) => {
      openpopup(event.target);
    });
  }
);