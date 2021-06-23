var logo = document.getElementById("logo");
var gomb = document.getElementById("egomb");
window.addEventListener("load", meretezes);
window.addEventListener("resize", meretezes);

function meretezes() {
    logo.style.width = "0px";
    var szel = window.innerWidth;
    if (szel >= 700) {
        logo.style.width = "600px";
    } else {
        logo.style.width = szel - 40 + "px";
    }
}