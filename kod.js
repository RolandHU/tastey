var logo = document.getElementById("logo");
var gomb = document.getElementById("egomb");
var ajanlat = document.getElementsByClassName("ajanlat");
var kosar = 0;
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
    if (szel >= 1250) {
        for (let i = 0; i < ajanlat.length; i++) {
            ajanlat[i].style.width = "600px";
        }
    } else if (szel >= 900) {
        for (let i = 0; i < ajanlat.length; i++) {
            ajanlat[i].style.width = "430px";
        }
    } else {
        for (let i = 0; i < ajanlat.length; i++) {
            ajanlat[i].style.width = szel - 40 + "px";
        }
    }
}

function kosarba() {
    kosar = kosar + 1;
    window.alert("A termék kosárba helyezve. \nA kosár tartalma: " + kosar);
}