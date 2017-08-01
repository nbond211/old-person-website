document.addEventListener("DOMContentLoaded", function() {
  var nickBond = document.getElementById("nick-bond");
  var titleBackground = document.getElementById("title-background");

  var nickBondMargin = titleBackground.clientWidth / 2;
  var titleBackgroundMargin = nickBond.clientWidth / 2;

  nickBond.style.marginRight = "-" + titleBackgroundMargin + "px";
  titleBackground.style.marginLeft = "-" + nickBondMargin + "px";
});
