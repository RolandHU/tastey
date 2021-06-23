var logo = document.getElementById("logo");
window.addEventListener("ratechange", meretezes);
window.addEventListener("resize", meretezes);
window.addEventListener("load", meretezes);

function meretezes() {
    var szel = window.innerWidth;
    logo.style.width = "0px";
    if (szel <= 500) {
        logo.style.width = szel - 20 + "px";
    } else {
        logo.style.width = "500px";
    }
    console.log(szel)
}