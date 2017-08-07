function positionTitle() {
  if (window.innerWidth > 600) {
    var nickBond = document.getElementById("nick-bond");
    var titleBackground = document.getElementById("title-background");

    var nickBondMargin = titleBackground.clientWidth / 2;
    var titleBackgroundMargin = nickBond.clientWidth / 2;

    nickBond.style.marginRight = "-" + titleBackgroundMargin + "px";
    titleBackground.style.marginLeft = "-" + nickBondMargin + "px";
  } else {
    var nickBond = document.getElementById("nick-bond");
    nickBond.style.marginRight = "0";
  }
}

window.addEventListener("resize", positionTitle);
document.addEventListener("DOMContentLoaded", positionTitle);
