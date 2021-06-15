window.addEventListener("scroll", gorgetes);
var gomb = document.getElementById("gomb");

function gorgetes() {
    if (window.scrollY >= 920) {
        gomb.style.right = "100px";
        gomb.style.bottom = "100px";
    } else {
        gomb.style.right = "unset";
        gomb.style.bottom = "unset";
    }
}