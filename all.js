var proMenu = document.getElementById("product-nav");
var solMenu = document.getElementById("sol-nav");
var proMenuShow = true;
var pro = document.getElementById("product");
var sol = document.getElementById("sol");
var ent = document.getElementById("ent");
function showMenu(event) {
  solMenu.style.display = "none";
  sol.style.color = "rgb(65, 64, 64)";
  var oldI = sol.querySelector("i");
  oldI.style.transform = "";
  oldI.style.transition = ".2s";
  var i = event.target.querySelector("i");
  i.style.transform = "rotate(0.5turn)";
  i.style.transition = ".2s";
  event.target.style.color = "blue";
  proMenu.style.display = "flex";
}
function hideMenu(event) {
  var i = pro.querySelector("i");
  i.style.transform = "";
  i.style.transition = ".2s";
  proMenu.style.display = "none";
  pro.style.color = "rgb(65, 64, 64)";
}
function hideSolMenu(event) {
  var i = sol.querySelector("i");
  i.style.transform = "";
  i.style.transition = ".2s";
  solMenu.style.display = "none";
  sol.style.color = "rgb(65, 64, 64)";
}
function showSolMenu() {
  proMenu.style.display = "none";
  pro.style.color = "rgb(65, 64, 64)";
  var oldI = pro.querySelector("i");
  oldI.style.transform = "";
  oldI.style.transition = ".2s";
  var i = event.target.querySelector("i");
  i.style.transform = "rotate(0.5turn)";
  i.style.transition = ".2s";
  event.target.style.color = "blue";
  solMenu.style.display = "flex";
}
function hideAllMenu() {
  solMenu.style.display = "none";
  sol.style.color = "rgb(65, 64, 64)";
  var oldI = sol.querySelector("i");
  oldI.style.transform = "";
  oldI.style.transition = ".2s";
}
pro.addEventListener("mouseenter", showMenu);
proMenu.addEventListener("mouseleave", hideMenu);
sol.addEventListener("mouseenter", showSolMenu);
solMenu.addEventListener("mouseleave", hideSolMenu);
ent.addEventListener("mouseenter", hideAllMenu);
